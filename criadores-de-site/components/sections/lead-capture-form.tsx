"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { SITE_BRAND, type NicheShowcaseItem } from "@/data/site-content";
import type { LeadSpreadsheetRow } from "@/lib/leads-schema";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PillButton } from "@/components/ui/pill-button";

interface LeadCaptureFormProps {
  selectedPreset: NicheShowcaseItem | null;
}

interface FormState {
  nomeEmpresaOuProfissional: string;
  nichoRamo: string;
  instagramUrl: string;
  telefoneWhatsapp: string;
  email: string;
  estiloVisualSugerido: string;
  coresSugeridas: string;
  estruturaSiteSugerida: string;
  mensagem: string;
  websiteHoneypot: string;
}

const INITIAL_STATE: FormState = {
  nomeEmpresaOuProfissional: "",
  nichoRamo: "Estúdio de Tatuagem",
  instagramUrl: "",
  telefoneWhatsapp: "",
  email: "",
  estiloVisualSugerido: "Apple Pro Dark",
  coresSugeridas: "Preto / Grafite / Azul Apple",
  estruturaSiteSugerida: "Vitrine Hero Dark + Bento Grid + Captura Validada",
  mensagem: "",
  websiteHoneypot: "",
};

const INPUT_CLASS =
  "mt-1.5 w-full min-h-[44px] rounded-xl border border-white/15 bg-black/70 px-3.5 py-2.5 text-sm text-titanium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link";

