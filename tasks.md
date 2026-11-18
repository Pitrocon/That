# Tasks do Projeto — Fábrica de Sites & Social Media

## Onda 0 — Estruturação de Agentes, Skills e Governança Kiro
- [x] Mapear documentação do Google Drive (`Projeto_Agentes_IA_Sites`) e consolidar referência em `Context/`
- [x] Criar estrutura raiz `.kiro/` (`orquestrador-geral`, 5 steering files, 2 skills globais, hook de continuidade e spec `onda-0-estrutura-agentes`)
- [x] Criar frente isolada `criadores-de-site/` (5 agentes Kiro V3 sem BOM, 6 skills exclusivas de sites, 3 steering files, 2 hooks e spec `onda-0-fundacao-sites`)
- [x] Criar frente isolada `criadores-de-social-media/` (5 agentes Kiro V3 sem BOM, 6 skills exclusivas de social media/prospecção, 3 steering files, 1 hook e spec `onda-0-fundacao-social`)
- [x] Criar arquivos vivos na raiz (`tasks.md`, `tasks-agentes.md`, `memory.md`) e contrato de integração (`Context/contrato-handoff-site-social.md`)
- [x] Validar ausência de UTF-8 BOM, sintaxe JSON, resolução de `skill://`/`file://`, `kiro-cli agent validate` e `kiro-cli agent list` nos 3 escopos
- [x] Inicializar Git (`main`) e realizar commit da Onda 0

## Onda 0.5 — Benchmarks Visuais de Referência
- [x] Inspecionar os 5 sites de referência (`integral-imi.com`, `tattooonda.com.br`, `apple.com`, `blog.google` Gemini 4 Hydrogen, `amd.com/pt.html`) no navegador
- [x] Consolidar arquétipos e padrões de UX/conversão em `Context/benchmarks-visuais.md` e `criadores-de-site/.kiro/steering/benchmarks-visuais.md`
- [x] Vincular catálogo de benchmarks ao `site-pesquisa-nichos` e validar no `kiro-cli`

## Onda 1 — Core da Fábrica de Sites & Vitrine Apple Pro Dark (`criadores-de-site/`)
- [x] Criar specs da Onda 1 e briefing visual Apple Pro Dark (`criadores-de-site/briefings/apple-dark-showcase.md`)
- [x] Inicializar stack Next.js 15 App Router + TypeScript estrito + Tailwind 3.4 + Zod + Lucide + ESLint
- [x] Implementar camada de domínio (`lib/leads-schema.ts`, `lib/rate-limit.ts`, `lib/whatsapp.ts`, `data/site-content.ts`) e endpoint `POST /api/leads`
- [x] Implementar UI Apple Dark (`Navbar`, `HeroAppleDark`, `BentoGrid`, `NicheShowcase`, `ProcessAndFaq`, `LeadCaptureForm`, `Footer`) e SEO (`metadata`, JSON-LD, `sitemap.ts`, `robots.ts`)
- [x] Criar testes (`tests/leads.test.ts`), pacote de portfólio (`docs/pacote-portfolio-onda-1.md`) e rodar `typecheck`, `lint`, `test` (8/8) e `build`
- [x] Inspecionar em navegador real (`http://localhost:3000` em `1440x900` e `390x844`), corrigir overflow mobile/quebra de abas e revalidar após rebuild
- [x] Atualizar memória viva e realizar commit da Onda 1

## Próximas Ondas Planejadas
- [ ] **Onda 2 — Ativação Social Media & Prospecção (`criadores-de-social-media/`):** gerar calendário editorial, copies e abordagem DM a partir de `criadores-de-site/docs/pacote-portfolio-onda-1.md`
- [ ] **Onda 3 — 1º Site Exclusivo de Nicho / Integração Externa:** construir aplicação dedicada para o primeiro cliente/nicho escolhido e conectar persistência externa de leads (quando credenciais/webhook forem definidos)
