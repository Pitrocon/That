---
inclusion: always
description: "Protocolo de execução em ondas, paralelismo seguro, validação obrigatória e commit Git em português"
---

# Protocolo de Orquestração em Ondas

1. **Planejamento por Spec:** Cada onda possui spec própria em `.kiro/specs/<onda>/` (`requirements.md`, `design.md`, `tasks.md`).
2. **Ondas Pequenas e Paralelismo Seguro:**
   - Delegue em paralelo apenas quando os escopos de arquivos forem estritamente disjuntos (ex.: `criadores-de-site/` vs `criadores-de-social-media/`).
   - Se dois agentes precisarem alterar arquivos compartilhados (rotas, tipos, CSS global ou contratos em `Context/`), serialize a execução ou congele o contrato antes.
3. **Validação Real Antes de Fechar a Onda:**
   - Para código JS/TS/Web: rodar `tsc`, `eslint`, `build` e testes unitários/E2E aplicáveis.
   - Para agentes/configs Kiro: validar ausência de UTF-8 BOM em JSONs, rodar `kiro-cli agent validate` em cada agente alterado e `kiro-cli agent list` no diretório correspondente.
4. **Atualização da Memória Viva:** Atualizar `tasks.md`, `tasks-agentes.md`, `memory.md` (incluindo linha `NÃO verificado:`) e a spec da onda.
5. **Save em Git (Obrigatório):**
   - Usar Conventional Commits em português (`feat(...)`, `fix(...)`, `docs: ...`, `chore: ...`).
   - Adicionar **apenas os arquivos específicos da onda** (`git add <arquivos>`), nunca `git add -A` cego.
