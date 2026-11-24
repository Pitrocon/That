# Processo Híbrido da Equipe de Pesquisa (Humano + IA)

Este documento define o fluxo operacional para **prospecção, auditoria e qualificação de leads** no modelo híbrido (equipe humana + agentes de IA no Antigravity), mantendo compatibilidade total com [`modelo-planilha-leads.csv`](./modelo-planilha-leads.csv) e [`contrato-handoff-site-social.md`](./contrato-handoff-site-social.md), sem depender do Kiro para navegação em plataformas fechadas (Instagram/Google Maps).

---

## 1. Visão Geral do Fluxo (4 Etapas)

```text
[1. Garimpo Humano] ──▶ [2. Auditoria & Enriquecimento (IA)] ──▶ [3. Handoff Site/Social] ──▶ [4. Abordagem SDR]
  (30–60 min/dia)              (lote automatizado)                (Briefing YAML + CSV)        (DM / WhatsApp)
```

**Princípio central:** Humanos fazem o que exige login, scroll humano e julgamento rápido em plataformas fechadas (Instagram, Google Maps). A IA faz o que exige leitura técnica, inspeção de sites existentes, padronização de dados, cruzamento com benchmarks visuais e redação personalizada.

---

## 2. Papéis e Responsabilidades

### A. Pesquisador de Campo (Humano / VA / SDR Júnior)
- **Onde atua:** Google Maps, Instagram, guias comerciais locais e anúncios (Biblioteca de Anúncios).
- **O que NÃO faz:** Não perde tempo preenchendo cores, estrutura de site ou escrevendo copy.
- **Entrega:** Preenche apenas as **6 colunas brutas** em [`modelo-captura-bruta-leads.csv`](./modelo-captura-bruta-leads.csv):
  1. `Nicho_Ramo`
  2. `Nome_Empresa_ou_Profissional`
  3. `Instagram_URL`
  4. `Site_Atual_URL` (deixar vazio ou `Sem site` se só tiver Linktree/WhatsApp)
  5. `Telefone_WhatsApp` / `Email` (se público na bio ou Maps)
  6. `Sinal_Observado` (1 frase curta do que chamou atenção: ex. *"anunciando no Insta, sem site na bio"*, *"site lento e quebrado no celular"*).
- **Meta sugerida:** 15 a 30 leads brutos por bloco de 45 minutos.

### B. Analista / Auditor de Leads (IA no Antigravity)
- **Ferramentas usadas:** Subagente `browser` (para abrir `Site_Atual_URL` e validar visual/mobile) + `search_web` (para checar presença digital pública).
- **O que faz com o lote bruto:**
  1. Verifica se o site atual realmente existe, se abre rápido e se tem captura clara de lead (CTA acima da dobra, WhatsApp, formulário, SEO básico).
  2. Define `Estilo_Visual_Sugerido`, `Cores_Sugeridas` e `Estrutura_Site_Sugerida` usando o catálogo de [`benchmarks-visuais.md`](./benchmarks-visuais.md).
  3. Classifica o lead como **Aprovado (Pendente)** ou **Descartado** (ex.: já tem site moderno e rápido, perfil inativo há > 6 meses, ou dados inválidos).
  4. Gera a saída oficial nas **11 colunas** de [`modelo-planilha-leads.csv`](./modelo-planilha-leads.csv), marcando `[NÃO VERIFICADO EXTERNAMENTE]` para qualquer dado não confirmado.
  5. Quando identificar um nicho recorrente sem modelo pronto no portfólio, gera o **Briefing de Nicho / Lead (YAML)** conforme [`contrato-handoff-site-social.md`](./contrato-handoff-site-social.md).

### C. Coordenador / Closer (Você ou Líder Comercial)
- **O que faz:**
  - Define o **nicho e a cidade/região da semana** para o garimpo (evita pesquisa dispersa).
  - Revisa rapidamente o lote enriquecido pela IA antes do disparo.
  - Aprova quais leads vão para **construção de protótipo/modelo de nicho** (`criadores-de-site`) e quais seguem direto para **abordagem** (`criadores-de-social-media`).

---

