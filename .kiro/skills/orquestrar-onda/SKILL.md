---
name: orquestrar-onda
description: Quebrar entregas em ondas pequenas e independentes, coordenar criadores-de-site e criadores-de-social-media sem conflito de arquivos, validar e commitar em Git.
---

# Orquestrar Onda

## Objetivo
Conduzir uma entrega ponta a ponta respeitando a separação entre `criadores-de-site/` e `criadores-de-social-media/`, mantendo memória viva e histórico limpo em Git.

## Passos
1. Ler `tasks.md`, `tasks-agentes.md` e `memory.md` na raiz.
2. Criar/atualizar a spec da onda em `.kiro/specs/<onda>/` (`requirements.md`, `design.md`, `tasks.md`).
3. Verificar dependências de arquivos compartilhados (`Context/`, `README.md`, contratos):
   - Se os escopos forem disjuntos, executar frentes em paralelo.
   - Se tocarem arquivos compartilhados, serializar e congelar o contrato antes.
4. Ao término da execução, rodar todas as validações reais aplicáveis (lint, typecheck, build, `kiro-cli agent validate`, checagem sem BOM).
5. Atualizar `tasks.md`, `tasks-agentes.md` e `memory.md` (incluindo linha explícita `NÃO verificado:`).
6. Fazer commit em Git em português usando Conventional Commits, adicionando exclusivamente os arquivos alterados/criados na onda.

## Critério de Aceite
- Nenhuma validação omitida ou presumida.
- Arquivos vivos atualizados e sincronizados com o commit da onda.
