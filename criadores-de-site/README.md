# Criadores de Site — Frente de Engenharia Web Multi-Nicho

Frente autônoma especializada na concepção, arquitetura, implementação, otimização (SEO/WCAG/Performance) e validação QA de sites multi-nicho de alta conversão (ex.: estúdios de tatuagem, músicos/bandas, clínicas de estética, serviços locais e negócios regionais).

Cada projeto gerado nesta frente segue identidade visual própria por segmento — nunca templates genéricos repetidos — com foco em carregamento rápido, acessibilidade WCAG AA, captura estruturada de leads e transparência factual de QA.

---

## Agentes Kiro V3 (`criadores-de-site/.kiro/agents/`)

| Agente | Função Principal | Ferramentas | Skills Associadas |
| :--- | :--- | :--- | :--- |
| `site-pesquisa-nichos` | Pesquisa de nicho, análise de concorrência/conversão, definição de paleta, tipografia e direção visual diversa. | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `pesquisar-nicho-visual` |
| `site-arquitetura` | Mapa de rotas, árvore de componentes, schemas TypeScript/Zod (ou Pydantic/FastAPI), APIs, formulários e segurança backend. | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `definir-arquitetura-web`, `integrar-captura-leads` |
| `site-frontend` | Construção de páginas e seções responsivas mobile-first em React/Next.js + Tailwind CSS, animações sutis e CTAs rastreáveis. | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `criar-secao-nicho`, `integrar-captura-leads` |
| `site-design-seo` | Refinamento de design tokens, tipografia, contraste WCAG AA, HTML semântico, OpenGraph, Schema.org JSON-LD, `sitemap.xml`, `robots.txt` e Core Web Vitals. | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `otimizar-seo-a11y`, `criar-secao-nicho` |
| `site-qa` | QA Master (somente leitura em código-fonte): `tsc`, `eslint`, `build`, testes unitários/E2E, auditoria de links/segurança e parecer factual final. | `read`, `shell`, `grep`, `glob`, `thinking` | `validar-build-qa` |

---

## Skills Exclusivas de Sites (`criadores-de-site/.kiro/skills/`)

| Skill | Propósito | Agente(s) Consumidor(es) |
| :--- | :--- | :--- |
| [`pesquisar-nicho-visual`](./.kiro/skills/pesquisar-nicho-visual/SKILL.md) | Mapear requisitos do nicho, jornadas de conversão, benchmarks e definir paleta/tipografia/layout único com contraste WCAG. | `site-pesquisa-nichos` |
| [`definir-arquitetura-web`](./.kiro/skills/definir-arquitetura-web/SKILL.md) | Definir rotas App Router, estrutura modular de componentes, modelos TypeScript/Zod, integrações e estratégia SSR/SSG/ISR. | `site-arquitetura` |
| [`criar-secao-nicho`](./.kiro/skills/criar-secao-nicho/SKILL.md) | Construir seções e páginas responsivas em React/Next.js + Tailwind seguindo tokens exclusivos do nicho e acessibilidade. | `site-frontend`, `site-design-seo` |
| [`integrar-captura-leads`](./.kiro/skills/integrar-captura-leads/SKILL.md) | Implementar formulários validados com Zod, CTA WhatsApp rastreável (UTM), sanitização/anti-spam/rate-limit básico e payload compatível com a planilha de leads. | `site-arquitetura`, `site-frontend` |
| [`otimizar-seo-a11y`](./.kiro/skills/otimizar-seo-a11y/SKILL.md) | Aplicar HTML semântico, contraste WCAG AA, OpenGraph/Twitter, JSON-LD Schema.org, `sitemap.xml`, `robots.txt` e otimizações de Core Web Vitals. | `site-design-seo` |
| [`validar-build-qa`](./.kiro/skills/validar-build-qa/SKILL.md) | Executar checagem de tipos, lint, build de produção, testes unitários/E2E (Playwright quando presente) e emitir relatório factual com seção explícita `NÃO verificado`. | `site-qa` |

---

## Steering e Hooks da Frente

- **Steering (`.kiro/steering/` — `inclusion: always`):**
  - [`identidade-diversidade-visual.md`](./.kiro/steering/identidade-diversidade-visual.md) — proíbe layouts genéricos repetidos e exige briefing visual exclusivo por nicho.
  - [`padroes-engenharia-site.md`](./.kiro/steering/padroes-engenharia-site.md) — define stack (Next.js App Router, TypeScript estrito, Tailwind CSS, shadcn/ui, Zod/Pydantic), modularidade e segurança em formulários/webhooks.
  - [`checklist-qa-entrega.md`](./.kiro/steering/checklist-qa-entrega.md) — estabelece portões obrigatórios (`tsc`, `eslint`, `build`, testes, SEO/a11y) e honestidade factual (`NÃO verificado`).
