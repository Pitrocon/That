---
name: otimizar-seo-a11y
description: "Aplicar HTML semântico, contraste WCAG AA, metadados OpenGraph/Twitter, JSON-LD Schema.org, sitemap.xml, robots.txt e otimizações de Core Web Vitals."
---

# Otimizar SEO Técnico, Acessibilidade (WCAG) e Core Web Vitals

## Entradas Esperadas
- Páginas e componentes implementados do site (`app/`, `components/`).
- Briefing Visual do Nicho (paleta, tipografia) e dados do negócio (nome, cidade/região, serviços, redes sociais, URL base).

## Passo a Passo
1. **Auditoria e Refinamento de Acessibilidade (WCAG AA):**
   - Verifique hierarquia de cabeçalhos (`<h1>` único por página, sequência sem saltos desnecessários `h1 -> h2 -> h3`).
   - Confirme presença de skip link (`Pular para o conteúdo`), landmarks (`header`, `nav`, `main`, `footer`), `lang="pt-BR"` no `<html>`, contraste mínimo 4.5:1 (texto normal) / 3:1 (texto grande e controles) e foco visível em todos os elementos interativos.
   - Confira `alt` em todas as imagens, `aria-label` em links somente-ícone e suporte a `prefers-reduced-motion`.
2. **Metadados e OpenGraph (`app/layout.tsx` e `page.tsx`):**
   - Configure `metadataBase`, `title` (com template por rota), `description` persuasiva (140–160 caracteres), `alternates.canonical`, `openGraph` (`title`, `description`, `type`, `locale: "pt_BR"`, `images`) e `twitter`.
3. **Dados Estruturados JSON-LD (`Schema.org`):**
   - Gere bloco JSON-LD específico do nicho (`LocalBusiness`, `ProfessionalService`, `MusicGroup`, `MedicalClinic`, `HealthAndBeautyBusiness` etc.) com endereço/região, horários ou links sociais reais/placeholder claramente marcados.
   - Serialize com escape seguro de `<` (`replace(/</g, "\\u003c")`) para prevenir XSS em script inline.
4. **Indexação (`sitemap.xml` e `robots.txt`):**
   - Implemente `app/sitemap.ts` listando todas as rotas públicas indexáveis com `lastModified` e prioridades coerentes.
   - Implemente `app/robots.ts` permitindo indexação pública e bloqueando rotas internas (`/api/`).
5. **Core Web Vitals (LCP, CLS, INP):**
   - Garanta fontes carregadas via `next/font` com `display: "swap"`, `priority` apenas na imagem principal de LCP (above-the-fold), dimensões/aspect-ratio definidos em mídia/embeds contra CLS e zero JavaScript bloqueante desnecessário no carregamento inicial.

## Entregável
Camada completa de SEO técnico, Schema.org JSON-LD, `sitemap.ts`, `robots.ts`, ajustes semânticos/WCAG AA e otimizações de Core Web Vitals aplicadas ao projeto.

## Critérios de Aceite
- Todas as páginas possuem `title`, `description`, `canonical`, OpenGraph, `<h1>` único e landmarks semânticos.
- `sitemap.xml` e `robots.txt` gerados corretamente no build de produção.
- Contraste WCAG AA e JSON-LD válidos estruturalmente, deixando explícito em QA que métricas reais de Lighthouse/CrUX dependem de execução em navegador/ambiente publicado.
