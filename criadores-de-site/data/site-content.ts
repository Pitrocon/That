export interface NicheShowcaseItem {
  id: string;
  badgeSeed: string;
  nichoRamo: string;
  nomeExemplo: string;
  instagramExemplo: string;
  estiloVisual: string;
  coresSugeridas: string;
  estruturaSugerida: string;
  observacaoOriginal: string;
  resumoProposta: string;
  accentHex: string;
  swatches: readonly string[];
  heroPreviewHeadline: string;
  heroPreviewSub: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  modulos: readonly string[];
}

export interface BentoFeature {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlight: string;
  span: "wide" | "normal";
}

export interface EngineeringMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProcessStep {
  wave: string;
  agent: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_BRAND = {
  name: "That Studio",
  tagline: "Engenharia Web Multi-Nicho",
  whatsappPlaceholderE164: "5511999990000",
  contactEmailPlaceholder: "contato@exemplo.local",
  seedNotice:
    "[MODELO DEMONSTRATIVO / SEED] — Exemplos e contatos ilustrativos extraídos da planilha de referência para demonstração da arquitetura.",
} as const;

export const NAV_LINKS = [
  { href: "#vitrine", label: "Vitrine" },
  { href: "#bento", label: "Arquitetura" },
  { href: "#nichos", label: "Nichos" },
  { href: "#processo", label: "Método" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#orcamento", label: "Solicitar" },
] as const;

export const ENGINEERING_METRICS: readonly EngineeringMetric[] = [
  {
    label: "Arquitetura",
    value: "App Router + TS",
    detail: "Tipagem estrita e componentes modulares por nicho",
  },
  {
    label: "Acessibilidade",
    value: "WCAG AA",
    detail: "Contraste >= 4.5:1, foco visível e pausa de animação",
  },
  {
    label: "Contrato de Leads",
    value: "11 Colunas + Zod",
    detail: "Sanitização anti-injeção pronta para planilha comercial",
  },
];

export const BENTO_FEATURES: readonly BentoFeature[] = [
  {
    id: "estetica-pro",
    eyebrow: "Apple Pro Dark",
    title: "Contraste cirúrgico. Zero ruído visual.",
    description:
      "Superfícies preto obsidiana e grafite titânio com hierarquia tipográfica rígida para destacar portfólio, serviços e conversão.",
    highlight: "#000000 -> #121216 -> #f5f5f7",
    span: "wide",
  },
  {
    id: "diversidade-nicho",
    eyebrow: "Anti-Template Genérico",
    title: "Cada nicho ganha identidade própria.",
    description:
      "Tokens semânticos independentes adaptam paleta, acento e seções para tatuadores, bandas, clínicas e negócios locais.",
    highlight: "Tokens dinâmicos + Preview interativo",
    span: "normal",
  },
  {
    id: "seo-tecnico",
    eyebrow: "Indexação Nativa",
    title: "SEO técnico e Schema.org desde a primeira linha.",
    description:
      "HTML5 semântico, metadados OpenGraph/Twitter, JSON-LD estruturado, sitemap.xml e robots.txt integrados ao build.",
    highlight: "JSON-LD + Sitemap + Robots",
    span: "normal",
  },
  {
    id: "captura-segura",
    eyebrow: "Engenharia de Conversão",
    title: "Captura validada com Zod, honeypot e WhatsApp UTM.",
    description:
      "Endpoint server-side com rate-limit, neutralização de fórmulas para planilhas e encaminhamento rastreável.",
    highlight: "POST /api/leads + wa.me UTM",
    span: "wide",
  },
];

/**
 * Modelos demonstrativos baseados nas 3 linhas de Context/modelo-planilha-leads.csv.
 */
export const NICHE_SHOWCASE_ITEMS: readonly NicheShowcaseItem[] = [
  {
    id: "tattoo",
    badgeSeed: "[MODELO DEMONSTRATIVO / SEED — ID 1]",
    nichoRamo: "Estúdio de Tatuagem",
    nomeExemplo: "Exemplo Ink Studio",
    instagramExemplo: "@exemploink",
    estiloVisual: "Apple Dark adaptado para Estúdio Autoral (Dark / Industrial)",
    coresSugeridas: "Preto / Vermelho / Grafite Titânio",
    estruturaSugerida: "Galeria Dinâmica + Agendamento Online",
    observacaoOriginal:
      "Cenário típico mapeado na planilha: alto engajamento nos stories, mas sem link de site na bio.",
    resumoProposta:
      "Transforma visitantes do Instagram em pedidos de orçamento qualificados com portfólio filtrado por estilo e envio direto para WhatsApp.",
    accentHex: "#ef4444",
    swatches: ["#000000", "#121216", "#ef4444", "#f5f5f7"],
    heroPreviewHeadline: "Traço autoral em galeria de alto contraste.",
    heroPreviewSub:
      "Portfólio curado por estilo, guia de biossegurança e agendamento de orçamento sem atrito.",
    primaryCtaLabel: "Solicitar orçamento",
    secondaryCtaLabel: "Ver estilos",
    modulos: [
      "Hero editorial escuro com foco em fotografia de pele",
      "Galeria filtrável (Blackwork, Realismo, Fine Line)",
      "Guia pré e pós-sessão + FAQ anti-objeção",
      "Formulário com tamanho/região + WhatsApp rastreável",
    ],
  },
  {
    id: "music",
    badgeSeed: "[MODELO DEMONSTRATIVO / SEED — ID 2]",
    nichoRamo: "Músico / Banda",
    nomeExemplo: "Banda Exemplo Rock",
    instagramExemplo: "@bandaexemplorock",
    estiloVisual: "Apple Dark adaptado para Lançamento & Turnê (Vibrante / Neon)",
    coresSugeridas: "Preto / Roxo Elétrico / Neon / Titânio",
    estruturaSugerida: "One-Page + Player de Áudio + Agenda de Shows",
    observacaoOriginal:
      "Cenário típico mapeado na planilha: lançamento de álbum novo com agenda dispersa em redes sociais.",
    resumoProposta:
      "Centraliza pré-save, player de faixas, datas de turnê, press kit para contratantes e canal direto de booking.",
    accentHex: "#a855f7",
    swatches: ["#000000", "#16161b", "#a855f7", "#22d3ee"],
    heroPreviewHeadline: "Novo álbum em vitrine cinematográfica.",
    heroPreviewSub:
      "Player integrado, agenda interativa de shows e press kit profissional para festivais e casas.",
    primaryCtaLabel: "Ouvir lançamento",
    secondaryCtaLabel: "Contratar show",
    modulos: [
      "Hero com destaque de álbum/single e links de streaming",
      "Agenda de datas com status de ingressos por cidade",
      "Press kit técnico (rider, release e fotos em alta)",
      "Formulário dedicado para booking e imprensa",
    ],
  },
  {
    id: "aesthetics",
    badgeSeed: "[MODELO DEMONSTRATIVO / SEED — ID 3]",
    nichoRamo: "Clínica de Estética",
    nomeExemplo: "Estética Renova",
    instagramExemplo: "@esteticarenova_ex",
    estiloVisual: "Apple Dark adaptado para Sofisticação Clínica (Titânio / Sálvia)",
    coresSugeridas: "Grafite Escuro / Verde Sálvia / Bege Creme",
    estruturaSugerida: "Multi-Page + Catálogo de Procedimentos + Botão WhatsApp",
    observacaoOriginal:
      "Cenário típico mapeado na planilha: clínica anunciando no Instagram precisando elevar autoridade e filtro de avaliação.",
    resumoProposta:
      "Combina sobriedade médica e acolhimento visual, detalhando protocolos, dúvidas frequentes e avaliação inicial rápida.",
    accentHex: "#84a98c",
    swatches: ["#0a0a0c", "#16161b", "#84a98c", "#f5f5f7"],
    heroPreviewHeadline: "Protocolos estéticos com precisão e calma visual.",
    heroPreviewSub:
      "Catálogo transparente de procedimentos, registro técnico da equipe e agendamento de avaliação.",
    primaryCtaLabel: "Agendar avaliação",
    secondaryCtaLabel: "Explorar protocolos",
    modulos: [
      "Hero sereno com proposta clara de avaliação",
      "Catálogo de procedimentos com indicação e duração",
      "Credenciais da equipe e estrutura da clínica",
      "Agendamento rápido via formulário e WhatsApp",
    ],
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    wave: "01",
    agent: "site-pesquisa-nichos",
    title: "Briefing Visual & Conversão",
    description:
      "Mapeia o comportamento do comprador do nicho e define paleta, tipografia e dores reais antes de escrever código.",
  },
  {
    wave: "02",
    agent: "site-arquitetura",
    title: "Rotas, Schemas & Segurança",
    description:
      "Estrutura App Router, contratos Zod, proteção contra formula injection em planilhas, honeypot e rate-limit.",
  },
  {
    wave: "03",
    agent: "site-frontend + site-design-seo",
    title: "UI Modular, WCAG & SEO Técnico",
    description:
      "Implementa seções responsivas mobile-first com tokens próprios, JSON-LD Schema.org, OpenGraph e sitemap.",
  },
  {
    wave: "04",
    agent: "site-qa",
    title: "Portão Factual de Qualidade",
    description:
      "Executa typecheck, lint, testes automatizados e build de produção, registrando exatamente o que ainda exige checagem externa.",
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Os sites entregues ficam todos com a mesma cara desta vitrine?",
    answer:
      "Não. Esta página aplica o arquétipo Apple Pro Dark como vitrine institucional, mas o steering de diversidade visual exige que cada nicho receba paleta, tipografia e ritmo de seções próprios.",
  },
  {
    question: "Como funciona a integração com a planilha de prospecção?",
    answer:
      "O endpoint POST /api/leads valida os dados com Zod no servidor, neutraliza caracteres perigosos de fórmula (=, +, -, @) e devolve o registro exato nas 11 colunas de Context/modelo-planilha-leads.csv.",
  },
  {
    question: "Os contatos e marcas mostrados nos 3 modelos de nicho são reais?",
    answer:
      "Não. São dados demonstrativos [MODELO DEMONSTRATIVO / SEED] derivados da planilha modelo do projeto para ilustrar a adaptação visual e estrutural por segmento.",
  },
  {
    question: "O que é validado antes de publicar um projeto em produção?",
    answer:
      "TypeScript estrito, lint, testes unitários, build de produção, metadados SEO, Schema.org e revisão humana/navegador real em mobile e desktop antes do lançamento definitivo.",
  },
];
