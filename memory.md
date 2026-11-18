# Memória Viva do Projeto

## 2026-11-18 — Onda 0: Estrutura de Agentes, Skills e Governança Kiro

### Decisões Técnicas e Arquiteturais Aprovadas
- **Descoberta do Kiro CLI (`kiro-cli 3.0.0`):** Confirmado empiricamente que `kiro-cli agent list` descobre apenas arquivos `*.json` no nível superior de `.kiro/agents/` do diretório de trabalho atual (sem percorrer subpastas). Por isso, adotou-se a topologia de **duas frentes autônomas** (`criadores-de-site/` e `criadores-de-social-media/`), cada uma com seu próprio `.kiro/` completo (`agents`, `skills`, `steering`, `hooks`, `specs`), além de um **hub raiz** (`.kiro/` com `orquestrador-geral`).
- **Adaptação do Modelo do Google Drive:** Os papéis originais da documentação do Drive (`Projeto_Agentes_IA_Sites`) foram consolidados em 11 agentes Kiro V3 acionáveis (1 na raiz, 5 em `criadores-de-site/` e 5 em `criadores-de-social-media/`), com **14 skills separadas** por domínio (2 de orquestração na raiz, 6 exclusivas de sites e 6 exclusivas de social media).
- **Formato Kiro V3 sem BOM:** Todos os agentes usam exclusivamente o schema V3 (`tools`, `permissions.rules`, `resources` com `file://` e `skill://`, `includeMcpJson`, `model: null`) gravados em UTF-8 sem BOM.
- **Contrato entre Frentes:** Criado `Context/contrato-handoff-site-social.md` padronizando o envio de Briefing de Nicho/Lead (`social -> site`) e Pacote de Portfólio (`site -> social`), mantendo as skills de cada pasta desacopladas.

### Arquivos Criados / Alterados
- **Raiz e Contexto:**
  - `.gitignore`, `README.md`, `tasks.md`, `tasks-agentes.md`, `memory.md`
  - `Context/arquitetura-referencia-drive.md`, `Context/prompt-referencia-drive.json`, `Context/funcoes-assistente.md`, `Context/modelo-planilha-leads.csv`, `Context/skills-referencia-drive.md`, `Context/tarefas-iniciais.md`, `Context/contrato-handoff-site-social.md`
  - `.kiro/agents/orquestrador-geral.json`, `.kiro/hooks/wave-continuity.json`
  - `.kiro/steering/{project-overview,wave-protocol,frontend-standards,backend-api-standards,deploy-seo-standards}.md`
  - `.kiro/skills/{orquestrar-onda,validar-agentes-kiro}/SKILL.md`
  - `.kiro/specs/onda-0-estrutura-agentes/{requirements,design,tasks}.md`
- **Frente `criadores-de-site/` (20 arquivos):**
  - `criadores-de-site/README.md`
  - `criadores-de-site/.kiro/agents/{site-pesquisa-nichos,site-arquitetura,site-frontend,site-design-seo,site-qa}.json`
  - `criadores-de-site/.kiro/skills/{pesquisar-nicho-visual,definir-arquitetura-web,criar-secao-nicho,integrar-captura-leads,otimizar-seo-a11y,validar-build-qa}/SKILL.md`
  - `criadores-de-site/.kiro/steering/{identidade-diversidade-visual,padroes-engenharia-site,checklist-qa-entrega}.md`
  - `criadores-de-site/.kiro/hooks/{site-lint-on-save,site-handoff-checklist}.json`
  - `criadores-de-site/.kiro/specs/onda-0-fundacao-sites/{requirements,design,tasks}.md`
- **Frente `criadores-de-social-media/` (19 arquivos):**
  - `criadores-de-social-media/README.md`
  - `criadores-de-social-media/.kiro/agents/{social-estrategista,social-pesquisa-trends,social-copywriter,social-criativos,social-prospeccao-sdr}.json`
  - `criadores-de-social-media/.kiro/skills/{planejar-calendario-editorial,pesquisar-pautas-virais,escrever-copy-conversao,produzir-briefing-criativo,qualificar-leads-prospeccao,roteiro-abordagem-dm}/SKILL.md`
  - `criadores-de-social-media/.kiro/steering/{tom-de-voz-e-posicionamento,formatos-instagram-conversao,governanca-leads-e-dm}.md`
  - `criadores-de-social-media/.kiro/hooks/social-handoff-checklist.json`
  - `criadores-de-social-media/.kiro/specs/onda-0-fundacao-social/{requirements,design,tasks}.md`

