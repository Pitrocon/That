# Requirements — Onda 0: Fundação da Frente Criadores de Site

## Objetivo
Estabelecer a fundação operacional completa da frente **`criadores-de-site/`** em Kiro V3, totalmente autônoma e desacoplada da frente de Social Media, garantindo diversidade visual por nicho, rigor de engenharia web, captura estruturada de leads e validação factual de QA.

## Requisitos Funcionais
1. **Documentação de Entrada (`README.md`):**
   - Explicar a visão da frente de criação de sites multi-nicho, listar agentes e skills separadas, instruir uso via `kiro-cli` dentro de `criadores-de-site/` e documentar o contrato de entrada/saída com `criadores-de-social-media/` (`../Context/contrato-handoff-site-social.md`).
2. **Steering Permanente (`.kiro/steering/*.md`, `inclusion: always`):**
   - `identidade-diversidade-visual.md`: proibir layouts genéricos/repetidos e exigir briefing visual único por nicho com contraste WCAG.
   - `padroes-engenharia-site.md`: padronizar Next.js App Router, TypeScript estrito, Tailwind CSS, shadcn/ui, API routes/FastAPI quando necessário, Zod/Pydantic, mobile-first e segurança em formulários/webhooks.
   - `checklist-qa-entrega.md`: definir portões obrigatórios (`tsc`, `eslint`, `build`, testes, links, meta tags, Schema.org, `sitemap.xml`, `robots.txt`) e proibir declarar como verificado o que não rodou em navegador real ou ambiente externo.
3. **Skills Exclusivas de Sites (`.kiro/skills/<nome>/SKILL.md`):**
   - `pesquisar-nicho-visual`
   - `definir-arquitetura-web`
   - `criar-secao-nicho`
   - `integrar-captura-leads`
   - `otimizar-seo-a11y`
   - `validar-build-qa`
4. **Agentes Especialistas Kiro V3 (`.kiro/agents/*.json`):**
   - `site-pesquisa-nichos` (`tools`: `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking`)
   - `site-arquitetura` (`tools`: `read`, `write`, `shell`, `grep`, `glob`, `thinking`)
   - `site-frontend` (`tools`: `read`, `write`, `shell`, `grep`, `glob`, `thinking`)
   - `site-design-seo` (`tools`: `read`, `write`, `shell`, `grep`, `glob`, `thinking`)
   - `site-qa` (`tools`: `read`, `shell`, `grep`, `glob`, `thinking`, restrito a auditoria e pareceres de QA sem editar código-fonte)
5. **Hooks de Qualidade (`.kiro/hooks/*.json`, `version: "v1"`):**
   - `site-lint-on-save.json` (`PostFileSave` com matcher `\\.(ts|tsx|js|jsx)$`)
   - `site-handoff-checklist.json` (`Stop`)

## Critérios de Aceite
- Todos os arquivos criados exclusivamente dentro de `criadores-de-site/`.
- Todos os `.json` gravados em UTF-8 sem BOM (`0xEF 0xBB 0xBF`).
- Todos os 5 agentes validados com exit code 0 via `kiro-cli agent validate --path <arquivo>`.
- `kiro-cli agent list` executado dentro de `criadores-de-site/` listando os 5 agentes como `(v3 format)`.
- Hooks válidos conforme schema JSON `version: "v1"`.