- **Hooks (`.kiro/hooks/` — `version: "v1"`):**
  - [`site-lint-on-save.json`](./.kiro/hooks/site-lint-on-save.json) (`PostFileSave` em `\\.(ts|tsx|js|jsx)$`) — lembra de validar tipagem, imports, acessibilidade e ausência de dados fictícios como produção.
  - [`site-handoff-checklist.json`](./.kiro/hooks/site-handoff-checklist.json) (`Stop`) — exige evidências reais de build/lint e seção explícita `NÃO verificado` antes de encerrar.

---

## Como Usar com `kiro-cli` Dentro Desta Pasta

O Kiro CLI descobre agentes locais a partir do diretório de trabalho atual (`.kiro/agents/*.json`). Portanto, execute os comandos **dentro de `criadores-de-site/`**:

```powershell
cd criadores-de-site

# Listar os 5 agentes descobertos no workspace (todos em formato v3)
kiro-cli agent list

# Validar um agente específico
kiro-cli agent validate --path .kiro/agents/site-pesquisa-nichos.json

# Iniciar sessão interativa com o especialista desejado
kiro-cli chat --agent site-pesquisa-nichos
kiro-cli chat --agent site-arquitetura
kiro-cli chat --agent site-frontend
kiro-cli chat --agent site-design-seo
kiro-cli chat --agent site-qa
```

### Fluxo Recomendado de Execução

1. **`site-pesquisa-nichos`** recebe o briefing/nicho e gera o **Briefing Visual e de Conversão do Nicho** (paleta, tipografia, seções, dores, CTAs).
2. **`site-arquitetura`** define rotas, modelos Zod/TypeScript, endpoints/Server Actions, integração de leads e controles de segurança.
3. **`site-frontend`** implementa tokens, páginas, seções responsivas, formulário validado e CTA WhatsApp rastreável.
4. **`site-design-seo`** audita e aplica refinamento tipográfico, contraste WCAG AA, semântica, OpenGraph, Schema.org JSON-LD, `sitemap.xml`, `robots.txt` e Core Web Vitals.
5. **`site-qa`** executa `tsc`, `eslint`, `build` e testes aplicáveis, conferindo segurança/links e emitindo o **Relatório Factual de QA** + **Pacote de Portfólio** (com seção explícita `NÃO verificado`).

---

## Contrato de Entrada e Saída com Social Media

A integração entre `criadores-de-site/` e `criadores-de-social-media/` é regida por [`../Context/contrato-handoff-site-social.md`](../Context/contrato-handoff-site-social.md) e pelo modelo [`../Context/modelo-planilha-leads.csv`](../Context/modelo-planilha-leads.csv).

### Entrada (`criadores-de-social-media` -> `criadores-de-site`)
Quando a frente de Social Media identifica demanda de nicho ou qualifica um lead, entrega um **Briefing de Nicho / Lead**:
- `nicho` (ex.: `"Estúdio de Tatuagem"`)
- `estilo_visual_sugerido` (ex.: `"Dark / Industrial"`)
- `cores_sugeridas` (ex.: `"Preto / Vermelho / Cinza"`)
- `estrutura_site_sugerida` (ex.: `"Galeria Dinâmica + Agendamento Online"`)
- `dores_principais` (lista de dores reais observadas)
- `objetivo_conversao` (ex.: `"Agendamento de orçamento via WhatsApp e formulário"`)

Os formulários de captura gerados nesta frente devem produzir payloads mapeáveis às colunas de `../Context/modelo-planilha-leads.csv` (`ID_Lead`, `Nicho_Ramo`, `Nome_Empresa_ou_Profissional`, `Instagram_URL`, `Telefone_WhatsApp`, `Email`, `Estilo_Visual_Sugerido`, `Cores_Sugeridas`, `Estrutura_Site_Sugerida`, `Status_Abordagem_DM`, `Observacoes_Validador`).

### Saída (`criadores-de-site` -> `criadores-de-social-media`)
Após aprovação pelo `site-qa`, esta frente disponibiliza um **Pacote de Portfólio**:
- URL de preview/produção verificada (ou indicação explícita de que está apenas em ambiente local);
- Nicho atendido, paleta, tipografia e diferenciais funcionais implementados;
- Principais ganhos técnicos verificados (ex.: build estático/SSR, SEO local, Schema.org, captura de leads mobile-first);
- Prints/referências visuais **somente se realmente gerados e inspecionados**, além da lista transparente do que permaneceu em **`NÃO verificado`**.
