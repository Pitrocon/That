# Referência Histórica de Skills (Google Drive)

> Documento consolidado a partir dos arquivos originais do Google Drive. Na implementação Kiro atual, as skills foram adaptadas e separadas em criadores-de-site/.kiro/skills/ e criadores-de-social-media/.kiro/skills/.

---

# **Skills Especializadas \- Equipe de Desenvolvimento e Qualidade**

Definição técnica e detalhada das habilidades, ferramentas de código aberto do GitHub e justificativas para cada agente da equipe de engenharia web.

## ---

**1\. Gerente de Desenvolvimento (Development Manager)**

> * **Skills & Atribuições:** Orquestração de pipelines de agentes, balanceamento de carga, consolidação de logs e relatórios de validação, integração contínua (CI/CD) e governança de repositórios.  
> * **Bibliotecas & Ferramentas GitHub:** CrewAI / LangGraph (orquestração de fluxo com estado), GitPython (automação de commits e branches), Prefect / Airflow (controle de execução de jobs).  
> * **Justificativa:** Centraliza a comunicação entre os agentes executores (Front e Back) e seus validadores, impedindo avanço de código com defeito para o agente de saída.

## **2\. Agente Desenvolvedor Frontend (Frontend Developer)**

> * **Skills & Atribuições:** Construção de interfaces responsivas, arquitetura de componentes, tipografia e estilização baseadas nos perfis de nicho, otimização de renderização (SSR/SSG).  
> * **Bibliotecas & Ferramentas GitHub:** Next.js / Astro (geração de sites estáticos de alta performance), Tailwind CSS / shadcn/ui (componentização modular e estilização ágil), Lucide Icons.  
> * **Justificativa:** Produz código leve, moderno e adaptável para múltiplos nichos (tatuadores, músicos, etc.) garantindo fidelidade visual e agilidade.

## **3\. Agente Validador de Frontend (Frontend Validator)**

> * **Skills & Atribuições:** Testes de renderização entre navegadores, verificação de responsividade mobile/desktop, validação de tags semânticas HTML5, testes de acessibilidade (a11y).  
> * **Bibliotecas & Ferramentas GitHub:** Playwright / Puppeteer (capturas de tela automatizadas e testes E2E headless), axe-core (auditoria automática de acessibilidade WCAG), Lighthouse CI.  
> * **Justificativa:** Garante que nenhuma interface quebrada, desalinhada ou com problemas de usabilidade retorne ao pipeline antes do aceite formal do gerente.

## **4\. Agente Desenvolvedor Backend (Backend Developer)**

> * **Skills & Atribuições:** Criação de endpoints de API RESTful/JSON, modelagem de banco de dados, autenticação, integração de webhooks (WhatsApp/form/Stripe) e segurança de dados.  
> * **Bibliotecas & Ferramentas GitHub:** FastAPI / Express.js (serviços de alta velocidade com tipagem rígida), Prisma ORM / SQLAlchemy, Pydantic (validação estrita de esquemas de entrada).  
> * **Justificativa:** Fornece a infraestrutura de dados e lógica funcional robusta e segura para os formulários de contato, agendamentos e cadastros do site.

## **5\. Agente Validador de Backend (Backend Validator)**

> * **Skills & Atribuições:** Testes unitários e de integração de rotas, verificação de sanitização contra injeção SQL/XSS, validação de tempo de resposta sob carga e contratos de API.  
> * **Bibliotecas & Ferramentas GitHub:** Pytest / Jest, Schemathesis (testes baseados em propriedades de APIs baseados em OpenAPI), OWASP ZAP / Safety (verificação de vulnerabilidades de dependências).  
> * **Justificativa:** Bloqueia falhas lógicas, falhas de autenticação e gargalos de processamento antes do código ser submetido à revisão do gerente.

## **6\. Agente de SEO e Métricas (SEO & Metrics Specialist)**

> * **Skills & Atribuições:** Otimização on-page, geração de sitemap.xml, robots.txt, metadados OpenGraph, dados estruturados Schema.org, auditoria de Core Web Vitals.  
> * **Bibliotecas & Ferramentas GitHub:** schema-dts (tipagem Schema.org para JSON-LD), Lighthouse CLI, next-seo, scripts de verificação de tags canônicas e cabeçalhos de rastreamento.  
> * **Justificativa:** Assegura que todos os sites criados pelo grupo já nasçam indexáveis e prontos para competir em buscas locais no Google.

## **7\. Agente de Saída Final / QA Master (Final QA & Release Agent)**