## 3. Critérios de Qualificação (O que torna um lead "Bom")

### Aprovar (Prioridade Alta)
- Negócio ativo (postou nos últimos 30 dias ou tem avaliações recentes no Google Maps).
- **Sem site próprio** (usa apenas Linktree, Beacons, link direto de WhatsApp) **OU** site visivelmente antigo/não responsivo/sem CTA claro.
- Ticket médio compatível com investimento em site (ex.: clínicas de estética/odonto, estúdios de tatuagem, escritórios, prestadores locais premium, músicos em lançamento, negócios B2B locais).
- Canal de contato acessível (DM aberta ou WhatsApp comercial visível).

### Descartar Imediatamente
- Já possui site bem estruturado, rápido e com funil claro.
- Conta abandonada (> 90 dias sem atividade) ou sem prova de operação real.
- Negócio sem clareza de oferta ou contato impossível.

---

## 4. Guia Rápido de Mapeamento Visual (Referência para Auditoria)

Ao sugerir `Estilo_Visual_Sugerido`, usar os 5 arquétipos de [`benchmarks-visuais.md`](./benchmarks-visuais.md):

| Perfil do Nicho / Lead | Arquétipo de Referência | Quando Aplicar |
| :--- | :--- | :--- |
| Serviços locais premium / agenda via WhatsApp (estética, tatuagem, barbearia, clínicas boutique) | **Serviço Local / Luxo Artesanal Mobile-First** (ref. Tattoo Onda) | Tráfego vem 90% do Instagram/anúncios; precisa de duplo CTA rápido e quebra de objeções. |
| Indústria, engenharia, serviços técnicos B2B, logística | **B2B Industrial / Deep-Tech** (ref. Integral IMI) | Precisa passar autoridade técnica, clareza de processo (`X + Y + Z`) e prova social corporativa. |
| Produtos físicos, tecnologia, catálogo enxuto de alto valor | **Vitrine Minimalista de Produto** (ref. Apple) | Foco em fotografia do produto, alternância claro/escuro e CTAs diretos (*Saiba mais* + *Comprar*). |
| Consultorias, infoprodutos densos, saúde baseada em evidência, conteúdo longo | **Editorial Técnico / Storytelling** (ref. Blog Google) | Venda consultiva onde leitura, autoridade e clareza de dados fecham o cliente. |
| SaaS, agências tech, infraestrutura de TI, hardware | **Enterprise Tech Dark & High-Contrast** (ref. AMD) | Visual moderno de alta tecnologia, contraste forte e múltiplos pontos de entrada por solução. |

---

## 5. Como Rodar o Processamento em Lote no Antigravity

Sempre que o pesquisador humano entregar o CSV bruto preenchido, envie este comando no chat do Antigravity (anexando ou apontando o arquivo):

```text
Processe este lote de leads brutos seguindo `Context/processo-equipe-pesquisa-hibrido.md`:
1. Para cada lead que tiver `Site_Atual_URL`, abra no navegador para auditar UX mobile, velocidade percebida e presença de CTA/WhatsApp.
2. Para leads sem site ou com site fraco, sugira Estilo, Cores e Estrutura com base em `Context/benchmarks-visuais.md`.
3. Entregue a tabela final no schema exato de 11 colunas de `Context/modelo-planilha-leads.csv`.
4. Gere 1 Briefing de Nicho em YAML (padrão `Context/contrato-handoff-site-social.md`) para o nicho predominante do lote e 1 rascunho de abordagem personalizada para os 3 melhores leads.
```

---

## 6. Regras de Governança e Integridade
- **Zero dado inventado:** Nunca preencher telefone, e-mail ou métrica por suposição; usar `[NÃO VERIFICADO EXTERNAMENTE]` se não tiver sido confirmado.
- **Anti-spam e Opt-out:** Máximo de 2 follow-ups por lead; se responder pedindo para não receber mensagens (`Opt_Out`) ou recusar (`Sem_Interesse`), encerrar na hora e atualizar `Status_Abordagem_DM`.
- **Cadência recomendada:** Melhor abordar **10 leads extremamente bem auditados por dia** (com dor específica observada) do que 100 mensagens genéricas.
