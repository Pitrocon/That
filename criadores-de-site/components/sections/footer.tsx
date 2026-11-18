import { NAV_LINKS, SITE_BRAND } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-surface py-14 text-xs text-titanium-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-titanium">{SITE_BRAND.name}</p>
            <p className="mt-2 max-w-xs leading-relaxed">
              {SITE_BRAND.tagline}. Estrutura multiagente Kiro com estética Apple Pro Dark.
            </p>
          </div>

          <div>
            <p className="font-semibold text-titanium">Mapa da Vitrine</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-titanium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-titanium">Contratos & Qualidade</p>
            <ul className="mt-3 space-y-2">
              <li>Next.js App Router + TypeScript estrito</li>
              <li>Validação Zod + Sanitização de planilha</li>
              <li>SEO técnico (JSON-LD, Sitemap, Robots)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>{SITE_BRAND.seedNotice}</p>
          <p className="font-mono text-[11px] text-zinc-400">Onda 1 · Criadores de Site</p>
        </div>
      </div>
    </footer>
  );
}
