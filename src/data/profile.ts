/**
 * profile.ts — single source of truth for all personal content.
 * Edit here to update the landing page copy & data.
 */

export const profile = {
  name: "Guilherme Nery Calixto",
  shortName: "Guilherme Nery",
  age: 18,
  role: "Vendas · Sistemas Internos · Aplicações com IA",
  tagline: "Sales, Systems & AI",
  location: "Brasil",

  hero: {
    kicker: "Builder jovem em evolução",
    headline: "Sales, Systems & AI",
    subheadline:
      "18 anos. Construindo sistemas internos, estudando fundamentos e moldando uma jornada tech de longo prazo.",
    description:
      "Do dado de marketplace ao produto digital — conectando vendas, IA, dados e problemas reais de negócio.",
    marquee: [
      "Sales",
      "Systems",
      "AI",
      "LLMs",
      "Automations",
      "Data",
      "Marketplaces",
      "Builder",
    ],
    ctas: [
      { label: "Ver trajetória", href: "#trajetoria", variant: "primary" as const },
      { label: "Conhecer projetos", href: "#projeto", variant: "ghost" as const },
      { label: "Entrar em contato", href: "#contato", variant: "ghost" as const },
    ],
  },

  // 2 — Identity quick cards
  identity: [
    {
      title: "Desenvolvedor ERP",
      subtitle: "Vctec",
      detail: "Sistema interno que resolve problemas reais da operação.",
      accent: "amber" as const,
    },
    {
      title: "ADS — 2º semestre",
      subtitle: "Análise e Desenvolvimento de Sistemas",
      detail: "Fundamentos computacionais em construção contínua.",
      accent: "violet" as const,
    },
    {
      title: "Node.js · APIs · LLMs",
      subtitle: "Stack atual",
      detail: "JavaScript, integrações, automações e aplicações com IA.",
      accent: "teal" as const,
    },
    {
      title: "Marketplaces",
      subtitle: "Mercado Livre · Shopee · Bling",
      detail: "Dados convertidos em cálculo, decisão e automação.",
      accent: "amber" as const,
    },
    {
      title: "Sales + Marketing + Data",
      subtitle: "Visão de negócio",
      detail: "Tecnologia ancorada em resultado e mercado.",
      accent: "violet" as const,
    },
  ],

  // 3 — Professional walkthrough / timeline
  timeline: [
    {
      year: "2026",
      tag: "O início",
      title: "Imersão tech começou",
      body: "Início de 2026: nasce uma grande paixão pelo mundo tech. O primeiro passo de uma imersão sem previsão de fim.",
    },
    {
      year: "2026",
      tag: "Vctec",
      title: "Entrada e atuação na Vctec",
      body: "Atuação direta em vendas, tecnologia e na resolução de problemas internos da empresa.",
    },
    {
      year: "2026",
      tag: "Produto",
      title: "Desenvolvimento do ERP interno",
      body: "Construção de um ERP voltado para os problemas reais da operação — da dor ao sistema.",
    },
    {
      year: "2026",
      tag: "Dados",
      title: "Levantamentos financeiros & marketplace",
      body: "Cálculos orientados por dados de Mercado Livre, Shopee e Bling para decisões internas.",
    },
    {
      year: "2026",
      tag: "IA",
      title: "Evolução em IA, APIs e automações",
      body: "Integração de LLMs, criação de automações e estruturação de aplicações.",
    },
    {
      year: "Próximo",
      tag: "Missão",
      title: "Soluções com impacto social",
      body: "O objetivo de longo prazo: tecnologia aplicada ao bem-estar da sociedade.",
    },
  ],

  // 4 — Featured project (case study)
  project: {
    name: "ERP Interno — Vctec",
    subtitle: "Case study",
    problem:
      "Processos internos dispersos, dados financeiros sem consolidação e integração frágil entre marketplaces.",
    solution:
      "Um ERP interno que centraliza, calcula e automatiza — transformando dados brutos em decisões claras.",
    stack: ["Node.js", "JavaScript", "Docker Compose", "Git", "APIs"],
    context: ["Mercado Livre", "Shopee", "Bling"],
    impact: [
      "Organização dos processos internos",
      "Levantamentos financeiros confiáveis",
      "Análise de dados de marketplace",
      "Automação de decisões internas",
    ],
  },

  // 5 — Skills matrix
  skills: [
    {
      group: "Tech",
      accent: "amber" as const,
      items: ["Node.js", "JavaScript", "APIs", "Docker Compose", "Git"],
    },
    {
      group: "AI",
      accent: "violet" as const,
      items: ["LLMs", "AI Applications", "Automações", "Prompts", "Integração via APIs"],
    },
    {
      group: "Business",
      accent: "teal" as const,
      items: ["Sales", "Marketing", "Análise de mercado", "Marketplace data"],
    },
    {
      group: "Foundation",
      accent: "amber" as const,
      items: ["Algoritmos", "Estrutura de dados", "Ciência da Computação", "Cyber Security"],
    },
  ],

  // 6 — Learning system
  learning: {
    intro:
      "Rotina intensa, estudo constante e sem previsão de fim. Aprender é o sistema operacional.",
    items: [
      "Inglês",
      "Fundamentos computacionais",
      "Ciência da Computação",
      "Algoritmos",
      "Estrutura de dados",
      "AI / LLMs",
      "Cyber Security",
      "Administração",
      "Vendas",
      "Análise de dados",
      "Análise de mercado",
      "Estrutura de aplicações avançadas",
    ],
  },

  // 7 — Personal DNA
  personal: {
    music: {
      title: "Som",
      vibe: "Chill vibes · Jazz · Blues · Classic Rock · anos 70",
      note: "Música, teoria musical e a arte da melodia — rehearsal de composições clássicas.",
      artists: [
        "B.B. King",
        "George Harrison",
        "Eric Clapton",
        "Eric Johnson",
        "John Lennon",
        "Paul McCartney",
        "Ringo Starr",
        "Don Felder",
      ],
    },
    sports: {
      title: "Quadra",
      vibe: "Basquete por hobby · NBA sempre ligada",
      note: "Futebol e esportes em geral também entram no rolê.",
      teams: ["Charlotte Hornets", "Milwaukee Bucks"],
    },
  },

  // 8 — Vision / mission
  vision: {
    kicker: "Vision · Mission",
    statement:
      "Um dia quero participar ou criar uma aplicação diretamente ligada ao bem-estar da sociedade.",
    manifesto:
      "Tecnologia não é o fim — é a alavanca. Vendas, dados, IA e sistemas existem para resolver problemas reais. A imersão começou em 2026. A missão é de longo prazo.",
  },

  // 9 — Final CTA / contact
  contact: {
    headline: "Vamos construir algo?",
    subtext: "Aberto a conversas sobre tecnologia, IA, vendas e produtos que importam.",
    links: [
      { label: "GitHub", href: "https://github.com/", handle: "@guilherme", icon: "github" as const },
      { label: "LinkedIn", href: "https://linkedin.com/", handle: "Guilherme Nery", icon: "linkedin" as const },
      { label: "Email", href: "mailto:guilhermenerycalixto18@gmail.com", handle: "guilhermenerycalixto18@gmail.com", icon: "mail" as const },
      { label: "WhatsApp", href: "https://wa.me/", handle: "Mensagem direta", icon: "whatsapp" as const },
    ],
  },

  nav: [
    { label: "Identidade", href: "#identidade" },
    { label: "Trajetória", href: "#trajetoria" },
    { label: "Projeto", href: "#projeto" },
    { label: "Skills", href: "#skills" },
    { label: "DNA", href: "#dna" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export type Accent = "amber" | "violet" | "teal";