> * **Skills & Atribuições:** Auditoria completa end-to-end do produto compilado, verificação de links quebrados, conferência com o checklist do nicho, emissão do certificado de build final.  
> * **Bibliotecas & Ferramentas GitHub:** Cypress / Playwright (fluxos de ponta a ponta: do envio de formulário até confirmação no backend), broken-link-checker, gerador de relatórios HTML consolidados.  
> * **Justificativa:** Último filtro operacional; nenhum site vai ao ar ou é entregue ao cliente sem o carimbo de conformidade irrestrita deste agente.

---

# **Skills Especializadas \- Equipe de Pesquisa, Inteligência de Mercado e Leads**

Mapeamento de competências técnicas, bibliotecas open-source validadas (GitHub) e justificativas operacionais para cada agente da equipe de pesquisa e inteligência.

## ---

**1\. Gerente de Pesquisa e Inteligência de Mercado (Research Manager)**

> * **Skills & Atribuições:** Coordenação de pipelines de pesquisa, definição de critérios de viabilidade de nicho, síntese de relatórios executivos e supervisão da qualidade dos leads antes da passagem para marketing e desenvolvimento.  
> * **Bibliotecas & Ferramentas GitHub:** CrewAI / LangGraph (orquestração hierárquica e controle de fluxo), Pydantic (estruturação e validação de contratos de dados), DuckDB (agregação rápida de métricas e relatórios).  
> * **Justificativa:** Garante alinhamento estratégico, valida consistência dos dados agregados e assegura que os nichos selecionados sejam lucrativos e viáveis.

## **2\. Agente Pesquisador de Nichos e Requisitos (Niche Researcher Agent)**

> * **Skills & Atribuições:** Investigação profunda de modelos de negócios verticais (tatuadores, músicos, clínicas, etc.), extração de estruturas essenciais de sites concorrentes e mapeamento de jornadas de usuário.  
> * **Bibliotecas & Ferramentas GitHub:** Crawl4AI / Scrapy (web crawling rápido e estruturado para LLMs), BeautifulSoup4, Trafilatura (extração limpa de textos e artigos web).  
> * **Justificativa:** Fornece ao Frontend e Backend requisitos técnicos claros, seções obrigatórias e sitemaps específicos para cada segmento de atuação.

## **3\. Agente de Diversidade e Tendências Visuais (Visual Diversity Agent)**

> * **Skills & Atribuições:** Monitoramento contínuo de tendências visuais, paletas de cores, tipografias e padrões de UI em plataformas como Instagram, Dribbble, Behance e Awwwards; prevenção contra layouts repetitivos ou padronizados.  
> * **Bibliotecas & Ferramentas GitHub:** Playwright (captura automatizada de assets e interfaces), ColorThief / colormath (extração e harmonização algorítmica de paletas), Pillow (análise e processamento de imagens).  
> * **Justificativa:** Garante um catálogo diversificado e esteticamente autêntico para cada projeto, aumentando o apelo visual e a taxa de conversão nas vendas.

## **4\. Agente Analista de Demanda de Mercado (Market Demand Analyst)**

> * **Skills & Atribuições:** Identificação de nichos com alta demanda e escassez de presença digital qualificada; análise de tendências de busca regional e volumetria de mercado.  
> * **Bibliotecas & Ferramentas GitHub:** pytrends (análise programática de tendências do Google Trends), requests / httpx (consumo de APIs públicas e comerciais de mercado), pandas (análise exploratória de dados).  
> * **Justificativa:** Prioriza setores com maior propensão de compra e menor fricção comercial, otimizando o retorno sobre o tempo de desenvolvimento.

## **5\. Agente Validador de Pesquisa de Mercado (Research Validator)**

> * **Skills & Atribuições:** Auditoria sistemática de dados de pesquisa, eliminação de premissas falsas, deduplicação de informações e verificação da integridade de fontes e referências.  
> * **Bibliotecas & Ferramentas GitHub:** Great Expectations (validação rigorosa de qualidade e integridade de dados), Cerberus / Pydantic (regras de validação de esquemas), pytest (testes automatizados de pipelines de dados).  
> * **Justificativa:** Minimiza alucinações e erros operacionais, assegurando que o time técnico receba apenas especificações testadas e confiáveis.

## **6\. Agente de Geração e Planilhas de Leads (Leads Spreadsheet Generator)**

