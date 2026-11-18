import { BENTO_FEATURES } from "@/data/site-content";

export function BentoGrid() {
  return (
    <section id="bento" className="border-b border-white/10 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-apple-link">
            Arquitetura de Precisão
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,3.6vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-titanium">
            Design limpo por fora. Engenharia rígida por dentro.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-titanium-muted">
            Construído sobre os padrões do ecossistema Kiro para entregar sites rápidos, indexáveis e
            prontos para captar leads com segurança.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {BENTO_FEATURES.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col justify-between rounded-3xl border border-white/10 bg-surface-elevated p-7 transition-colors hover:border-white/20 ${
                item.span === "wide" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-titanium-gold">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-titanium sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-titanium-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-7 border-t border-white/10 pt-4">
                <code className="font-mono text-xs text-apple-link">{item.highlight}</code>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
