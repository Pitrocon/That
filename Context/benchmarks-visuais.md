# Benchmarks Visuais de Referência (Inspeção em Navegador)

Catálogo de referências visuais e estruturais inspecionadas em **2026-11-18** no navegador em viewport desktop (`1440x900`).
Os tokens aproximados e fontes abaixo foram observados via folhas de estilo, links de fonte, variáveis CSS e inspeção visual das capturas (sem uso de `getComputedStyle` via `page.evaluate`).

---

## 1. Integral IMI (`https://integral-imi.com/`) — Arquétipo B2B Industrial / Deep-Tech
- **Atmosfera:** Técnica e escura na abertura (fotografia de estrutura offshore), alternando para blocos institucionais claros de contato.
- **Paleta observada:** Fundo escuro `#000a19` (aprox.), cards claros em cinza-neutro, texto `#ffffff` no escuro e cinza-escuro no claro, destaque laranja vibrante (`#ec671a` aprox.).
- **Tipografia:** `Inter` / `Inter Display` / `Manrope` (UI/corpo) + `Gideon Roman` / `Lora` (serifa pontual para reconhecimentos).
- **Estrutura e UX de destaque:**
  - Nav transparente sobre hero com logo, poucos itens (`ATUAÇÃO`, `SOBRE`, `CONTATO`), ícones sociais e seletor de idioma em pílula.
  - Hero direto com headline curto + subtítulo em fórmula `X + Y + Z` (`END + ROBÓTICA + IA`) + CTA ghost pill.
  - Título de seção com destaque bicolor na promessa ponta a ponta (*From Gear to Data*) + 3 cards horizontais de capacidade + 4 áreas de atuação + carrosséis separados para depoimentos de clientes e prêmios técnicos.

## 2. Tattoo Onda (`https://tattooonda.com.br/`) — Arquétipo Serviço Local / Luxo Artesanal Mobile-First
- **Atmosfera:** Editorial místico/boutique em preto absoluto com acentos dourados e coluna estreita (`max-width: 480px`) centrada mesmo em desktop, pensada para tráfego vindo de Instagram/anúncios.
- **Paleta observada (`:root`):** Fundo `#000000` / `#050505`, superfícies `#111111` / `#181818` com bordas douradas translúcidas (`rgba(201,168,76,0.18)`), texto creme `#f0e6d0` / dourado suave `#9a8a6a` e destaque metálico `#C9A84C` / `#e8c97a`.
- **Tipografia:** `Cinzel` e `Cormorant Garamond` (títulos/menu), `Jost` leve (corpo) e `IM Fell English` (detalhes).
- **Estrutura e UX de destaque:**
  - Nav sticky com blur, badge de localização local e drawer lateral com âncoras.
  - Hero com emblema central, duplo CTA dourado acima da dobra (*Consulta Gratuita* + *Agendar Horário*) e microcopy de escassez.
  - Faixa imediata de 3 métricas de autoridade logo abaixo da dobra + portfólio em carrossel + guias pré/pós-tattoo e FAQ para matar objeções antes do clique no WhatsApp flutuante.

## 3. Apple (`https://www.apple.com/`) — Arquétipo Vitrine Minimalista de Produto
- **Atmosfera:** Minimalismo editorial de alto respiro, fotografia/renders macro e alternância ritmada entre módulos claros (`#ffffff` / `#f5f5f7`) e pretos (`#000000`).
- **Tipografia:** `SF Pro` e `SF Pro Icons`.
- **Cor de destaque observada:** Azul `#0071e3` (aprox.) em botões pill preenchidos e contorno secundário.
- **Estrutura e UX de destaque:**
  - Módulos full-width seguidos de grade simétrica `2x3` com fino respiro entre cards.
  - Fórmula rígida de conversão em quase todo módulo: **Título curto + 1 linha de benefício + par de CTAs (`Learn more` preenchido + `Buy` outline)**.
  - Controle explícito de pausa de animação visível no hero (acessibilidade).

## 4. Blog do Google — Gemini 4 Hydrogen (`https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/`) — Arquétipo Editorial Técnico / Storytelling
- **Atmosfera:** Editorial limpo em fundo branco (`#ffffff`) com cabeçalho pastel azul-gelo (`#eaf2ff` aprox.), foco em leitura longa e visualização clara de dados.
- **Tipografia:** `Google Sans`, `Google Sans Flex`, `Product Sans`.
- **Cor de destaque observada:** Azul `#1a73e8` (aprox.) em links, barra de progresso e CTA; azul-celeste `#99d1ff` / `#8ab4f8` destacando a coluna vencedora em tabelas comparativas.
- **Estrutura e UX de destaque:**
  - Header sticky que exibe título do artigo e **barra de progresso de leitura** ao rolar.
  - Hero com breadcrumb, tempo de leitura, autor e barra integrada de áudio (*Listen to article*).
  - Layout assimétrico com **TOC sticky à esquerda (*In this article*)** + coluna estreita de leitura e tabelas com coluna de destaque.

## 5. AMD (`https://www.amd.com/pt.html`) — Arquétipo Enterprise Tech Dark & High-Contrast
- **Atmosfera:** Infraestrutura corporativa futurista em preto (`#000000`) com grafismos em ondas ciano/azul-elétrico e cards carvão (`#111111` / `#141414`).
- **Tipografia:** Sans-serif geométrica/corporativa proprietária + `Font Awesome Sharp Solid 900`.
- **Cor de destaque observada:** Ciano-elétrico (`#00c2de` / `#00b2d6` aprox.) em palavras-chave do headline, rótulos em caixa alta, bordas de botão e links com chevron (`>`).
- **Estrutura e UX de destaque:**
  - Hero assimétrico com CTA principal + **3 cards horizontais de destaque na base da primeira dobra**.
  - Blocos bem definidos: *Por que escolher* (3 colunas) → faixa de logotipos de prova social monocromáticos → carrossel de portfólio com sub-links diretos por produto → banner para desenvolvedores → notícias.
  - Botão acessível dedicado no canto inferior direito.