> * **Skills & Atribuições:** Extração e enriquecimento de contatos comerciais (perfil do Instagram, WhatsApp, e-mail, segmento), formatação e atualização automática de planilhas de prospecção.  
> * **Bibliotecas & Ferramentas GitHub:** gspread (manipulação via API do Google Sheets), openpyxl (geração e manipulação de arquivos XLSX), phonenumbers (validação e normalização de telefones internacionais/nacionais), email-validator.  
> * **Justificativa:** Automatiza a alimentação da base de leads qualificados em tempo real, preparando os dados de entrada diretamente para a equipe de marketing e automação de DM.

---

# **Skills Especializadas \- Equipe de Marketing, Conteúdo e Automação de Vendas (Instagram)**

Competências técnicas, ferramentas open-source do GitHub e diretrizes operacionais para cada agente responsável por atração, engajamento e conversão de leads.

## ---

**1\. Gerente de Marketing e Engajamento (Marketing Manager)**

> * **Skills & Atribuições:** Gestão e supervisão do calendário editorial, sincronização entre publicação de conteúdo e automação de vendas, definição de KPIs de engajamento/conversão e alinhamento com dados de prospecção.  
> * **Bibliotecas & Ferramentas GitHub:** CrewAI / LangGraph (orquestração hierárquica e controle de estado do funil), APScheduler / Celery (agendamento assíncrono de disparos e rotinas), SQLAlchemy / TinyDB (gestão do fluxo de publicação e status de campanhas).  
> * **Justificativa:** Garante consistência de marca, evita sobreposição de mensagens e assegura que a produção de criativos e textos siga as prioridades comerciais da operação.

## **2\. Agente de Pesquisa de Conteúdo para Posts (Content Post Research Agent)**

> * **Skills & Atribuições:** Monitoramento contínuo de temas virais, formatos com alta taxa de compartilhamento/retenção no Instagram e redes sociais, pesquisa de tópicos em alta e análise de concorrência orgânica.  
> * **Bibliotecas & Ferramentas GitHub:** yt-dlp / instaloader (extração de metadados de mídia pública para análise de engajamento), Trafilatura / BeautifulSoup4 (raspagem de tendências em blogs e fóruns), praw (monitoramento de discussões relevantes em comunidades).  
> * **Justificativa:** Alimenta a equipe com pautas validadas e temas quentes, eliminando suposições e aumentando a taxa orgânica de alcance das postagens.

## **3\. Agente Criador de Texto / Copywriter (Copywriting & Hashtags Specialist)**

> * **Skills & Atribuições:** Redação persuasiva orientada a conversão (técnicas AIDA, PAS), formulação de ganchos (hooks) para carrosséis e reels, elaboração de chamadas para ação (CTAs) para direcionar leads à DM e agrupamento estratégico de hashtags por relevância.  
> * **Bibliotecas & Ferramentas GitHub:** Frameworks de prompt engineering baseados em LangChain, analisadores semânticos e de sentimento via TextBlob / NLTK, formatadores automatizados de layout textual.  
> * **Justificativa:** Produz textos persuasivos e contextualizados com a dor do cliente, aumentando a taxa de comentários e estimulando o contato via mensagens diretas.

## **4\. Agente Produtor de Imagens e Criativos (Creative Images Producer)**

> * **Skills & Atribuições:** Geração e diagramação visual de criativos para feed, carrosséis explicativos e stories; aplicação de princípios de contraste visual, identidade de cores e posicionamento de elementos gráficos.  
> * **Bibliotecas & Ferramentas GitHub:** diffusers / APIs de difusão de imagem (geração de ativos visuais), Pillow (manipulação programática, composição de templates e inclusão de texto), rembg (remoção de fundo para montagens).  
> * **Justificativa:** Cria peças visuais customizadas em escala para cada nicho de atuação sem gargalos de design manual, mantendo consistência estética profissional.

## **5\. Agente de Automação de DM e Vendas / SDR (DM Automation Agent)**

> * **Skills & Atribuições:** Recepção e triagem automática de mensagens diretas no Instagram, respostas a palavras-chave disparadas por posts, qualificação de leads com base na planilha de prospecção e condução de conversas para agendamento ou fechamento.  
> * **Bibliotecas & Ferramentas GitHub:** instagrapi / SDKs oficiais de Graph API da Meta (gestão de mensagens e webhooks), spaCy / Rasa NLU (classificação de intenção e extração de entidades em linguagem natural), gspread (atualização em tempo real do status do lead na planilha).  
> * **Justificativa:** Reduz o tempo de resposta a segundos, atende múltiplos interessados simultaneamente e mantém o funil comercial ativo 24/7 sem perda de oportunidades.