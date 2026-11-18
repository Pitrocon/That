import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { POST } from "../app/api/leads/route";
import {
  SPREADSHEET_COLUMNS,
  leadSubmissionSchema,
  mapToLeadSpreadsheetRow,
  sanitizeForSpreadsheet,
} from "../lib/leads-schema";
import { checkRateLimit, resetRateLimitStore } from "../lib/rate-limit";
import { buildWhatsAppUrl } from "../lib/whatsapp";

afterEach(() => {
  resetRateLimitStore();
});

describe("Contrato e sanitização de leads", () => {
  it("valida payload válido e aplica defaults", () => {
    const parsed = leadSubmissionSchema.safeParse({
      nomeEmpresaOuProfissional: "Studio Obsidian",
      nichoRamo: "Estúdio de Tatuagem",
      instagramUrl: "@studioobsidian",
      telefoneWhatsapp: "(11) 98888-7777",
      email: "contato@studioobsidian.com",
    });

    assert.equal(parsed.success, true);
    if (parsed.success) {
      assert.equal(parsed.data.estiloVisualSugerido, "Apple Pro Dark");
      assert.equal(parsed.data.websiteHoneypot, "");
    }
  });

  it("rejeita submissão quando honeypot está preenchido", () => {
    const parsed = leadSubmissionSchema.safeParse({
      nomeEmpresaOuProfissional: "Bot Spam",
      nichoRamo: "Clínica de Estética",
      instagramUrl: "@spam",
      telefoneWhatsapp: "11999998888",
      email: "bot@example.com",
      websiteHoneypot: "https://spam.invalid",
    });

    assert.equal(parsed.success, false);
  });

  it("neutraliza prefixos de fórmula em planilhas", () => {
    assert.equal(sanitizeForSpreadsheet("=CMD('calc')"), "'=CMD('calc')");
    assert.equal(sanitizeForSpreadsheet("+12345"), "'+12345");
    assert.equal(sanitizeForSpreadsheet("@SUM(A1:A2)"), "'@SUM(A1:A2)");
    assert.equal(sanitizeForSpreadsheet("-2+3"), "'-2+3");
    assert.equal(sanitizeForSpreadsheet("\t=1+1"), "'=1+1");
    assert.equal(sanitizeForSpreadsheet("Studio Normal"), "Studio Normal");
  });

  it("mapeia exatamente as 11 colunas da planilha de leads", () => {
    const parsed = leadSubmissionSchema.parse({
      nomeEmpresaOuProfissional: "Exemplo Ink Studio",
      nichoRamo: "Estúdio de Tatuagem",
      instagramUrl: "@exemploink",
      telefoneWhatsapp: "(11) 99999-0001",
      email: "contato@exemploink.com",
      estiloVisualSugerido: "Dark / Industrial",
      coresSugeridas: "Preto / Vermelho / Cinza",
      estruturaSiteSugerida: "Galeria Dinâmica + Agendamento Online",
      mensagem: "Quero foco em orçamento rápido",
    });

    const row = mapToLeadSpreadsheetRow(parsed, 1);
    assert.deepEqual(Object.keys(row), [...SPREADSHEET_COLUMNS]);
    assert.equal(row.ID_Lead, 1);
    assert.equal(row.Status_Abordagem_DM, "Pendente");
    assert.equal(row.Instagram_URL, "'@exemploink");
  });
});

describe("Rate limiter e construtor de WhatsApp", () => {
  it("bloqueia requisições acima do limite dentro da janela", () => {
    const now = 1_000_000;
    assert.equal(checkRateLimit("ip-1", 2, 60_000, now).allowed, true);
    assert.equal(checkRateLimit("ip-1", 2, 60_000, now + 100).allowed, true);
    assert.equal(checkRateLimit("ip-1", 2, 60_000, now + 200).allowed, false);
    assert.equal(checkRateLimit("ip-1", 2, 60_000, now + 60_001).allowed, true);
  });

  it("gera URL wa.me com dígitos E164 e texto codificado com UTM", () => {
    const url = buildWhatsAppUrl({
      phoneE164: "+55 (11) 99999-0000",
      niche: "Clínica de Estética",
      clientName: "Ana",
    });

    assert.ok(url.startsWith("https://wa.me/5511999990000?text="));
    const decoded = decodeURIComponent(url.split("?text=")[1]);
    assert.ok(decoded.includes("Ana"));
    assert.ok(decoded.includes("Clínica de Estética"));
    assert.ok(decoded.includes("origem=vitrine-apple-dark"));
  });
});

describe("Route Handler POST /api/leads", () => {
  it("retorna 201 com linha formatada para payload válido e 429 ao exceder limite", async () => {
    const payload = {
      nomeEmpresaOuProfissional: "Banda Exemplo Rock",
      nichoRamo: "Músico / Banda",
      instagramUrl: "@bandaexemplorock",
      telefoneWhatsapp: "(21) 98888-0002",
      email: "agenda@bandaexemplo.com",
    };

    for (let i = 0; i < 5; i += 1) {
      const res = await POST(
        new Request("http://localhost:3000/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-real-ip": "198.51.100.10",
          },
          body: JSON.stringify(payload),
        }),
      );
      assert.equal(res.status, 201);
      const body = (await res.json()) as { ok: boolean; persistedExternally: boolean };
      assert.equal(body.ok, true);
      assert.equal(body.persistedExternally, false);
    }

    const blockedRes = await POST(
      new Request("http://localhost:3000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-real-ip": "198.51.100.10",
        },
        body: JSON.stringify(payload),
      }),
    );
    assert.equal(blockedRes.status, 429);
  });

  it("retorna 400 para JSON malformado ou campo inválido", async () => {
    const res = await POST(
      new Request("http://localhost:3000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-real-ip": "198.51.100.20",
        },
        body: JSON.stringify({ email: "invalido" }),
      }),
    );
    assert.equal(res.status, 400);
  });
});
