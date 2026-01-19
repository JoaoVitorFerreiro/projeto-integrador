import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'grupo-01',
    groupNumber: 1,
    name: 'Sistema Gerenciador de Estacionamento',
    description: 'Solução inteligente para gestão de estacionamentos com integração IoT. Utiliza sensores, LEDs e Arduino com controle de motor para automação completa. Monitora vagas em tempo real, controla cancelas automaticamente e oferece relatórios detalhados de ocupação.',
    image: '/Grupo01.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Tiago de Arruda Oliveira',
        role: 'Líder',
      },
      {
        name: 'Luciano Augusto dos Santos Lins Filho',
        role: 'Backend',
      },
      {
        name: 'Vitória Conceição de Melo Santos',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React + TypeScript',
      backend: 'Node.js',
      database: 'PostgreSQL',
    },
    liveUrl: 'https://grupo01projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-02',
    groupNumber: 2,
    name: 'Sistema de Estoque Farmacêutico',
    description: 'Plataforma completa para gerenciamento farmacêutico hospitalar. Controla entrada e saída de medicamentos com diferentes níveis de acesso para médicos, farmacêuticos e enfermeiros. Inclui rastreamento de lotes, alertas de vencimento e relatórios de consumo.',
    image: '/Grupo02.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Hualana Dar\'c Ferreira Nunes',
        role: 'Líder',
      },
      {
        name: 'Grazielle Lima Fonseca',
        role: 'Backend',
      },
      {
        name: 'Christian Wendel de Carvalho Araújo',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React + TypeScript',
      backend: 'Node.js',
      database: 'MongoDB',
    },
    liveUrl: 'https://grupo02projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-04',
    groupNumber: 4,
    name: 'Odonto Prime - Clínica Odontológica',
    description: 'Sistema completo para clínicas odontológicas com CRM integrado. Gerencia venda de planos odontológicos, agendamento inteligente de consultas, histórico de pacientes e controle financeiro. Interface moderna para dentistas e pacientes.',
    image: '/Grupo04.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Esther Chagas da Silva',
        role: 'Líder',
      },
      {
        name: 'Debora Santos Silva',
        role: 'Backend',
      },
      {
        name: 'Pedro Henrique Rodrigues Xavier',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'Angular',
      backend: 'Spring Boot',
      database: 'PostgreSQL',
    },
    liveUrl: 'https://grupo04projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-05',
    groupNumber: 5,
    name: 'Mania Cookie - E-commerce de Cookies',
    description: 'Plataforma de e-commerce especializada em confeitaria artesanal. Sistema completo de vendas online com catálogo de produtos, carrinho de compras, gestão de pedidos e entregas. Inclui CRM para fidelização de clientes e controle de estoque de ingredientes.',
    image: '/Grupo05.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Miguel Ribeiro Vão',
        role: 'Líder',
      },
      {
        name: 'Kennedy Ribeiro Flávio',
        role: 'Backend',
      },
      {
        name: 'Igor Negrão de Oliveira Mamede',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React',
      backend: 'Node.js',
      database: 'MongoDB',
    },
    liveUrl: 'https://grupo05projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-07',
    groupNumber: 7,
    name: 'Sistema de Gerenciamento de EPI',
    description: 'Solução profissional para gestão de Equipamentos de Proteção Individual. Controla vencimentos, organiza distribuição por funcionário, gera alertas automáticos e mantém histórico completo de entregas. Ideal para empresas que priorizam segurança do trabalho.',
    image: '/Grupo07.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Micaeli Alves de Sá',
        role: 'Líder',
      },
      {
        name: 'Andrey Corsi MG Guedes de Moura',
        role: 'Backend',
      },
      {
        name: 'Abner Batista Rodrigues Feitosa',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React',
      backend: 'Python + FastAPI',
      database: 'PostgreSQL',
      cloud: 'Docker',
    },
    liveUrl: 'https://grupo07projeto20252.escolatecnicaadelia.info',
    ranking: 1, // Campeão
  },
  {
    id: 'grupo-08',
    groupNumber: 8,
    name: 'CapsuBel - E-commerce de Encapsulados',
    description: 'Loja virtual especializada em produtos capilares femininos. Oferece cápsulas de tratamento capilar com sistema de vendas online, gerenciamento de estoque e CRM completo. Inclui sistema de recomendações personalizadas e programa de fidelidade.',
    image: '/Grupo08.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Gabriel Barreto Santos',
        role: 'Líder',
      },
      {
        name: 'Matheus Policarpo Borges dos Santos',
        role: 'Backend',
      },
      {
        name: 'Samir El Kadissi',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'Vue.js',
      backend: 'Node.js',
      database: 'MySQL',
    },
    liveUrl: 'https://grupo08projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-09',
    groupNumber: 9,
    name: 'Unique - E-commerce de Moda Feminina',
    description: 'Plataforma moderna de vendas de roupas femininas. Sistema completo com catálogo virtual, gestão de estoque por tamanho e cor, controle de vendas e CRM integrado. Interface elegante com filtros avançados e sistema de avaliações de produtos.',
    image: '/Grupo09.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Daniel Silva Ferreira',
        role: 'Líder',
      },
      {
        name: 'Kelvin Iarley Aguiar Bezerra',
        role: 'Backend',
      },
      {
        name: 'Davi Freitas da Silva',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React',
      backend: 'Django',
      database: 'PostgreSQL',
    },
    liveUrl: 'https://grupo09projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-10',
    groupNumber: 10,
    name: 'Sistema de Depósito de Medicamentos',
    description: 'Sistema avançado para controle de depósito farmacêutico. Gerencia entrada e saída de medicamentos com controle de acesso por perfil (médicos, farmacêuticos, enfermeiros). Oferece rastreabilidade completa, alertas de validade e relatórios de movimentação.',
    image: '/Grupo10.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Nicole Alves Vale',
        role: 'Líder',
      },
      {
        name: 'Bruno Henrique Agria Leite',
        role: 'Backend',
      },
      {
        name: 'Odair Eduardo Ferreira da Silva',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'Angular',
      backend: 'NestJS',
      database: 'MongoDB',
    },
    liveUrl: 'https://grupo10projeto20252.escolatecnicaadelia.info',
  },
  {
    id: 'grupo-11',
    groupNumber: 11,
    name: 'Sistema Farmacêutico Hospitalar',
    description: 'Plataforma robusta para gestão farmacêutica em ambiente hospitalar. Controla estoque de medicamentos, gerencia prescrições médicas e medicamentos controlados. Sistema de autorizações por perfil, rastreamento de lotes e geração de relatórios gerenciais.',
    image: '/Grupo11.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Caio dos Santos Serra',
        role: 'Líder',
      },
      {
        name: 'Henrique Alves de Souza',
        role: 'Backend',
      },
      {
        name: 'Pedro Henrique de Silva Farias',
        role: 'Frontend',
      },
    ],
    stack: {
      frontend: 'React',
      backend: 'Express',
      database: 'PostgreSQL',
    },
    liveUrl: 'https://grupo11projeto20252.escolatecnicaadelia.info',
    ranking: 2, // Vice-campeão
  },
  {
    id: 'grupo-12',
    groupNumber: 12,
    name: 'Sistema de Segurança do Trabalho',
    description: 'Solução completa para gestão de segurança ocupacional. Controla EPIs, gerencia treinamentos obrigatórios, realiza análise de riscos e mantém documentação de segurança. Sistema de alertas para renovações e vencimentos, garantindo conformidade com normas regulamentadoras.',
    image: '/Grupo12.png',
    technologies: ['React', 'Node.js'],
    students: [
      {
        name: 'Jonatas Meio Fonseca da Luz',
        role: 'Líder',
      },
      {
        name: 'Guilherme Machado Segovia',
        role: 'Backend',
      },
      {
        name: 'Daniel Nascimento dos Santos',
        role: 'Frontend',
      },
      {
        name: 'Murilo Cavalcante de Sousa',
        role: 'FullStack',
      },
    ],
    stack: {
      frontend: 'Next.js',
      backend: 'Node.js',
      database: 'PostgreSQL',
      cloud: 'Docker',
    },
    liveUrl: 'https://grupo12projeto20252.escolatecnicaadelia.info',
  },
];

// Função auxiliar para obter projetos por ranking
export const getTopProjects = () => {
  return projects
    .filter(p => p.ranking)
    .sort((a, b) => (a.ranking || 0) - (b.ranking || 0));
};

// Função auxiliar para obter todos os projetos ordenados por grupo
export const getAllProjects = () => {
  return projects.sort((a, b) => a.groupNumber - b.groupNumber);
};
