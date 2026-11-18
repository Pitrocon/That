# Ecossistema Multiagente — Fábrica de Sites & Social Media

Estrutura organizada em **duas frentes autônomas com configurações Kiro V3 separadas** e **uma camada raiz de orquestração e memória viva**.

## Estrutura do Projeto

- [`criadores-de-site/`](./criadores-de-site/README.md) — Agentes, skills, steering, hooks e specs dedicados à pesquisa de nichos, arquitetura web, frontend, design/SEO e QA.
- [`criadores-de-social-media/`](./criadores-de-social-media/README.md) — Agentes, skills, steering, hooks e specs dedicados à estratégia editorial, pesquisa de tendências, copywriting, criativos, prospecção de leads e abordagem em DM.
- [`Context/`](./Context/contrato-handoff-site-social.md) — Documentação base trazida do Google Drive e contrato de integração entre as duas frentes.
- [`.kiro/`](./.kiro/steering/project-overview.md) — Orquestrador Geral (`orquestrador-geral`), padrões transversais, protocolo de ondas e specs de governança.

## Memória Viva & Controle de Execução

- [`tasks.md`](./tasks.md) — Checklist técnico por ondas.
- [`tasks-agentes.md`](./tasks-agentes.md) — Quadro de entregas por especialidade.
- [`memory.md`](./memory.md) — Registro datado de decisões, arquivos, comandos verificados e itens `NÃO verificado`.

## Como Listar os Agentes no Kiro CLI

- **Raiz (Orquestração Geral):** execute `kiro-cli agent list` na raiz do repositório.
- **Criadores de Site:** execute `kiro-cli agent list` dentro de `criadores-de-site/`.
- **Criadores de Social Media:** execute `kiro-cli agent list` dentro de `criadores-de-social-media/`.
