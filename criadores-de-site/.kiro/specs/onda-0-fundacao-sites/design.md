# Design — Onda 0: Arquitetura Kiro V3 de Criadores de Site

## Topologia e Descoberta no Workspace
O `kiro-cli` descobre agentes locais a partir de `.kiro/agents/*.json` no diretório de trabalho atual. Por isso, `criadores-de-site/` opera como um workspace Kiro V3 autocontido:
- Steering sempre ativo (`inclusion: always`) em `criadores-de-site/.kiro/steering/`.
- Skills exclusivas do domínio web em `criadores-de-site/.kiro/skills/`.
- Agentes especialistas em `criadores-de-site/.kiro/agents/`.
- Integração com a frente de Social Media exclusivamente via leitura do contrato compartilhado `../Context/contrato-handoff-site-social.md` e compatibilidade com `../Context/modelo-planilha-leads.csv`.

## Mapeamento Agente -> Ferramentas -> Skills

| Agente | Ferramentas | Skills Carregadas | Escopo de Escrita |
| :--- | :--- | :--- | :--- |
| `site-pesquisa-nichos` | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `pesquisar-nicho-visual` | `briefings/**`, `docs/**`, `projetos/**`, `sites/**`, `apps/**`, `.kiro/specs/**` |
| `site-arquitetura` | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `definir-arquitetura-web`, `integrar-captura-leads` | Código/docs/schemas do projeto (`apps/**`, `sites/**`, `projetos/**`, `src/**`, `app/**`, etc.) |
| `site-frontend` | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `criar-secao-nicho`, `integrar-captura-leads` | Páginas, seções, estilos e dados do site |
| `site-design-seo` | `read`, `write`, `shell`, `grep`, `glob`, `thinking` | `otimizar-seo-a11y`, `criar-secao-nicho` | Tokens, semântica, SEO, Schema.org, `sitemap.ts`, `robots.ts` |
| `site-qa` | `read`, `shell`, `grep`, `glob`, `thinking` | `validar-build-qa` | Sem ferramenta `write`; `fs_write` restrito apenas a diretórios de relatórios (`qa-reports/**`, `reports/**`, `docs/qa/**`) |

## Fluxo de Dados e Handoff
1. **Entrada:** Briefing de Nicho/Lead (`../Context/contrato-handoff-site-social.md`) ou demanda direta.
2. **Pipeline:** `site-pesquisa-nichos` -> `site-arquitetura` -> `site-frontend` -> `site-design-seo` -> `site-qa`.
3. **Captura de Leads:** Formulário validado com Zod + sanitização CSV/XSS + honeypot + rate-limit básico, produzindo payload compatível com `../Context/modelo-planilha-leads.csv`.
4. **Saída:** Parecer factual de QA + Pacote de Portfólio com seção obrigatória `NÃO verificado`.
