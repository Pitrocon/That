import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS, PROCESS_STEPS } from "@/data/site-content";

export function ProcessAndFaq() {
  return (
    <section id="processo" className="border-b border-white/10 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-apple-link">
            Pipeline Multi-Agente
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,3.6vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-titanium">
            Quatro etapas fechadas até o build aprovado.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <article
              key={step.wave}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-surface-elevated p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-apple-link">
                    ONDA {step.wave}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-titanium">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-titanium-muted">
                  {step.description}
                </p>
              </div>
              <p className="mt-6 border-t border-white/10 pt-3 font-mono text-[11px] text-titanium-gold">
                {step.agent}
              </p>
            </article>
          ))}
        </div>

        <div id="faq" className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-apple-link">
              Dúvidas Frequentes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-titanium">
              Transparência técnica antes de começar.
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-titanium-muted">
              Respostas diretas sobre diversidade visual, contrato de leads e critérios reais de QA.
            </p>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-surface-elevated p-5 open:border-white/20"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-titanium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-titanium-muted transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-titanium-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
