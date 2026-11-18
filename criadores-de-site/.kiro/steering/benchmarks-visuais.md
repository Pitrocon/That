---
inclusion: always
description: "Diretrizes práticas de layout, hierarquia e padrões de conversão extraídos dos 5 sites de referência do projeto."
---

# Benchmarks Visuais de Referência (`criadores-de-site`)

Use estes 5 arquétipos (detalhados em `../Context/benchmarks-visuais.md`) como **referência de nível de acabamento, ritmo e conversão**, adaptando sempre ao nicho sem copiar marcas registradas:

## 1. Arquétipos Disponíveis por Tipo de Projeto
- **Serviço Local / Tráfego de Instagram** (ex.: tatuador, estética, barbearia — ref. *Tattoo Onda*):
  - Priorize experiência mobile-first sem fricção; considere dupla de CTAs acima da dobra (orçamento gratuito + agendamento), faixa imediata de 3 métricas de prova, seção de dúvidas/preparo para quebrar objeções e contato rápido via WhatsApp.
- **B2B / Engenharia / Serviços Especializados** (ref. *Integral IMI*):
  - Hero de impacto com proposta em 1 frase + subtítulo em fórmula de 3 pilares (`X + Y + Z`), destaque bicolor no título de seção e carrosséis separados para clientes e certificações/prêmios.
- **Produto / Portfólio Premium** (ref. *Apple*):
  - Alternância clara de seções claro/escuro, respiro generoso, grids simétricos `2xN`, par padrão de CTAs (*Saiba mais* preenchido + *Agendar/Comprar* secundário) e botão acessível de pausa para mídias em movimento.
- **Enterprise / Tech de Alta Performance** (ref. *AMD*):
  - Base escura de alto contraste com apenas 1 cor de acento elétrica, 3 cards de acesso rápido na base do hero, faixa de logos/parceiros em escala de cinza e cards de portfólio com links diretos por serviço/produto.
- **Editorial / Conteúdo / Cases Longos** (ref. *Blog do Google*):
  - Coluna estreita de alta legibilidade (`max-w-prose`), sumário sticky lateral em desktop, barra de progresso de leitura e tabelas comparativas com coluna destaque sutil.

## 2. Regras Obrigatórias de Qualidade Visual
- **Nada de splash screen que bloqueia conteúdo** por padrão em sites de conversão, a menos que o cliente peça explicitamente (e sempre respeitando `prefers-reduced-motion`).
- **Primeira dobra útil:** todo site deve exibir proposta clara + pelo menos 1 CTA primário visível acima da dobra em `360px` e `1440px`.
- **Contraste garantido:** mesmo em estéticas dark (`#000` / `#000a19`) ou pastel editorial, validar razão >= `4.5:1` em texto corrido e >= `3:1` em botões/ícones.
