# Briefing Visual e de Conversão — Vitrine Apple Pro Dark

**Arquétipo Base:** Apple (`https://www.apple.com/`) adaptado para **Modo Dark Pro / Titânio** + elementos de conversão de serviços locais.

---

## 1. Direção Estética e Tokens Semânticos

| Token | Valor | Papel | Contraste Verificado (Relativo) |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#000000` | Fundo principal obsidiana | Base |
| `--color-surface` | `#0a0a0c` | Faixas alternadas e painéis sutis | Base elevada |
| `--color-surface-elevated` | `#121216` | Cards do Bento Grid e previews | Base card |
| `--color-surface-contrast` | `#16161b` | Inputs, badges e hover states | Superfície de interação |
| `--color-text` | `#f5f5f7` | Títulos e texto principal | `19.3:1` sobre `#000000` |
| `--color-text-muted` | `#a1a1aa` | Subtítulos, metadados e legendas | `8.1:1` sobre `#000000` (`>= 4.5:1` WCAG AA) |
| `--color-primary` | `#0071e3` | Botão CTA sólido padrão Apple | `4.68:1` com texto `#ffffff` (`>= 4.5:1`) |
| `--color-link` | `#2997ff` | Links inline, foco visível e destaques | `6.8:1` sobre `#000000` |
| `--color-accent` | `#e8c97a` | Detalhe titânio/dourado discreto em tags premium | `12.6:1` sobre `#000000` |
| `--color-border` | `rgba(255, 255, 255, 0.10)` | Contornos finos estilo hardware | Sutil |

---

## 2. Tipografia e Ritmo de Leitura
- **Família principal:** `Plus Jakarta Sans` / `Inter` via `next/font/google` + fallback `SF Pro Display`, `-apple-system`, `sans-serif`.
- **Mono técnico:** `JetBrains Mono` para métricas, endpoints, tokens e badges de engenharia.
- **Escala:**
  - `H1`: `clamp(2.35rem, 5.2vw, 4.75rem)`, `tracking-[-0.035em]`, `leading-[1.03]`, peso `600`/`700`.
  - `H2`: `clamp(1.85rem, 3.6vw, 3.15rem)`, `tracking-[-0.025em]`, `leading-[1.08]`.
  - Corpo: `1rem`–`1.125rem`, `leading-[1.6]`, limitado a `max-w-prose` em textos contínuos.

---

## 3. Ritmo de Seções (Fórmula Apple Dark)
1. **Navbar Sticky Translúcida (`#top`):** Altura compacta (`52px`), `bg-black/75 backdrop-blur-md`, âncoras claras e CTA pill azul.
2. **Hero Full-Bleed Dark (`#vitrine`):** Eyebrow técnico + Headline curto + 1 linha de valor + par de CTAs Pill (`Explorar modelos` primário + `Solicitar projeto` outline) + botão acessível `Pausar animação` (`aria-pressed`) + mockup estilizado dark.
3. **Faixa de Métricas de Engenharia:** 3 indicadores técnicos do método (sem inventar números de clientes reais).
4. **Bento Grid Simétrico (`#bento`):** Grid `2x2` / `2x3` com cards escuros de alto respiro e hierarquia rígida.
5. **Vitrine Interativa Multi-Nicho (`#nichos`):** Alternador entre os 3 nichos da planilha (`Estúdio de Tatuagem`, `Músico / Banda`, `Clínica de Estética`), claramente rotulados como `[MODELO DEMONSTRATIVO / SEED]`, exibindo paleta sugerida, estrutura e CTA direto que pré-preenche o orçamento.
6. **Processo em 4 Ondas + FAQ Acessível (`#processo`, `#faq`):** Transparência do fluxo de entrega e quebra de objeções antes do contato.
7. **Captura de Leads & WhatsApp (`#orcamento`):** Formulário validado com Zod (`POST /api/leads`) + fallback imediato via WhatsApp rastreável com UTM.
8. **Rodapé Multi-Coluna (`footer`):** Estilo Apple em grafite escuro com nota explícita sobre dados de demonstração.

---

## 4. Anti-Padrões Proibidos
- Nada de splash screen bloqueando a dobra inicial.
- Nada de "Lorem Ipsum" ou métricas fictícias de faturamento apresentadas como reais.
- Nada de gradientes neon genéricos roxo/rosa padrão SaaS sem hierarquia.
