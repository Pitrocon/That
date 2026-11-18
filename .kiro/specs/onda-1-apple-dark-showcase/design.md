# Design — Onda 1: Arquitetura da Vitrine Apple Dark

## Topologia da Aplicação (`criadores-de-site/`)
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (`strict: true`) + Tailwind CSS 3.4 + Zod + Lucide React.
- **Camada de Domínio (`lib/`):**
  - `lib/leads-schema.ts`: `leadSubmissionSchema`, `sanitizeForSpreadsheet`, `mapToLeadSpreadsheetRow`.
  - `lib/rate-limit.ts`: `checkRateLimit` em memória por IP/janela.
  - `lib/whatsapp.ts`: `buildWhatsAppUrl` com encoding seguro e parâmetros UTM.
- **Dados Estruturados (`data/`):**
  - `data/site-content.ts`: copy institucional, métricas, Bento Grid, os 3 nichos demonstrativos de `Context/modelo-planilha-leads.csv`, etapas do processo e FAQ.
- **UI & Rotas (`components/` e `app/`):**
  - `components/ui/pill-button.tsx`: variações `primary`, `light` e `outline`.
  - `components/sections/`: `navbar.tsx`, `hero-apple-dark.tsx`, `bento-grid.tsx`, `niche-showcase.tsx`, `process-and-faq.tsx`, `lead-capture-form.tsx`, `footer.tsx`.
  - `app/`: `globals.css`, `layout.tsx` (metadata + JSON-LD), `page.tsx`, `sitemap.ts`, `robots.ts`, `api/leads/route.ts`.
- **Verificação:**
  - `tests/leads.test.ts` rodando via `node --import tsx --test`.
  - Validação visual opcional em `http://localhost:3000` via subagente `browser`.
