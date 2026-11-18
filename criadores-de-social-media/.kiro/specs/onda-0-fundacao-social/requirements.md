# Requirements — Onda 0: Fundação da Frente de Social Media e Prospecção

## Objetivo
Estruturar integralmente a frente autônoma **`criadores-de-social-media/`** em Kiro V3, cobrindo documentação de entrada, steering editorial/comercial, 6 skills especializadas exclusivas, 5 agentes Kiro V3 validados e hook de qualidade `Stop`, mantendo desacoplamento em relação a `criadores-de-site/` e aderência aos contratos em `../Context/`.

## Requisitos Funcionais

1. **Documentação de Entrada (`README.md`)**
   - Apresentar visão da frente de social media, geração de conteúdo no Instagram e prospecção ativa de leads.
   - Documentar tabela dos 5 agentes, tabela das 6 skills separadas, comandos `kiro-cli` dentro de `criadores-de-social-media/` e contrato de integração bidirecional com `criadores-de-site/`.

2. **Governança via Steering (`.kiro/steering/*.md`, `inclusion: always`)**
   - `tom-de-voz-e-posicionamento.md`: definir posicionamento comercial da fábrica de sites para negócios locais/profissionais (tatuadores, músicos, clínicas etc.) e proibir promessas irreais ou clickbait.
   - `formatos-instagram-conversao.md`: estabelecer padrões práticos para Reels, Carrosséis, Stories de prova social e CTAs de resposta orgânica na DM.
   - `governanca-leads-e-dm.md`: assegurar compatibilidade exata com as 11 colunas de `../Context/modelo-planilha-leads.csv`, personalização obrigatória por nicho na DM, prevenção de spam/bloqueio e marcação explícita de dados não validados externamente.

3. **Skills Exclusivas de Social Media (`.kiro/skills/<nome>/SKILL.md`)**
   - `planejar-calendario-editorial`
   - `pesquisar-pautas-virais`
   - `escrever-copy-conversao`
   - `produzir-briefing-criativo`
   - `qualificar-leads-prospeccao`
   - `roteiro-abordagem-dm`
   - Cada `SKILL.md` deve incluir frontmatter YAML (`name`, `description`), entradas esperadas, passo a passo, entregável e critérios de aceite.

4. **Agentes Kiro V3 (`.kiro/agents/*.json`)**
   - Schema V3 estrito (`name`, `description`, `prompt`, `mcpServers`, `tools`, `permissions.rules`, `resources`, `includeMcpJson`, `model: null`), sem campos legados (`allowedTools`, `toolsSettings`) e em UTF-8 sem BOM.
   - Especialistas configurados:
     - `social-estrategista`
     - `social-pesquisa-trends`
     - `social-copywriter`
     - `social-criativos`
     - `social-prospeccao-sdr`
   - Cada agente deve referenciar `README.md`, `.kiro/steering/**/*.md`, `../Context/modelo-planilha-leads.csv`, `../Context/contrato-handoff-site-social.md` e apenas as `skill://` pertinentes ao seu papel.

5. **Hook de Garantia de Qualidade (`.kiro/hooks/social-handoff-checklist.json`)**
   - Formato `version: "v1"`, trigger `Stop` com `action.type = "agent"`, auditando nicho-alvo, CTA claro, formato da planilha (quando aplicável) e separação explícita entre rascunhos/hipóteses e métricas/dados reais verificados.

## Critérios de Aceite
- Todos os arquivos `.json` gravados em UTF-8 sem BOM (`0xEF 0xBB 0xBF` ausente) e sintaticamente válidos.
- Todos os 5 agentes aprovados em `kiro-cli agent validate --path <arquivo>` com exit code `0`.
- Comando `kiro-cli agent list` executado dentro de `criadores-de-social-media/` lista os 5 agentes como `Workspace (v3 format)`.
- Escopo estrito preservado: nenhum arquivo criado ou modificado fora de `criadores-de-social-media/`.