export function LeadCaptureForm({ selectedPreset }: LeadCaptureFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedRow, setSubmittedRow] = useState<LeadSpreadsheetRow | null>(null);

  useEffect(() => {
    if (!selectedPreset) return;
    setForm((prev) => ({
      ...prev,
      nichoRamo: selectedPreset.nichoRamo,
      estiloVisualSugerido: selectedPreset.estiloVisual,
      coresSugeridas: selectedPreset.coresSugeridas,
      estruturaSiteSugerida: selectedPreset.estruturaSugerida,
    }));
  }, [selectedPreset]);

  const whatsappHref = buildWhatsAppUrl({
    phoneE164: SITE_BRAND.whatsappPlaceholderE164,
    niche: form.nichoRamo,
    clientName: form.nomeEmpresaOuProfissional,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
    setSubmittedRow(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        lead?: LeadSpreadsheetRow;
      };

      if (!response.ok || !data.ok || !data.lead) {
        setErrorMessage(data.error ?? "Não foi possível validar os dados enviados.");
        return;
      }

      setSubmittedRow(data.lead);
    } catch {
      setErrorMessage("Falha de comunicação com o servidor local. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="orcamento" className="border-b border-white/10 bg-obsidian py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-apple-link">
              Captura Validada
            </p>
            <h2 className="mt-3 text-[clamp(1.85rem,3.6vw,3.0rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-titanium">
              Solicite uma proposta adaptada ao seu nicho.
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-titanium-muted">
              Os dados passam por validação Zod no servidor, proteção anti-spam e normalização para as 11
              colunas da planilha de leads.
            </p>

            {selectedPreset ? (
              <div className="mt-6 rounded-2xl border border-apple-link/40 bg-apple-blue/10 p-4 text-xs text-titanium">
                Modelo selecionado da vitrine:{" "}
                <strong className="font-semibold">{selectedPreset.nichoRamo}</strong> (
                {selectedPreset.coresSugeridas})
              </div>
            ) : null}

            <div className="mt-8 rounded-2xl border border-white/10 bg-surface-elevated p-5">
              <p className="text-xs font-medium text-titanium">Prefere atendimento direto?</p>
              <p className="mt-1.5 text-xs leading-relaxed text-titanium-muted">
                O link abaixo usa o construtor oficial de URL com UTM codificado (número placeholder de
                demonstração até configuração de produção).
              </p>
              <div className="mt-4">
                <PillButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Abrir modelo WhatsApp (UTM)
                </PillButton>
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-surface-elevated p-6 sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} className="min-w-0 space-y-4" noValidate>
              {/* Campo honeypot anti-spam oculto de usuários e leitores de tela */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="websiteHoneypot">Website</label>
                <input
                  id="websiteHoneypot"
                  name="websiteHoneypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.websiteHoneypot}
                  onChange={(e) => setForm((p) => ({ ...p, websiteHoneypot: e.target.value }))}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nomeEmpresa" className="block text-xs font-medium text-titanium">
                    Nome da empresa ou profissional *
                  </label>
                  <input
                    id="nomeEmpresa"
                    name="nomeEmpresaOuProfissional"
                    type="text"
                    required
                    placeholder="Ex.: Studio Horizonte"
                    value={form.nomeEmpresaOuProfissional}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, nomeEmpresaOuProfissional: e.target.value }))
                    }
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="nichoRamo" className="block text-xs font-medium text-titanium">
                    Nicho / Ramo *
                  </label>
                  <input
                    id="nichoRamo"
                    name="nichoRamo"
                    type="text"
                    required
                    value={form.nichoRamo}
                    onChange={(e) => setForm((p) => ({ ...p, nichoRamo: e.target.value }))}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="instagramUrl" className="block text-xs font-medium text-titanium">
                    Instagram (@ ou URL) *
                  </label>
                  <input
                    id="instagramUrl"
                    name="instagramUrl"
                    type="text"
                    required
                    placeholder="@seuperfil"
                    value={form.instagramUrl}
                    onChange={(e) => setForm((p) => ({ ...p, instagramUrl: e.target.value }))}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="telefoneWhatsapp" className="block text-xs font-medium text-titanium">
                    WhatsApp com DDD *
                  </label>
                  <input
                    id="telefoneWhatsapp"
                    name="telefoneWhatsapp"
                    type="tel"
                    required
                    placeholder="(11) 99999-0000"
                    value={form.telefoneWhatsapp}
                    onChange={(e) => setForm((p) => ({ ...p, telefoneWhatsapp: e.target.value }))}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-titanium">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="estiloVisual" className="block text-xs font-medium text-titanium">
                    Estilo visual desejado
                  </label>
                  <input
                    id="estiloVisual"
                    name="estiloVisualSugerido"
                    type="text"
                    value={form.estiloVisualSugerido}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, estiloVisualSugerido: e.target.value }))
                    }
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="coresSugeridas" className="block text-xs font-medium text-titanium">
                    Paleta sugerida
                  </label>
                  <input
                    id="coresSugeridas"
                    name="coresSugeridas"
                    type="text"
                    value={form.coresSugeridas}
                    onChange={(e) => setForm((p) => ({ ...p, coresSugeridas: e.target.value }))}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="estruturaSite" className="block text-xs font-medium text-titanium">
                  Estrutura sugerida
                </label>
                <input
                  id="estruturaSite"
                  name="estruturaSiteSugerida"
                  type="text"
                  value={form.estruturaSiteSugerida}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, estruturaSiteSugerida: e.target.value }))
                  }
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-medium text-titanium">
                  Objetivo principal do site (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  placeholder="Ex.: Preciso de agenda online e portfólio com carregamento rápido."
                  value={form.mensagem}
                  onChange={(e) => setForm((p) => ({ ...p, mensagem: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-black/70 px-3.5 py-2.5 text-sm text-titanium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link"
                />
              </div>

              <div className="pt-2">
                <PillButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {submitting ? "Validando e enviando..." : "Enviar solicitação validada"}
                </PillButton>
              </div>

              <div aria-live="polite" className="min-w-0 space-y-3 pt-2">
                {errorMessage ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-500/40 bg-red-500/10 p-3.5 text-xs text-red-200"
                  >
                    {errorMessage}
                  </p>
                ) : null}

                {submittedRow ? (
                  <div className="min-w-0 max-w-full rounded-2xl border border-emerald-500/35 bg-emerald-500/10 p-4 text-xs text-emerald-100">
                    <p className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      Payload validado e formatado para as 11 colunas da planilha (sem envio externo
                      conectado nesta onda):
                    </p>
                    <pre className="mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-black/70 p-3 font-mono text-[11px] text-titanium-muted">
                      {JSON.stringify(submittedRow, null, 2)}
                    </pre>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
