export type CaseItem = {
  slug: string;
  title: string;
  segment: string;
  type: "Sistema" | "Automação" | "Presença" | "Growth";
  summary: string;
  problem: string;
  solution: string;
  deliverables: string[];
  stack: string[];
  metrics: string[];
  cover: string;
};

export const cases: CaseItem[] = [
  {
    slug: "nova-rota-health",
    title: "Nova Rota Health",
    segment: "Clínicas multiunidade",
    type: "Sistema",
    summary:
      "Plataforma interna para centralizar leads, performance e dados clínicos em tempo real.",
    problem:
      "A operação cresceu rápido e os dados estavam espalhados entre planilhas, CRM e WhatsApp.",
    solution:
      "Criamos um hub único com painel de leads, automações e relatórios em tempo real.",
    deliverables: [
      "Dashboard de operações",
      "Integração com CRM",
      "Fluxos de atendimento automatizados",
      "Relatórios gerenciais",
    ],
    stack: ["Next.js", "Supabase", "Metabase", "WhatsApp API"],
    metrics: ["+41% leads tratados", "-32% tempo de resposta", "NPS 62 → 78"],
    cover: "/placeholders/case-placeholder.svg",
  },
  {
    slug: "solarflux-growth",
    title: "SolarFlux",
    segment: "Energia solar B2B",
    type: "Growth",
    summary:
      "Nova estrutura de aquisição com tracking e criativos premium para ciclo longo.",
    problem: "Campanhas sem atribuição clara e baixa previsibilidade de vendas.",
    solution:
      "Reposicionamos o funil, criamos tracking first-party e painéis de CAC/ROI.",
    deliverables: [
      "Setup de tracking",
      "Criativos e LPs",
      "Planejamento de mídia",
      "Dashboard de resultados",
    ],
    stack: ["GA4", "Meta Ads", "Looker Studio", "Tag Manager"],
    metrics: ["CAC -28%", "+3.1x ROI", "Pipeline +46%"],
    cover: "/placeholders/case-placeholder.svg",
  },
  {
    slug: "lumen-commerce",
    title: "Lumen Commerce",
    segment: "E-commerce lifestyle",
    type: "Presença",
    summary:
      "Nova presença digital com foco em conversão e experiência editorial.",
    problem:
      "Site antigo sem narrativa clara e queda de conversão em mobile.",
    solution:
      "Reestruturação completa com UX premium, velocidade e SEO técnico.",
    deliverables: [
      "Arquitetura de informação",
      "UI Kit editorial",
      "Otimização de performance",
      "SEO técnico",
    ],
    stack: ["Next.js", "Tailwind", "Vercel", "Stripe"],
    metrics: ["+52% conversão mobile", "Core Web Vitals 98", "+38% tempo no site"],
    cover: "/placeholders/case-placeholder.svg",
  },
  {
    slug: "atlas-automacao",
    title: "Atlas Serviços",
    segment: "Serviços corporativos",
    type: "Automação",
    summary:
      "Automação de atendimento e integração com CRM para times distribuídos.",
    problem: "Equipe perdendo leads por falta de respostas em tempo real.",
    solution:
      "Automatizamos fluxos no WhatsApp e conectamos CRM com alertas.",
    deliverables: [
      "Bot conversacional",
      "Integração CRM",
      "Alertas inteligentes",
      "Treinamento de equipe",
    ],
    stack: ["WhatsApp API", "n8n", "HubSpot", "Google Sheets"],
    metrics: ["-45% tempo de resposta", "+27% taxa de contato", "SLA 24h → 6h"],
    cover: "/placeholders/case-placeholder.svg",
  },
  {
    slug: "harbor-fintech",
    title: "Harbor Fintech",
    segment: "Finanças corporativas",
    type: "Sistema",
    summary:
      "Portal seguro para clientes com relatórios financeiros e onboarding digital.",
    problem:
      "Processos manuais de onboarding e entrega de relatórios sem padronização.",
    solution:
      "Portal com autenticação, uploads automatizados e métricas em tempo real.",
    deliverables: [
      "Portal autenticado",
      "Fluxo de onboarding",
      "Painel financeiro",
      "Infra de segurança",
    ],
    stack: ["Next.js", "Auth.js", "PostgreSQL", "AWS"],
    metrics: ["-60% tempo de onboarding", "+22% retenção", "Erro operacional -35%"],
    cover: "/placeholders/case-placeholder.svg",
  },
  {
    slug: "brisa-hospitality",
    title: "Brisa Hospitality",
    segment: "Hospitalidade premium",
    type: "Presença",
    summary:
      "Nova experiência digital para reservas e storytelling de marca.",
    problem: "Dependência de OTAs e baixa diferenciação visual.",
    solution:
      "Landing pages com storytelling, CTA direto e integrações de reserva.",
    deliverables: [
      "Storytelling visual",
      "Sistema de reservas",
      "Conteúdo editorial",
      "Automação de follow-up",
    ],
    stack: ["Next.js", "Contentful", "Stripe", "Notion API"],
    metrics: ["+44% reservas diretas", "ROI 3.6x", "+29% leads qualificados"],
    cover: "/placeholders/case-placeholder.svg",
  },
];
