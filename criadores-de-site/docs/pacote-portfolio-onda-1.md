# Pacote de Portfólio — Onda 1 (`criadores-de-site/`)

Handoff estruturado conforme `../../Context/contrato-handoff-site-social.md` para consumo da frente `criadores-de-social-media/` (`social-estrategista`, `social-copywriter`, `social-criativos` e `social-prospeccao-sdr`).

## 1. Resumo do Ativo Entregue
- **Projeto:** Vitrine Institucional & Fábrica de Sites Multi-Nicho — Estilo **Apple Pro Dark**
- **Ambiente atual:** Aplicação local em `criadores-de-site/` (ainda não publicada em domínio público)
- **Nichos demonstrativos integrados (`[MODELO DEMONSTRATIVO / SEED]`):**
  1. Estúdio de Tatuagem (*Exemplo Ink Studio* — Dark / Industrial / Vermelho)
  2. Músico / Banda (*Banda Exemplo Rock* — Vibrante / Roxo Neon)
  3. Clínica de Estética (*Estética Renova* — Titânio Escuro / Verde Sálvia)

## 2. Identidade Visual e Diferenciais Técnicos
- **Paleta Apple Pro Dark:** Obsidiana `#000000`, superfícies titânio `#0a0a0c` / `#121216` / `#16161b`, texto `#f5f5f7` e `#a1a1aa`, ação primária `#0071e3`, detalhe metálico `#e8c97a`.
- **Tipografia:** `Plus Jakarta Sans` + `JetBrains Mono` via `next/font/google`.
- **Diferenciais para argumentos comerciais (Copy / DM):**
  - Seletor interativo que prova visualmente que cada nicho recebe estética própria sem repetir template genérico;
  - Botão acessível de pausa de animação e respeito nativo a `prefers-reduced-motion`;
  - Formulário validado com Zod no servidor (`POST /api/leads`), proteção anti-spam (honeypot + rate limit), sanitização contra formula injection em planilhas e saída pronta para as 11 colunas de `Context/modelo-planilha-leads.csv`;
  - SEO técnico pronto (`metadata`, OpenGraph, Twitter Cards, JSON-LD `Schema.org`, `sitemap.xml` e `robots.txt`).

## 3. Ganchos Sugeridos para `criadores-de-social-media/`
- *Carrossel / Reels:* "Por que um estúdio de tatuagem, uma banda e uma clínica não podem usar o mesmo template — como adaptamos a estética Apple Dark para 3 nichos diferentes."
- *Abordagem DM (SDR):* Demonstrar ao lead que já existe protótipo pensado para o segmento dele, sem links quebrados ou formulários genéricos.

## 4. `NÃO verificado` (Transparência Obrigatória)
- Publicação em domínio de produção, HTTPS/SSL e indexação real no Google Search Console.
- Persistência automática em Google Sheets ou disparo real de webhook externo (o endpoint `POST /api/leads` retorna `persistedExternally: false` nesta onda).
- Medição Lighthouse / Core Web Vitals em ambiente hospedado e testes em aparelhos físicos iOS/Android.
