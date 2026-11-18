"use client";

import { ArrowUpRight, CheckCircle2, Palette } from "lucide-react";
import { NICHE_SHOWCASE_ITEMS, type NicheShowcaseItem } from "@/data/site-content";
import { PillButton } from "@/components/ui/pill-button";

interface NicheShowcaseProps {
  activeId: string;
  onChangeActive: (item: NicheShowcaseItem) => void;
  onRequestModel: (item: NicheShowcaseItem) => void;
}

export function NicheShowcase({
  activeId,
  onChangeActive,
  onRequestModel,
}: NicheShowcaseProps) {
  const activeItem =
    NICHE_SHOWCASE_ITEMS.find((item) => item.id === activeId) ?? NICHE_SHOWCASE_ITEMS[0];

  return (
    <section id="nichos" className="border-b border-white/10 bg-obsidian py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-apple-link">
              Diversidade Multi-Nicho
            </p>
            <h2 className="mt-3 text-[clamp(1.85rem,3.6vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-titanium">
              Um núcleo técnico. Três personalidades visuais.
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-titanium-muted">
              Alterne entre os segmentos de referência da planilha base para ver como o sistema adapta
              cores, seções e CTAs sem repetir template genérico.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Selecionar nicho demonstrativo"
            className="flex shrink-0 flex-wrap gap-2 rounded-2xl border border-white/10 bg-surface-elevated p-1.5"
          >
            {NICHE_SHOWCASE_ITEMS.map((item) => {
              const selected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => onChangeActive(item)}
                  className={`min-h-[44px] whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link ${
                    selected
                      ? "bg-titanium text-black"
                      : "text-titanium-muted hover:bg-white/[0.06] hover:text-titanium"
                  }`}
                >
                  {item.nichoRamo}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-label={activeItem.nichoRamo}
          className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-surface-elevated p-6 sm:p-8 lg:grid-cols-12"
        >
          {/* Coluna de metadados do nicho */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div>
              <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-[11px] text-amber-200">
                {activeItem.badgeSeed}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-titanium">
                {activeItem.nomeExemplo}
              </h3>
              <p className="mt-1 font-mono text-xs text-titanium-muted">
                {activeItem.nichoRamo} · {activeItem.instagramExemplo}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-titanium-muted">
                {activeItem.resumoProposta}
              </p>
              <p className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3.5 text-xs leading-relaxed text-titanium-muted">
                {activeItem.observacaoOriginal}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-medium text-titanium">
                  <Palette className="h-4 w-4 text-titanium-muted" aria-hidden="true" />
                  Paleta Sugerida ({activeItem.coresSugeridas})
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeItem.swatches.map((hex) => (
                    <span
                      key={hex}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-titanium-muted"
                    >
                      <span
                        className="h-3 w-3 rounded-full border border-white/20"
                        style={{ backgroundColor: hex }}
                        aria-hidden="true"
                      />
                      {hex}
                    </span>
                  ))}
                </div>
              </div>

              <PillButton
                variant="primary"
                size="md"
                onClick={() => onRequestModel(activeItem)}
                className="w-full sm:w-auto"
              >
                Usar este modelo no orçamento
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </PillButton>
            </div>
          </div>

          {/* Preview estilo hardware / tela */}
          <div className="rounded-2xl border border-white/10 bg-black p-5 sm:p-7 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-titanium-muted">
                {activeItem.estiloVisual}
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-black"
                style={{ backgroundColor: activeItem.accentHex }}
              >
                {activeItem.estruturaSugerida}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-semibold tracking-tight text-titanium sm:text-3xl">
                {activeItem.heroPreviewHeadline}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-titanium-muted">
                {activeItem.heroPreviewSub}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span
                  className="inline-flex min-h-[40px] items-center rounded-full px-4 text-xs font-semibold text-black"
                  style={{ backgroundColor: activeItem.accentHex }}
                >
                  {activeItem.primaryCtaLabel}
                </span>
                <span className="inline-flex min-h-[40px] items-center rounded-full border border-white/20 px-4 text-xs font-medium text-titanium">
                  {activeItem.secondaryCtaLabel}
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-titanium-muted">
                Módulos planejados para este nicho
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {activeItem.modulos.map((modulo) => (
                  <li
                    key={modulo}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-surface-elevated p-3 text-xs leading-relaxed text-titanium-muted"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      style={{ color: activeItem.accentHex }}
                      aria-hidden="true"
                    />
                    <span>{modulo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
