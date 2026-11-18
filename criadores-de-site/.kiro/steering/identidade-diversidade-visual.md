---
inclusion: always
description: "Regras obrigatórias de identidade visual por nicho, diversidade estética, composição de layout, tipografia e contraste WCAG."
---

# Identidade e Diversidade Visual por Nicho

## Regra Anti-Template Genérico
- **Proibido** reutilizar a mesma paleta, o mesmo arranjo padrão de seções (ex.: hero centralizado genérico + 3 cards idênticos + CTA roxo/azul padrão SaaS) ou a mesma dupla tipográfica entre nichos diferentes.
- Todo projeto de site deve iniciar com um **Briefing Visual do Nicho** antes da implementação de componentes de UI.

## Briefing Visual Obrigatório por Nicho
Antes de gerar estilos, defina explicitamente para o segmento-alvo:
1. **Personalidade e Referência Estética:**
   - **Estúdio de Tatuagem:** atmosfera dark/editorial ou industrial, contraste marcante, galeria assimétrica ou grid curado por estilos de traço, foco em portfólio e agendamento direto.
   - **Músico / Banda:** energia cinematográfica ou vibrante, destaque para lançamentos/player de áudio/vídeo, agenda de shows e press kit.
   - **Clínica de Estética / Saúde:** visual limpo, orgânico e confiável, espaçamento generoso, clareza de procedimentos, credenciais técnicas e botão de agendamento sem fricção.
   - **Serviços Locais (elétrica, marcenaria, oficina, pet, advocacia regional):** foco direto em confiança imediata, área atendida, prova social local, diferenciais objetivos e CTA rápido via WhatsApp/formulário.
2. **Paleta de Cores com Tokens Semânticos:**
   - Defina `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-primary`, `--color-accent`, `--color-border`.
   - Evite gradientes genéricos sem propósito e fundos brancos/escuros sem hierarquia de superfície.
3. **Tipografia Intencional:**
   - Escolha um pareamento coerente com o nicho (fonte display/título com personalidade + fonte de corpo de alta legibilidade via `next/font`).
   - Defina escala clara (`clamp()` ou tokens responsivos), line-height confortável (`1.5`–`1.7` em corpo; `1.05`–`1.2` em títulos) e limites de largura de leitura (`max-w-prose`).
4. **Composição e Ritmo de Seções:**
   - Varie a composição do Hero, dos blocos de prova social, da vitrine de serviços/portfólio e da seção de conversão conforme o comportamento de compra do nicho.
   - Animações e transições devem ser sutis e **obrigatoriamente** respeitar `prefers-reduced-motion: reduce`.

## Contraste e Acessibilidade Visual (WCAG AA)
- Texto normal deve manter razão de contraste mínima **4.5:1** contra o fundo.
- Texto grande (>= 18pt / 24px ou >= 14pt / 18.66px negrito) e elementos de interface/ícones funcionais devem manter no mínimo **3:1**.
- Nunca dependa apenas de cor para comunicar erro, status ou ação obrigatória.
- Proibido deixar "Lorem Ipsum" ou textos genéricos sem contexto do nicho na entrega; quando usar dados fictícios de demonstração, rotule-os claramente como exemplo/seed.
