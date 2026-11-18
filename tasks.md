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

## Próximas Ondas Planejadas
- [ ] **Onda 1 — Core da Fábrica de Sites (`criadores-de-site/`):** scaffolding web (Next.js App Router + TypeScript + Tailwind + shadcn/ui), sistema de tokens por nicho e contrato de captura de leads
- [ ] **Onda 2 — Piloto End-to-End (1º Nicho + Pacote Social Media):** gerar site completo de um nicho piloto + pacote editorial/prospecção correspondente via `Context/contrato-handoff-site-social.md`
