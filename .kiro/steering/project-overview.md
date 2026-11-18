---
inclusion: always
description: "Visão geral do ecossistema, divisão entre Criadores de Site e Criadores de Social Media, e regras globais de memória viva"
---

# Visão Geral do Projeto

Este repositório organiza uma fábrica de criação e venda de sites multi-nicho em **duas frentes independentes com ambientes Kiro próprios**, coordenadas a partir da raiz:

1. **`criadores-de-site/`**: Engenharia completa de sites multi-nicho (pesquisa visual de nicho, arquitetura web/API, frontend responsivo, design system/SEO/a11y e QA Master).
2. **`criadores-de-social-media/`**: Motor de crescimento, conteúdo e prospecção comercial no Instagram (estratégia editorial, pesquisa de tendências, copywriting, direção criativa, planilha de leads e abordagem em DM/SDR).

## Regras Globais Invioláveis

- **Separação de Domínios:** Skills e agentes de Sites residem exclusivamente em `criadores-de-site/.kiro/`. Skills e agentes de Social Media residem exclusivamente em `criadores-de-social-media/.kiro/`.
- **Adaptação Pragmática:** A documentação original do Drive em `Context/` serve como referência estratégica; os fluxos e agentes foram adaptados para execução enxuta e verificável em Kiro V3.
- **Memória Viva:** Toda entrega em onda deve atualizar `tasks.md`, `tasks-agentes.md` e `memory.md` na raiz.
- **Honestidade Factual:** Nunca declarar como testado, validado ou publicado algo que dependa de navegador real, revisão visual humana ou ambiente externo sem execução real; registrar explicitamente na linha `NÃO verificado:` de `memory.md`.
