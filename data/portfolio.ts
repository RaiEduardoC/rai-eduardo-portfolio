/**
 * Fonte única de verdade do portfólio.
 * Migrado de `Site - Portifólio/app.py` (PERFIL, EXPERIENCIAS, FORMACOES,
 * CURSOS, CERTIFICADOS_META, COMPETENCIAS, PROJETOS).
 *
 * Para atualizar o site basta editar este arquivo — nenhum componente
 * precisa ser alterado.
 */

export type Status = "Concluído" | "Cursando" | "Trancado";

export interface Perfil {
  nome: string;
  nomeCurto: string;
  cargo: string;
  cargoCurto: string;
  resumo: string;
  localizacao: string;
  email: string;
  telefone: string;
  whatsapp: string;
  linkedin: string;
  linkedinHandle: string;
  github: string;
  githubHandle: string;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  local: string;
  periodo: string;
  descricao: string;
  tags: string[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  status: Status;
  descricao: string;
}

export interface Curso {
  nome: string;
  escola: string;
  ano: string;
  status: Status;
}

export interface Certificado {
  arquivo: string;
  titulo: string;
  escola: string;
  ano: string;
  icone: string;
}

export interface Skill {
  nome: string;
  nivel: number;
}

export interface CategoriaCompetencia {
  categoria: string;
  skills: Skill[];
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  impacto: string;
}

export interface OutroTrabalho {
  titulo: string;
  descricao: string;
  tags: string[];
  /** Quando presente, exibe uma faixa de destaque no rodapé do card. */
  status?: string;
}

export interface Metrica {
  valor: string;
  label: string;
}

export interface SecaoNav {
  id: string;
  label: string;
  icone: string;
}

/* ------------------------------------------------------------------ */

export const PERFIL: Perfil = {
  nome: "Raí Eduardo Cardoso",
  nomeCurto: "Raí E. Cardoso",
  cargo: "Analista de Dados Sênior | Logística & BI",
  cargoCurto: "Analista de Dados",
  resumo:
    "Analista de Dados com foco em Business Intelligence, automação de " +
    "processos e desenvolvimento de soluções orientadas a dados. Atuo na " +
    "construção de KPIs, OKRs, modelagem de dados, processos ETL e " +
    "dashboards estratégicos que apoiam a tomada de decisão.",
  localizacao: "Maringá - PR, Brasil",
  email: "raieduardocardoso@gmail.com",
  telefone: "(44) 98447-3227",
  whatsapp: "5544984473227",
  linkedin: "https://www.linkedin.com/in/rai-eduardo-cardoso-356939259",
  linkedinHandle: "rai-eduardo-cardoso",
  github: "https://github.com/RaiEduardoC",
  githubHandle: "RaiEduardoC",
};

export const SECOES: SecaoNav[] = [
  { id: "inicio", label: "Início", icone: "/assets/home.png" },
  { id: "experiencia", label: "Experiência", icone: "/assets/suitcase.png" },
  { id: "formacao", label: "Formação", icone: "/assets/graduation.png" },
  { id: "certificados", label: "Certificados", icone: "/assets/graduation.png" },
  { id: "competencias", label: "Competências", icone: "/assets/flash.png" },
  { id: "projetos", label: "Projetos", icone: "/assets/start-up.png" },
  {
    id: "outros-trabalhos",
    label: "Outros Trabalhos",
    icone: "/assets/suitcase.png",
  },
  { id: "contato", label: "Contato", icone: "/assets/telephone.png" },
];

export const METRICAS: Metrica[] = [
  { valor: "3+", label: "Anos de Experiência" },
  { valor: "10+", label: "Cursos Concluídos" },
  { valor: "15%", label: "Aumento OTIF" },
  { valor: "0,8%", label: "Redução Custo Frete" },
];

export const EXPERIENCIAS: Experiencia[] = [
  {
    cargo: "Analista de Dados – Sênior (Logística)",
    empresa: "Arilog Soluções em Transporte",
    local: "Paiçandu - PR",
    periodo: "Maio/2025 — Atual",
    descricao:
      "Responsável pela análise de dados no setor de logística, com foco na " +
      "criação de KPIs e OKRs voltados à otimização de processos e controle " +
      "de custos. Desenvolvo análises estratégicas utilizando Oracle (PL/SQL), " +
      "Power BI, Excel, VBA e Python. Estruturo e automatizo rotinas " +
      "analíticas, criando painéis interativos e relatórios gerenciais.",
    tags: ["Oracle PL/SQL", "Power BI", "Python", "VBA", "KPIs", "OKRs"],
  },
  {
    cargo: "Assistente de Inteligência de Transporte",
    empresa: "Arilog Soluções em Transporte",
    local: "Paiçandu - PR",
    periodo: "Janeiro/2025 — Maio/2025",
    descricao:
      "Atuação na gestão e otimização de processos logísticos, com foco em " +
      "eficiência operacional e suporte à tomada de decisão. Responsável pela " +
      "formação de pagamento a terceiros, controle de coletas, embarques, " +
      "monitoramento de entregas e validação de custos de rotas.",
    tags: ["Logística", "Excel", "Power BI", "Custos", "Análise"],
  },
  {
    cargo: "Auxiliar de Transporte",
    empresa: "Arilu",
    local: "Maringá - PR",
    periodo: "Março/2024 — Dezembro/2024",
    descricao:
      "Atualização de custos de manutenção semanal de caminhões, criação de " +
      "planilhas em Excel e monitoramento de rotas e fluxo de entregas. Apoio " +
      "em rotinas administrativas como preparação de contratos e controle de " +
      "pagamentos.",
    tags: ["Excel", "Administrativo", "Logística", "Controle"],
  },
  {
    cargo: "Jovem Aprendiz",
    empresa: "Arilu",
    local: "Maringá - PR",
    periodo: "Fevereiro/2023 — Março/2024",
    descricao:
      "Atuação no setor de transporte e suporte, elaborando planilhas de " +
      "entregas, médias de caminhões e controle de manutenção da frota.",
    tags: ["Excel", "Suporte", "Planilhas"],
  },
];

export const FORMACOES: Formacao[] = [
  {
    curso: "Graduação em Ciência de Dados",
    instituicao: "Uninter",
    periodo: "2025 — 2028",
    status: "Cursando",
    descricao:
      "Modelagem de banco de dados, ETL/ELT, APIs, Aprendizado de Máquina, " +
      "Big Data, Cloud, Visualização e BI, KPIs e storytelling.",
  },
  {
    curso: "Técnico em Análise e Desenvolvimento de Sistemas",
    instituicao: "Unicesumar",
    periodo: "Concluído",
    status: "Concluído",
    descricao:
      "Lógica de programação, algoritmos, sistemas operacionais, POO, bancos " +
      "de dados e engenharia de software.",
  },
  {
    curso: "Engenharia de Software",
    instituicao: "Unicesumar",
    periodo: "2025 — 2026",
    status: "Trancado",
    descricao:
      "Fundamentos de computação, programação, lógica, sistemas operacionais, " +
      "análise de dados, redes e gestão de software.",
  },
  {
    curso: "Ensino Médio",
    instituicao: "Colégio da Polícia Militar - Maringá",
    periodo: "2018 — 2024",
    status: "Concluído",
    descricao: "Formação completa no ensino médio.",
  },
];

export const CURSOS: Curso[] = [
  {
    nome: "SQL Avançado (Oracle, SSMS, MySQL)",
    escola: "Hashtag Treinamentos",
    ano: "2025",
    status: "Concluído",
  },
  {
    nome: "Power BI Avançado",
    escola: "Eduliv School Tec",
    ano: "2023–2024",
    status: "Concluído",
  },
  {
    nome: "Excel e VBA Avançado",
    escola: "Eduliv School Tec",
    ano: "2022–2024",
    status: "Concluído",
  },
  {
    nome: "Python (Pandas, APIs, Automação)",
    escola: "Hashtag Treinamentos",
    ano: "2025",
    status: "Cursando",
  },
  {
    nome: "Power Automate",
    escola: "Hashtag Treinamentos",
    ano: "2025–2026",
    status: "Cursando",
  },
  {
    nome: "Desenvolvimento IA e OpenClaw",
    escola: "Hashtag Treinamentos",
    ano: "2026",
    status: "Cursando",
  },
  {
    nome: "Data Science (Análise, ETL, SQL, BI)",
    escola: "Alex Lage Data Science / Anhanguera",
    ano: "—",
    status: "Concluído",
  },
];

/**
 * No Streamlit os PDFs eram lidos do disco em runtime. Aqui eles são
 * arquivos estáticos em `public/certificados/` — a Vercel os serve
 * diretamente via CDN, sem servidor Python no meio.
 */
export const CERTIFICADOS: Certificado[] = [
  {
    arquivo: "/certificados/sql-extremo.pdf",
    titulo: "SQL Extremo — Avançado",
    escola: "Eduliv School Tec",
    ano: "2025",
    icone: "/assets/sql.png",
  },
  {
    arquivo: "/certificados/plsql-oracle.pdf",
    titulo: "PL/SQL Oracle",
    escola: "Udemy",
    ano: "2025",
    icone: "/assets/oracle.png",
  },
  {
    arquivo: "/certificados/analista-dados-power-bi.pdf",
    titulo: "Analista de Dados com Power BI",
    escola: "Eduliv School Tec",
    ano: "2024",
    icone: "/assets/power-bi.png",
  },
  {
    arquivo: "/certificados/excel-extremo.pdf",
    titulo: "Excel Extremo — Avançado",
    escola: "Eduliv School Tec",
    ano: "2024",
    icone: "/assets/excel.png",
  },
  {
    arquivo: "/certificados/python-extremo.pdf",
    titulo: "Python Extremo",
    escola: "Eduliv School Tec",
    ano: "2025",
    icone: "/assets/python.png",
  },
  {
    arquivo: "/certificados/git-github.pdf",
    titulo: "Git & GitHub",
    escola: "Hashtag Treinamentos",
    ano: "2025",
    icone: "/assets/github.png",
  },
  {
    arquivo: "/certificados/data-science-anhanguera.pdf",
    titulo: "Data Science — Análise, ETL & BI",
    escola: "Anhanguera",
    ano: "2025",
    icone: "/assets/anhanguera.png",
  },
  {
    arquivo: "/certificados/tecnico-ads-unicesumar.pdf",
    titulo: "Técnico em Análise e Desenvolvimento de Sistemas",
    escola: "Unicesumar",
    ano: "Concluído",
    icone: "/assets/unicesumar.png",
  },
];

export const COMPETENCIAS: CategoriaCompetencia[] = [
  {
    categoria: "Linguagens & Bancos de Dados",
    skills: [
      { nome: "SQL (Oracle, SQL Server, MySQL)", nivel: 100 },
      { nome: "Python (Pandas, Streamlit, APIs)", nivel: 85 },
      { nome: "VBA", nivel: 100 },
      { nome: "DAX", nivel: 100 },
    ],
  },
  {
    categoria: "Business Intelligence",
    skills: [
      { nome: "Power BI", nivel: 100 },
      { nome: "Excel Avançado", nivel: 100 },
      { nome: "Modelagem de Dados", nivel: 100 },
      { nome: "Storytelling com Dados", nivel: 100 },
    ],
  },
  {
    categoria: "Engenharia de Dados & Automação",
    skills: [
      { nome: "ETL / Pipelines", nivel: 100 },
      { nome: "Power Automate", nivel: 100 },
      { nome: "Git & GitHub", nivel: 100 },
      { nome: "Integração via APIs", nivel: 100 },
    ],
  },
  {
    categoria: "Inteligência Artificial",
    skills: [
      { nome: "Engenharia de Prompts", nivel: 85 },
      { nome: "Agentes Autônomos", nivel: 75 },
      { nome: "OpenClaw / Claude Code", nivel: 78 },
    ],
  },
];

export const PROJETOS: Projeto[] = [
  {
    titulo: "Portal Corporativo em Python + Streamlit",
    descricao:
      "Plataforma corporativa completa com autenticação de usuários, controle " +
      "de acesso por permissões, integração com Google Sheets e Google Drive, " +
      "exportação de relatórios e monitoramento de indicadores em tempo real.",
    tecnologias: ["Python", "Streamlit", "Google APIs", "Pandas"],
    impacto: "Centralização de processos e ganho de produtividade.",
  },
  {
    titulo: "Otimização de Indicadores Logísticos",
    descricao:
      "Análise estratégica de dados para identificar pontos de melhoria em " +
      "rotas e custos. Construção de KPIs e OKRs voltados a custo de frete, " +
      "OTIF e eficiência operacional.",
    tecnologias: ["Power BI", "SQL", "DAX", "Excel"],
    impacto: "Redução de 0,8% nos custos de frete e +15% no OTIF.",
  },
  {
    titulo: "Pipelines ETL e Dashboards Executivos",
    descricao:
      "Construção de processos ETL para abastecimento automático de dashboards " +
      "gerenciais. Modelagem em estrela, tratamento via Power Query e " +
      "relacionamentos otimizados.",
    tecnologias: ["Power BI", "Power Query", "SQL", "Python"],
    impacto: "Automação completa de relatórios gerenciais.",
  },
  {
    titulo: "Automação de Processos Corporativos",
    descricao:
      "Desenvolvimento de fluxos automatizados utilizando Power Automate, VBA " +
      "e Python, integrando aplicativos e serviços corporativos.",
    tecnologias: ["Power Automate", "VBA", "Python", "APIs"],
    impacto: "Redução significativa de tarefas manuais.",
  },
  {
    titulo: "Aplicação de IA em Processos de Negócio",
    descricao:
      "Criação de agentes especializados, engenharia de prompts e orquestração " +
      "multiagente com Claude Code e OpenClaw para automação inteligente de " +
      "tarefas corporativas.",
    tecnologias: ["Claude Code", "OpenClaw", "Python", "APIs"],
    impacto: "Maior produtividade e respostas inteligentes.",
  },
  {
    titulo: "Governança e Versionamento de Dados",
    descricao:
      "Estruturação, padronização e documentação de bases de dados do setor " +
      "logístico. Organização de repositórios e controle de versões com " +
      "Git/GitHub.",
    tecnologias: ["Git", "GitHub", "SQL", "Documentação"],
    impacto: "Confiabilidade e rastreabilidade dos dados.",
  },
];

/**
 * Atuações fora do vínculo CLT principal.
 *
 * As descrições abaixo são propositalmente enxutas — descrevem apenas o que
 * o título já anuncia. Sinta-se à vontade para detalhar (plataformas usadas,
 * clientes atendidos, resultados) editando os campos `descricao` e `tags`.
 */
export const OUTROS_TRABALHOS: OutroTrabalho[] = [
  {
    titulo: "Empreendedor de Sistemas e Plataformas E-commerce",
    descricao:
      "Atuação própria no desenvolvimento e na gestão de sistemas e " +
      "plataformas de e-commerce, unindo tecnologia e visão de negócio.",
    tags: ["E-commerce", "Sistemas", "Empreendedorismo", "Gestão"],
  },
  {
    titulo: "Disponibilidade para atuar como PJ",
    descricao:
      "Aberto a atuar no modelo Pessoa Jurídica em projetos de dados, " +
      "Business Intelligence, automação e desenvolvimento de sistemas.",
    tags: ["PJ", "Projetos", "Consultoria", "Freelance"],
    status: "Disponível para novos contratos",
  },
];

/** Rótulo qualitativo — mesma regra do `_nivel_label` do app.py. */
export function nivelLabel(nivel: number): string {
  if (nivel >= 95) return "Especialista";
  if (nivel >= 80) return "Avançado";
  if (nivel >= 60) return "Intermediário";
  return "Em evolução";
}