export interface WhatsAppUrlOptions {
  phoneE164: string;
  niche: string;
  clientName?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

/**
 * Gera link oficial wa.me com mensagem estruturada e metadados UTM codificados.
 */
export function buildWhatsAppUrl({
  phoneE164,
  niche,
  clientName,
  utmSource = "vitrine-apple-dark",
  utmMedium = "cta-site",
  utmCampaign = "onda-1-showcase",
}: WhatsAppUrlOptions): string {
  const digits = phoneE164.replace(/\D/g, "");
  const cleanNiche = niche.trim() || "Site Multi-Nicho";
  const greeting = clientName?.trim()
    ? `Olá! Sou ${clientName.trim()} e tenho interesse em um site no estilo Apple Dark para o nicho "${cleanNiche}".`
    : `Olá! Tenho interesse em um site no estilo Apple Dark para o nicho "${cleanNiche}".`;

  const trackingTag = `[origem=${utmSource}&meio=${utmMedium}&campanha=${utmCampaign}]`;
  const text = encodeURIComponent(`${greeting} ${trackingTag}`);

  return `https://wa.me/${digits}?text=${text}`;
}
