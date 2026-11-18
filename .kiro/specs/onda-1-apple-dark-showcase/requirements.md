# Requirements — Onda 1: Vitrine e Fábrica de Sites no Estilo Apple Dark

## Objetivo
Implementar a primeira aplicação web funcional dentro de `criadores-de-site/` com estética **Apple Pro Dark** (preto obsidiana `#000000`, superfícies titânio/grafite, Bento Grid, fórmula de duplo CTA pill e controle acessível de animação), reunindo vitrine interativa multi-nicho e captura validada de leads compatível com `Context/modelo-planilha-leads.csv`.

## Requisitos Funcionais
1. **Estética Apple Pro Dark:**
   - Base `#000000`, superfícies elevadas (`#0a0a0c`, `#121216`, `#16161b`), bordas translúcidas (`rgba(255,255,255,0.10)`), texto `#f5f5f7` e `#a1a1aa`, CTA primário `#0071e3`.
   - Navbar global sticky translúcida, hero dark com botão acessível de pausa de animação (`aria-pressed`), Bento Grid simétrico `2xN`, seletor interativo multi-nicho, fluxo em 4 etapas + FAQ, formulário de captura e rodapé transparente.
2. **Vitrine Interativa Multi-Nicho (`[MODELO DEMONSTRATIVO / SEED]`):**
   - Exibir os 3 nichos de referência de `Context/modelo-planilha-leads.csv` (*Estúdio de Tatuagem — Exemplo Ink Studio*, *Músico / Banda — Banda Exemplo Rock*, *Clínica de Estética — Estética Renova*) com rotulagem explícita de demonstração/seed e botão para pré-preencher o formulário de orçamento.
3. **Captura de Leads & Segurança (`POST /api/leads` + WhatsApp UTM):**
   - Validação estrita server-side com Zod, campo honeypot oculto, rate-limit em memória, sanitização contra formula injection (`=`, `+`, `-`, `@`, `\t`, `\r`) e mapeamento exato para as 11 colunas da planilha de leads.
4. **SEO Técnico, Acessibilidade e QA:**
   - `metadata` OpenGraph/Twitter, JSON-LD `Schema.org` escapado com segurança, `sitemap.ts`, `robots.ts`, contraste WCAG AA e testes automatizados.
5. **Handoff para Social Media:**
   - Emitir `criadores-de-site/docs/pacote-portfolio-onda-1.md` conforme `Context/contrato-handoff-site-social.md`.

## Critérios de Aceite
- `npm run typecheck`, `npm run lint`, `npm test` e `npm run build` executados em `criadores-de-site/` com saída `0`.
- Todos os arquivos `.json` em UTF-8 sem BOM.
- `tasks.md`, `tasks-agentes.md`, `memory.md` e specs atualizados com evidências reais e linha explícita `NÃO verificado:`.
