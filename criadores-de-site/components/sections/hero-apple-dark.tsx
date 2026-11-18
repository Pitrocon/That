"use client";

import { useState } from "react";
import { ArrowRight, Pause, Play, ShieldCheck } from "lucide-react";
import { ENGINEERING_METRICS } from "@/data/site-content";
import { PillButton } from "@/components/ui/pill-button";

export function HeroAppleDark() {
  const [animationsPaused, setAnimationsPaused] = useState(false);

  return (
    <section
      id="vitrine"
      className="relative overflow-hidden border-b border-white/10 bg-obsidian pb-20 pt-14 sm:pt-20 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[420px] max-w-4xl rounded-full bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.22)_0%,rgba(232,201,122,0.08)_40%,transparent_72%)] blur-3xl ${
          animationsPaused ? "" : "motion-safe:animate-pulse"
        }`}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface-elevated/90 px-3.5 py-1.5 font-mono text-xs text-titanium-muted">
            <span className="h-2 w-2 rounded-full bg-apple-link" aria-hidden="true" />
            Apple Pro Dark · Fábrica Multi-Nicho
          </p>

          <button
            type="button"
            aria-pressed={animationsPaused}
            onClick={() => setAnimationsPaused((prev) => !prev)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 bg-surface-elevated/90 px-4 py-2 text-xs font-medium text-titanium-muted transition-colors hover:border-white/30 hover:text-titanium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link"
          >
            {animationsPaused ? (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                Retomar animação
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                Pausar animação
              </>
            )}
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h1 className="bg-gradient-to-b from-white via-titanium to-zinc-400 bg-clip-text text-[clamp(2.35rem,5.4vw,4.75rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-transparent">
            Sites sob medida.
            <br />
            Precisão escura que converte.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-titanium-muted sm:text-lg">
            Estética minimalista inspirada em vitrines de hardware, adaptada com identidade própria para
            negócios locais e captura validada de leads.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <PillButton href="#nichos" variant="primary" size="lg">
              Explorar modelos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PillButton>
            <PillButton href="#orcamento" variant="outline" size="lg">
              Solicitar projeto
            </PillButton>
          </div>
        </div>

        {/* Mockup Apple Pro Dark de vitrine */}
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-surface-contrast to-surface p-3 shadow-card sm:p-5">
          <div className="rounded-2xl border border-white/10 bg-black/90 p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="font-mono text-xs text-titanium-muted">
                criadores-de-site · arquétipo: apple-pro-dark
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Zod + WCAG AA
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-apple-link">
                  Vitrine Modular · Onda 1
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-titanium sm:text-3xl">
                  Da pesquisa visual ao deploy sem templates genéricos.
                </p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-titanium-muted">
                  Cada nicho recebe paleta semântica, estrutura específica de conversão e saída compatível
                  com a planilha comercial de 11 colunas.
                </p>
              </div>

              <div className="grid gap-3 rounded-2xl border border-white/10 bg-surface-elevated p-4">
                <div className="flex items-center justify-between text-xs text-titanium-muted">
                  <span>Superfície primária</span>
                  <code className="font-mono text-titanium">#000000</code>
                </div>
                <div className="flex items-center justify-between text-xs text-titanium-muted">
                  <span>Elevação titânio</span>
                  <code className="font-mono text-titanium">#121216</code>
                </div>
                <div className="flex items-center justify-between text-xs text-titanium-muted">
                  <span>Ação padrão</span>
                  <code className="font-mono text-apple-link">#0071e3</code>
                </div>
                <div className="flex items-center justify-between text-xs text-titanium-muted">
                  <span>Detalhe metálico</span>
                  <code className="font-mono text-titanium-gold">#e8c97a</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de métricas técnicas */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {ENGINEERING_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-surface-elevated/70 p-5"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-titanium-muted">
                {metric.label}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-titanium">{metric.value}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-titanium-muted">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
