# Tasks — Onda 0: Fundação da Frente de Social Media e Prospecção

## Checklist de Implementação

- [x] **1. Documentação de Entrada**
  - [x] Criar `criadores-de-social-media/README.md` com visão da frente, tabela de agentes, tabela de skills, guia de uso com `kiro-cli` e contrato de integração com `criadores-de-site`.
- [x] **2. Steering (`inclusion: always`)**
  - [x] Criar `.kiro/steering/tom-de-voz-e-posicionamento.md`.
  - [x] Criar `.kiro/steering/formatos-instagram-conversao.md`.
  - [x] Criar `.kiro/steering/governanca-leads-e-dm.md`.
- [x] **3. Skills Exclusivas (`.kiro/skills/*/SKILL.md`)**
  - [x] Criar `.kiro/skills/planejar-calendario-editorial/SKILL.md`.
  - [x] Criar `.kiro/skills/pesquisar-pautas-virais/SKILL.md`.
  - [x] Criar `.kiro/skills/escrever-copy-conversao/SKILL.md`.
  - [x] Criar `.kiro/skills/produzir-briefing-criativo/SKILL.md`.
  - [x] Criar `.kiro/skills/qualificar-leads-prospeccao/SKILL.md`.
  - [x] Criar `.kiro/skills/roteiro-abordagem-dm/SKILL.md`.
- [x] **4. Agentes Kiro V3 (`.kiro/agents/*.json`, UTF-8 sem BOM)**
  - [x] Criar `.kiro/agents/social-estrategista.json`.
  - [x] Criar `.kiro/agents/social-pesquisa-trends.json`.
  - [x] Criar `.kiro/agents/social-copywriter.json`.
  - [x] Criar `.kiro/agents/social-criativos.json`.
  - [x] Criar `.kiro/agents/social-prospeccao-sdr.json`.
- [x] **5. Hook de Garantia (`version: "v1"`)**
  - [x] Criar `.kiro/hooks/social-handoff-checklist.json` com trigger `Stop` e action `type: "agent"`.
- [x] **6. Spec Inicial (`onda-0-fundacao-social`)**
  - [x] Criar `requirements.md`, `design.md` e `tasks.md`.
- [x] **7. Validação Final Obrigatória**
  - [x] Verificar ausência de UTF-8 BOM em todos os `.json` (agentes e hook) e validar parsing JSON.
  - [x] Executar `kiro-cli agent validate --path` nos 5 agentes.
  - [x] Executar `kiro-cli agent list` dentro de `criadores-de-social-media/` confirmando descoberta `(v3 format)`.
