---
name: pesquisar-nicho-visual
description: "Pesquisar requisitos do nicho, jornadas de conversão, benchmarks reais e definir briefing visual exclusivo (paleta, tipografia, composição de layout e contraste WCAG)."
---

# Pesquisar Nicho e Direção Visual

## Entradas Esperadas
- Nicho/ramo de atuação (ou Briefing de Nicho/Lead vindo de `../Context/contrato-handoff-site-social.md`).
- Objetivo principal de conversão (ex.: agendamento via WhatsApp, pedido de orçamento, reserva, venda de ingressos/agenda).
- Restrições de marca (se o cliente já possuir nome, logotipo, cidade ou cores obrigatórias).

## Passo a Passo
1. **Contexto e Dores do Nicho:**
   - Mapeie o público comprador local/regional, suas dúvidas frequentes, objeções de confiança e o gatilho principal de contato.
   - Se receber um Briefing de Social Media, valide e aprofunde `dores_principais` e `objetivo_conversao`.
2. **Benchmarking Factual:**
   - Use `web_search` / `web_fetch` quando houver conexão disponível para observar referências reais do nicho (estruturas que convertem, elementos de prova social e padrões estéticos autênticos).
   - Caso não haja acesso web no momento ou alguma fonte falhe, registre explicitamente essa limitação — nunca invente benchmarks ou métricas como observados.
3. **Jornada de Conversão e Seções Obrigatórias:**
   - Defina a sequência lógica de seções da página (ex.: para Tatuador: Hero manifesto + Galeria filtrável por estilo + Processo de biossegurança/orçamento + Depoimentos + Agendamento/WhatsApp; para Músico: Hero com último lançamento + Player/Embed + Agenda de Shows + Press Kit + Contato de Booking; para Clínica: Hero de autoridade + Catálogo de procedimentos + Corpo clínico/registros + Dúvidas + Agendamento).
4. **Identidade Visual Única (Anti-Template):**
   - Defina paleta com hexadecimais exatos e papéis semânticos (`bg`, `surface`, `text`, `text-muted`, `primary`, `accent`, `border`).
   - Verifique matematicamente a razão de contraste para texto normal (`>= 4.5:1`) e texto grande/botões (`>= 3:1`) conforme WCAG AA.
   - Escolha pareamento tipográfico específico do nicho (display + corpo via Google Fonts / `next/font`) e estilo de composição (grid assimétrico, editorial, cards de alto contraste, espaçamento, bordas).
   - Liste explicitamente **anti-padrões proibidos** para não cair em visual genérico.

## Entregável
Documento estruturado **Briefing Visual e de Conversão do Nicho** (Markdown ou JSON/MD no diretório do projeto de site) contendo:
- Resumo do nicho, público, dores e objeções;
- Jornada de conversão e mapa de seções prioritárias;
- Tokens visuais completos (paleta hexadecimal + verificação de contraste + tipografia + estilo de layout/movimento);
- Diretrizes de copy e CTAs principais/secundários.

## Critérios de Aceite
- Direção visual claramente distinta de outros nichos (paleta, fontes e ritmo de seções justificados pelo segmento).
- Contraste mínimo WCAG AA respeitado nas combinações especificadas.
- Zero métricas inventadas ou benchmarks fictícios apresentados como pesquisa real.
