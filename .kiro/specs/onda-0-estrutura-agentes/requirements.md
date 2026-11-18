# Requirements — Onda 0: Estrutura de Agentes, Skills e Governança Kiro

## Objetivo
Estabelecer a fundação completa do projeto separando os agentes e skills em duas pastas independentes (`criadores-de-site/` e `criadores-de-social-media/`), mantendo uma camada raiz de orquestração (`.kiro/`), documentação base (`Context/`), memória viva e versionamento em Git.

## Requisitos Funcionais
1. **Separação em 2 frentes:**
   - `criadores-de-site/` deve conter seus próprios agentes Kiro V3, skills exclusivas, steering, hooks e spec inicial.
   - `criadores-de-social-media/` deve conter seus próprios agentes Kiro V3, skills exclusivas, steering, hooks e spec inicial.
2. **Orquestração na raiz:**
   - `.kiro/` na raiz deve conter `orquestrador-geral.json`, steering global/técnico, skills de orquestração/validação, hook de continuidade e esta spec.
3. **Adaptação pragmática do modelo do Drive:**
   - Consolidar papéis redundantes do diagrama original em especialistas acionáveis no Kiro V3, preservando a essência de diversidade visual, validação técnica, geração de leads, conteúdo e vendas via DM.
4. **Memória Viva e Git:**
   - Criar `tasks.md`, `tasks-agentes.md` e `memory.md` na raiz.
   - Inicializar Git (`main`) e realizar commit específico da Onda 0.

## Critérios de Aceite
- Zero arquivos `.json` com UTF-8 BOM.
- Todos os agentes validam com `kiro-cli agent validate` e são descobertos via `kiro-cli agent list` em suas respectivas pastas como `(v3 format)`.
- Todos os hooks são JSON válido no formato `version: "v1"`.
- Commit realizado em português seguindo Conventional Commits sem `git add -A`.
