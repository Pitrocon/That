import { z } from "zod";

export const SPREADSHEET_COLUMNS = [
  "ID_Lead",
  "Nicho_Ramo",
  "Nome_Empresa_ou_Profissional",
  "Instagram_URL",
  "Telefone_WhatsApp",
  "Email",
  "Estilo_Visual_Sugerido",
  "Cores_Sugeridas",
  "Estrutura_Site_Sugerida",
  "Status_Abordagem_DM",
  "Observacoes_Validador",
] as const;

export const leadSubmissionSchema = z
  .object({
    nomeEmpresaOuProfissional: z
      .string()
      .trim()
      .min(2, "Informe o nome da empresa ou profissional (mínimo 2 caracteres).")
      .max(120, "Nome deve ter no máximo 120 caracteres."),
    nichoRamo: z
      .string()
      .trim()
      .min(2, "Selecione ou informe o nicho de atuação.")
      .max(80, "Nicho deve ter no máximo 80 caracteres."),
    instagramUrl: z
      .string()
      .trim()
      .min(2, "Informe o @ ou link do Instagram.")
      .max(160, "Instagram deve ter no máximo 160 caracteres."),
    telefoneWhatsapp: z
      .string()
      .trim()
      .min(8, "Informe um WhatsApp válido com DDD.")
      .max(30, "Telefone deve ter no máximo 30 caracteres.")
      .refine((val) => val.replace(/\D/g, "").length >= 10, {
        message: "Informe pelo menos 10 dígitos no WhatsApp (com DDD).",
      }),
    email: z
      .string()
      .trim()
      .email("Informe um e-mail válido.")
      .max(120, "E-mail deve ter no máximo 120 caracteres."),
    estiloVisualSugerido: z
      .string()
      .trim()
      .min(2, "Escolha um estilo visual sugerido.")
      .max(100, "Estilo visual deve ter no máximo 100 caracteres.")
      .default("Apple Pro Dark"),
    coresSugeridas: z
      .string()
      .trim()
      .max(120, "Cores sugeridas devem ter no máximo 120 caracteres.")
      .optional()
      .default("Preto / Grafite / Azul Apple"),
    estruturaSiteSugerida: z
      .string()
      .trim()
      .max(160, "Estrutura sugerida deve ter no máximo 160 caracteres.")
      .optional()
      .default("Vitrine Hero Dark + Bento Grid + Captura Validada"),
    mensagem: z
      .string()
      .trim()
      .max(600, "Mensagem deve ter no máximo 600 caracteres.")
      .optional()
      .default(""),
    websiteHoneypot: z
      .string()
      .max(0, "Solicitação rejeitada pela verificação anti-spam.")
      .optional()
      .default(""),
  })
  .strict();

export type LeadSubmissionInput = z.input<typeof leadSubmissionSchema>;
export type ValidatedLeadSubmission = z.infer<typeof leadSubmissionSchema>;

export interface LeadSpreadsheetRow {
  ID_Lead: number;
  Nicho_Ramo: string;
  Nome_Empresa_ou_Profissional: string;
  Instagram_URL: string;
  Telefone_WhatsApp: string;
  Email: string;
  Estilo_Visual_Sugerido: string;
  Cores_Sugeridas: string;
  Estrutura_Site_Sugerida: string;
  Status_Abordagem_DM: "Pendente";
  Observacoes_Validador: string;
}

const DANGEROUS_FORMULA_PREFIX = /^[=+\-@\t\r]/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/**
 * Normaliza texto e neutraliza prefixos de fórmula para uso seguro em CSV/Google Sheets.
 */
export function sanitizeForSpreadsheet(rawValue: string): string {
  const withoutUnsafeControl = rawValue.replace(CONTROL_CHARS, "");
  const startsWithDangerousRaw = DANGEROUS_FORMULA_PREFIX.test(withoutUnsafeControl);
  const cleaned = withoutUnsafeControl.replace(/[\r\n]+/g, " ").trim();

  if (!cleaned) {
    return "";
  }

  if (startsWithDangerousRaw || DANGEROUS_FORMULA_PREFIX.test(cleaned)) {
    return `'${cleaned.replace(/^[\t\r]+/, "")}`;
  }

  return cleaned;
}

/**
 * Converte um lead validado para o contrato exato de 11 colunas de Context/modelo-planilha-leads.csv.
 */
export function mapToLeadSpreadsheetRow(
  input: ValidatedLeadSubmission,
  idLead: number,
): LeadSpreadsheetRow {
  const observacaoBase = input.mensagem
    ? `Solicitado via Vitrine Apple Dark: ${input.mensagem}`
    : "Solicitado via formulário da Vitrine Apple Dark (Onda 1)";

  return {
    ID_Lead: idLead,
    Nicho_Ramo: sanitizeForSpreadsheet(input.nichoRamo),
    Nome_Empresa_ou_Profissional: sanitizeForSpreadsheet(input.nomeEmpresaOuProfissional),
    Instagram_URL: sanitizeForSpreadsheet(input.instagramUrl),
    Telefone_WhatsApp: sanitizeForSpreadsheet(input.telefoneWhatsapp),
    Email: sanitizeForSpreadsheet(input.email),
    Estilo_Visual_Sugerido: sanitizeForSpreadsheet(input.estiloVisualSugerido),
    Cores_Sugeridas: sanitizeForSpreadsheet(input.coresSugeridas),
    Estrutura_Site_Sugerida: sanitizeForSpreadsheet(input.estruturaSiteSugerida),
    Status_Abordagem_DM: "Pendente",
    Observacoes_Validador: sanitizeForSpreadsheet(observacaoBase),
  };
}
