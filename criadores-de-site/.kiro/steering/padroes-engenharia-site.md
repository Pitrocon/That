---
inclusion: always
description: "Stack padrão recomendada, TypeScript estrito, componentização modular, responsividade mobile-first e segurança básica em formulários e webhooks."
---

# Padrões de Engenharia Web para Sites Multi-Nicho

## Stack Padrão Recomendada
- **Frontend / Fullstack Web:** Next.js (App Router), React, TypeScript estrito (`"strict": true`), Tailwind CSS, componentes acessíveis padrão shadcn/ui e Lucide Icons.
- **Backend / APIs:**
  - Preferencialmente **Route Handlers (`app/api/**/route.ts`)** ou **Server Actions** no próprio Next.js para formulários, webhooks e validação server-side.
  - Utilizar **FastAPI (Python)** apenas quando o projeto exigir pipelines Python dedicados, integrações pesadas ou serviço desacoplado.
- **Validação de Dados:** **Zod** em TypeScript e **Pydantic** em Python, validando tanto entrada quanto saída de integrações externas.

## Componentização Modular e Organização
- Separe responsabilidades com clareza:
  - `app/`: rotas, layouts, `metadata`, `sitemap.ts`, `robots.ts` e Route Handlers.
  - `components/sections/`: seções específicas do nicho (Hero, Galeria, Serviços, Depoimentos, FAQ, Contato).
  - `components/ui/`: primitivos reutilizáveis e acessíveis (botões, inputs, modais, badges).
  - `lib/`: tokens, schemas Zod, helpers de sanitização, construtor de URL WhatsApp com UTM, rate limiter e adaptadores de webhook/leads.
  - `data/`: conteúdo estruturado e tipado por nicho (sem misturar dados de negócio dentro do JSX).
- Evite componentes monolíticos (> 200 linhas) e prop drilling excessivo; prefira composição limpa e tipagem explícita.

## Responsividade Mobile-First e Performance
- Projete e estilize primeiro para telas móveis (`360px`–`390px`), expandindo progressivamente via `sm:`, `md:`, `lg:`, `xl:`.
- Garanta **zero scroll horizontal** (`overflow-x`), alvos de toque confortáveis (`>= 44x44px`) e navegação móvel acessível por teclado.
- Use `next/image` com `width`/`height` ou `fill` + `aspect-ratio` explícito para evitar Cumulative Layout Shift (CLS).

## Segurança Básica em Formulários, APIs e Webhooks
- **Validação Server-Side Obrigatória:** nunca confie apenas em validação HTML/client-side; valide todo payload no servidor com Zod/Pydantic e rejeite campos inesperados ou oversized.
- **Sanitização e Proteção contra Injeção:**
  - Limpe e normalize strings antes de persistir, enviar por e-mail/webhook ou exportar para planilhas.
  - Ao gerar dados destinados a CSV/Google Sheets (compatíveis com `../Context/modelo-planilha-leads.csv`), neutralize prefixos perigosos de fórmula (`=`, `+`, `-`, `@`, `\t`, `\r`).
- **Anti-Spam e Rate Limit Básico:**
  - Inclua campo honeypot oculto (`aria-hidden="true"`, `tabIndex={-1}`) e validação de payload máximo.
  - Aplique rate limiting básico por IP/janela nas rotas públicas de lead (com armazenamento em memória para desenvolvimento/single-instance e recomendação explícita de store distribuído em produção multi-instância).
- **Gestão de Segredos:**
  - Tokens de webhook, chaves de API e destinos privados devem residir exclusivamente em variáveis de ambiente server-side (nunca expor em `NEXT_PUBLIC_*` ou bundles do cliente).
  - Nunca logue segredos nem dados pessoais sensíveis completos em logs públicos de erro.
