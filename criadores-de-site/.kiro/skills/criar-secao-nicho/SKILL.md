---
name: criar-secao-nicho
description: "Construir seções e páginas responsivas em React/Next.js + Tailwind CSS aplicando os tokens exclusivos do nicho, mobile-first, microinterações sutis e acessibilidade."
---

# Criar Seções e Páginas do Nicho

## Entradas Esperadas
- Briefing Visual do Nicho (paleta, tipografia, composição e anti-padrões).
- Arquitetura Web (mapa de rotas, árvore de componentes e tipos TypeScript).
- Dados estruturados do nicho em `data/` (ou definição do cliente).

## Passo a Passo
1. **Configurar Tokens do Nicho:**
   - Mapeie cores, fontes (`next/font`), raios, sombras e escalas do briefing visual em variáveis CSS (`app/globals.css`) e/ou configuração do Tailwind.
   - Preserve rigorosamente o contraste WCAG AA definido no briefing.
2. **Construir Seções Modulares Mobile-First:**
   - Desenvolva cada seção como componente focado e reutilizável em `components/sections/` (ex.: `HeroSection`, `PortfolioShowcase`, `ServicesGrid`, `SocialProofSection`, `FaqAccordion`, `ContactCtaSection`, `SiteHeader`, `SiteFooter`).
   - Comece o layout pelo viewport móvel (`360px`) garantindo ausência de overflow horizontal e áreas clicáveis >= `44x44px`.
3. **Interatividade Sutil e Acessibilidade:**
   - Use elementos HTML semânticos (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`, `<button>` para ações, `<a>` para navegação).
   - Garanta estados visíveis de foco (`focus-visible:ring-2`), suporte a teclado (menu mobile, acordeões/tabs) e respeito a `motion-reduce:` / `prefers-reduced-motion`.
   - Use `next/image` com dimensões explícitas ou `aspect-ratio` fixo; forneça `alt` descritivo para imagens informativas e `alt=""` para decorativas.
4. **Conteúdo Realista e Transparente:**
   - Escreva textos coerentes com o segmento e com a proposta de conversão (proibido Lorem Ipsum).
   - Dados de exemplo (telefones fictícios, depoimentos ilustrativos, portfólio seed) devem ficar isolados em `data/` e sinalizados como dados de demonstração até substituição pelos ativos reais do cliente.

## Entregável
Componentes e páginas em React/Next.js + Tailwind CSS organizados em `app/`, `components/` e `data/`, fielmente aderentes aos tokens visuais e responsividade do nicho.

## Critérios de Aceite
- Layout fiel à identidade exclusiva definida no briefing do nicho (sem aparência genérica repetida).
- Sem erros TypeScript (`strict: true`), sem overflow horizontal estrutural e com landmarks/foco/labels corretos.
- Textos, imagens e links condizentes com o segmento, com placeholders claramente identificados quando forem seeds.