### Comandos de Verificação Executados (com Resultado Exato)
- Auditoria global de UTF-8 sem BOM e parse JSON em todos os `.json` do repositório: `TOTAL_JSON=16 BOM_FAIL=0 JSON_FAIL=0`.
- Auditoria de frontmatter YAML em todas as skills e steering files (`14` `SKILL.md` + `11` `steering/*.md`): `TOTAL_FM_MD=25 FM_FAIL=0`.
- Resolução de todos os caminhos `file://` e `skill://` declarados em `resources` dos 11 agentes: `RES_FAIL=0`.
- Validação de esquema via `kiro-cli agent validate --path <agente>` nos 11 agentes: `TOTAL_AGENTS=11 VALIDATE_FAIL=0` (exit code 0 em todos).
- Descoberta via `kiro-cli agent list` nos 3 diretórios:
  - Raiz (`That/`): listou `orquestrador-geral Workspace (v3 format)`.
  - `criadores-de-site/`: listou `site-arquitetura`, `site-design-seo`, `site-frontend`, `site-pesquisa-nichos`, `site-qa` — todos como `Workspace (v3 format)`.
  - `criadores-de-social-media/`: listou `social-copywriter`, `social-criativos`, `social-estrategista`, `social-pesquisa-trends`, `social-prospeccao-sdr` — todos como `Workspace (v3 format)`.

**NÃO verificado:** execução interativa de sessões `kiro-cli chat --v3 --agent <nome>` com prompts reais de produção; disparo em runtime dos hooks (`PostFileSave` e `Stop`) no Kiro IDE/CLI; existência de código de aplicação web/Next.js, `tsc`, `eslint` ou `build` (ainda não há app web nesta Onda 0); coleta ou validação de leads/métricas reais no Instagram ou em navegador real.

---

## 2026-11-18 — Onda 0.5: Benchmarks Visuais de Referência

### Decisões Técnicas e Visuais Aprovadas
- Catalogados 5 arquétipos visuais reais para orientar a diversidade estética e conversão em `criadores-de-site/` (sem cópia de marcas):
  1. **B2B Industrial / Deep-Tech** (`https://integral-imi.com/`): base escura `#000a19`, acento laranja, hero com fórmula `X + Y + Z`, cards claros de solução e dupla prova social (clientes + prêmios).
  2. **Serviço Local / Luxo Artesanal Mobile-First** (`https://tattooonda.com.br/`): coluna estreita (`480px`), preto + dourado `#C9A84C`, duplo CTA acima da dobra, 3 métricas imediatas, FAQ/guias anti-objeção e WhatsApp flutuante (evitando splash bloqueante por padrão).
  3. **Vitrine Minimalista de Produto** (`https://www.apple.com/`): alternância claro/escuro, grid `2xN`, par padrão de CTAs (*Saiba mais* + *Comprar*) e controle visível de pausa de animação.
  4. **Editorial Técnico / Storytelling** (`https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/`): leitura estreita em fundo branco, TOC sticky lateral, barra de progresso no scroll, áudio integrado e coluna destaque em tabelas.
  5. **Enterprise Tech Dark & High-Contrast** (`https://www.amd.com/pt.html`): preto `#000000` com acento ciano único, hero com 3 cards de acesso rápido na base, faixa de logos monocromática e cards de portfólio com links diretos.

### Arquivos Criados / Alterados
- `Context/benchmarks-visuais.md`
- `criadores-de-site/.kiro/steering/benchmarks-visuais.md`
- `criadores-de-site/.kiro/agents/site-pesquisa-nichos.json`
- `tasks.md`, `tasks-agentes.md`, `memory.md`

### Comandos de Verificação Executados (com Resultado Exato)
- Inspeção visual em navegador via subagente `browser` (origens verificadas em `BROWSER_HOST_FACTS`: `https://integral-imi.com`, `https://tattooonda.com.br`, `https://www.apple.com`, `https://blog.google`, `https://www.amd.com`; `blocked_origins: none`).
- Validação de `site-pesquisa-nichos.json` (UTF-8 sem BOM, `kiro-cli agent validate`, `RES_FAIL=0` e frontmatter YAML do novo steering).

**NÃO verificado:** valores via `getComputedStyle` / `page.evaluate` (indisponível no sandbox do navegador; cores/fontes obtidas de CSS/stylesheets e inspeção visual desktop `1440x900`); renderização em viewport mobile desses 5 sites; pontuação Lighthouse/Core Web Vitals.
