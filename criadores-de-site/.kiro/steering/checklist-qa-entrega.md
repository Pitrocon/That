---
inclusion: always
description: "Critérios obrigatórios de validação técnica, SEO/a11y e regra de honestidade factual para nunca declarar como verificado o que não rodou em navegador real ou ambiente externo."
---

# Checklist Obrigatório de QA e Entrega

## Portões Técnicos Obrigatórios (Execução Real)
Quando houver código-fonte de site no workspace, nenhuma entrega pode ser considerada aprovada sem executar e registrar saída real de:
1. **Typecheck:** `npx tsc --noEmit` (ou script equivalente no `package.json`) com 0 erros.
2. **Lint:** `npm run lint` / `eslint` sem erros bloqueantes.
3. **Build de Produção:** `npm run build` concluído com sucesso e geração de rotas confirmada.
4. **Testes Aplicáveis:** testes unitários/integração (`vitest`, `jest`, `pytest`) e E2E (`playwright`) quando configurados no projeto.

## Verificações Estruturais de Produto e SEO/A11y
Antes da emissão do parecer final, audite no código compilável:
- **Links e CTAs:** nenhuma âncora quebrada (`href="#"` sem destino real), rotas internas consistentes, links de WhatsApp formatados corretamente (`https://wa.me/<E164>?text=...`) com mensagem codificada e parâmetros UTM quando aplicável.
- **Meta Tags:** `<title>` único por rota, `<meta name="description">`, URL canônica, OpenGraph (`og:title`, `og:description`, `og:type`, `og:image`) e Twitter Cards.
- **Dados Estruturados:** JSON-LD `Schema.org` válido e condizente com o nicho (ex.: `LocalBusiness`, `TattooParlor`/`HealthAndBeautyBusiness`, `MusicGroup`, `MedicalClinic`, `ProfessionalService`), sem tags `<script>` mal escapadas.
- **Indexação:** `sitemap.xml` (ex.: `app/sitemap.ts`) e `robots.txt` (ex.: `app/robots.ts`) presentes e coerentes com as rotas públicas.
- **Acessibilidade Semântica:** único `<h1>` por página, landmarks (`header`, `nav`, `main`, `footer`), `alt` descritivo em imagens relevantes, `<label>` associado em todos os inputs e estados de erro anunciáveis (`aria-live` / `role="alert"`).
- **Segurança Estática:** ausência de segredos hardcoded no código cliente, validação server-side presente nos endpoints de formulário e proteção anti-spam/rate-limit implementada.

## Regra Inegociável de Honestidade Factual
- **NUNCA** declare como "verificado", "testado visualmente" ou "aprovado em produção" qualquer aspecto que **não tenha sido executado em ambiente real**:
  - Renderização visual e responsividade real em navegadores (Chrome, Safari, Firefox, dispositivos iOS/Android físicos);
  - Medição real de Core Web Vitals / Lighthouse em ambiente publicado ou navegador headless não executado;
  - Envio real de leads para webhook externo, Google Sheets ou disparo real no WhatsApp;
  - Domínio personalizado, SSL/HTTPS e indexação ativa no Google Search Console.
- Todo relatório final de QA e todo handoff para `criadores-de-social-media` deve conter uma seção explícita chamada **`NÃO verificado`** listando exatamente quais itens ficaram pendentes de verificação externa ou visual humana.
