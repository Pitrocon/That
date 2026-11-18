---
name: validar-agentes-kiro
description: Validar arquivos de agentes Kiro V3 (.kiro/agents/*.json) quanto à codificação UTF-8 sem BOM, schema V3 via kiro-cli e descoberta via agent list.
---

# Validar Agentes Kiro V3

## Objetivo
Garantir que todos os arquivos de agentes no ecossistema (raiz, `criadores-de-site/` e `criadores-de-social-media/`) sejam válidos no motor Kiro V3 e estejam livres de UTF-8 BOM.

## Passos
1. Listar todos os arquivos `*.json` dentro de `.kiro/agents/`, `criadores-de-site/.kiro/agents/` e `criadores-de-social-media/.kiro/agents/`.
2. Verificar os primeiros 3 bytes de cada JSON para confirmar ausência de BOM (`0xEF 0xBB 0xBF`).
3. Executar `kiro-cli agent validate --path <arquivo>` para cada agente.
4. Executar `kiro-cli agent list` na raiz, em `criadores-de-site/` e em `criadores-de-social-media/` para confirmar a descoberta no workspace como `(v3 format)`.
5. Validar sintaxe JSON dos hooks em `.kiro/hooks/*.json`.

## Critério de Aceite
- Zero arquivos `.json` com BOM.
- Exit code 0 em todas as validações `kiro-cli agent validate`.
- Todos os agentes listados como `(v3 format)` em seus respectivos workspaces.
