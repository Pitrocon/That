---
inclusion: fileMatch
fileMatch: "criadores-de-site/**"
description: "Padrões gerais de Backend, APIs, validação de esquemas e segurança"
---

# Padrões de Backend, Dados e APIs

- **Validação Estrita:** Todo payload de formulário, webhook ou endpoint deve ser validado com Zod (TypeScript) ou Pydantic (FastAPI/Python).
- **Segurança por Padrão:** Sanitizar entradas, proteger contra XSS/SQLi, nunca expor chaves/segredos no cliente e aplicar rate limiting ou proteção anti-bot básica em endpoints públicos de captura de leads.
- **Integração com Leads:** Formulários de site devem emitir payloads compatíveis com o modelo `Context/modelo-planilha-leads.csv` ou webhook configurado via variáveis de ambiente (`.env`).
