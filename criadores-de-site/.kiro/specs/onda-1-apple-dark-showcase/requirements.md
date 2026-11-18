# Requirements — Onda 1 (`criadores-de-site/`): Vitrine Apple Dark

## Escopo Técnico
Construir a aplicação web Next.js App Router da frente `criadores-de-site/` no estilo **Apple Pro Dark**, servindo simultaneamente como vitrine da fábrica de sites, demonstração interativa de 3 nichos da planilha base e endpoint seguro de captura de leads.

## Requisitos
1. **Briefing Visual e Tokens:** Seguir `briefings/apple-dark-showcase.md` com contraste WCAG AA (`>= 4.5:1` texto normal, `>= 3:1` texto grande/controles) e suporte a `prefers-reduced-motion` + botão explícito de pausa de animação no hero.
2. **Modularidade:** Separar `lib/`, `data/`, `components/ui/`, `components/sections/`, `app/` e `tests/`.
3. **Segurança & Contrato de Leads:** `POST /api/leads` valida entrada com Zod, bloqueia honeypot, aplica rate limit por IP, sanitiza prefixos de fórmula (`=`, `+`, `-`, `@`, `\t`, `\r`) e mapeia para as 11 colunas de `../Context/modelo-planilha-leads.csv`.
4. **SEO & Indexação:** Metadados completos, JSON-LD `Schema.org`, `sitemap.ts` e `robots.ts`.
5. **Qualidade:** `tsc --noEmit`, `npm run lint`, `npm test` e `npm run build` passando sem erros; emitir `docs/pacote-portfolio-onda-1.md`.
