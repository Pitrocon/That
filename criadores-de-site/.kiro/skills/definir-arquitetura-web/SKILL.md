---
name: definir-arquitetura-web
description: "Definir mapa de rotas Next.js App Router, árvore de componentes modulares, modelos TypeScript/Zod (ou Pydantic), APIs/webhooks, estratégia SSR/SSG e controles de segurança."
---

# Definir Arquitetura Web do Projeto

## Entradas Esperadas
- Briefing Visual e de Conversão do Nicho (saída de `pesquisar-nicho-visual`).
- Escopo funcional (One-Page vs. Multi-Page, integrações de formulário, WhatsApp, catálogo/galeria dinâmica ou CMS/JSON local).
- Requisitos de leads compatíveis com `../Context/modelo-planilha-leads.csv`.

## Passo a Passo
1. **Estrutura de Pastas e Stack:**
   - Adote Next.js (App Router), TypeScript estrito (`strict: true`), Tailwind CSS e primitivos acessíveis estilo shadcn/ui.
   - Estruture módulos claros: `app/`, `components/sections/`, `components/ui/`, `lib/`, `data/`.
   - Só proponha FastAPI separado se houver requisito explícito de backend Python; caso contrário, use Route Handlers (`app/api/**/route.ts`) ou Server Actions.
2. **Mapa de Rotas e Estratégia de Renderização (SSR/SSG/ISR):**
   - Liste todas as rotas (`/`, `/servicos`, `/portfolio`, `/contato`, `/politica-de-privacidade`, `/api/leads`, `/sitemap.xml`, `/robots.txt`).
   - Indique claramente o modo de renderização de cada rota (SSG estático por padrão para performance/SEO; ISR ou SSR dinâmico apenas onde houver dados mutáveis).
3. **Modelagem de Dados e Contratos (TypeScript + Zod):**
   - Defina interfaces e schemas Zod para conteúdo do nicho (`NicheProfile`, `ServiceItem`, `PortfolioItem`, `TestimonialItem`, `FaqItem`) e para payload de captura de leads (`LeadSubmissionSchema`).
   - Garanta mapeamento explícito entre `LeadSubmissionSchema` e os campos de `../Context/modelo-planilha-leads.csv`.
4. **Arquitetura de Integrações e Segurança:**
   - Especifique fluxo do formulário até Route Handler / webhook configurado via `.env` (`LEADS_WEBHOOK_URL` server-side).
   - Defina controles de segurança obrigatórios: validação Zod no servidor, sanitização contra XSS e CSV formula injection, campo honeypot, limite de tamanho do payload e rate limiting básico por IP.
   - Documente variáveis de ambiente necessárias em `.env.example` (sem segredos reais).

## Entregável
Especificação técnica **Arquitetura Web do Site** (Markdown + arquivos iniciais de tipos/schemas `lib/schemas/*.ts` e `.env.example` quando aplicável ao projeto) contendo mapa de rotas, árvore de componentes, modelos Zod, estratégia SSR/SSG e matriz de segurança.

## Critérios de Aceite
- Todas as rotas e seções do briefing visual estão contempladas no mapa de rotas/componentes.
- Schemas de entrada possuem validação estrita com Zod (ou Pydantic) e não expõem segredos no cliente.
- Estratégia de renderização privilegia geração estática/rápida onde não há estado dinâmico por requisição.
