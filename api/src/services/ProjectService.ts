import { Project, Student, Stack } from "../models/Project";

export class ProjectService {
  lista: Project[] = [];

  constructor() {
    // Inicializa com projetos de exemplo
    this.inicializarProjetos();
  }

  private inicializarProjetos(): void {
    const projetos = [
      {
        name: "EduConnect - Sistema de Gestão Escolar",
        description: "Plataforma web completa para gestão de escolas, incluindo controle de notas, frequência, comunicação com pais e relatórios acadêmicos.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
        stack: {
          frontend: "React",
          backend: "Node.js + Express",
          database: "PostgreSQL",
          cloud: "Vercel"
        },
        githubUrl: "https://github.com/escola-adelia/educonnect",
        liveUrl: "https://educonnect.vercel.app",
        students: [
          {
            name: "Ana Carolina Silva",
            photo: "https://i.pravatar.cc/150?img=1",
            github: "https://github.com/anacarolina",
            linkedin: "https://linkedin.com/in/anacarolina"
          },
          {
            name: "Bruno Henrique Santos",
            photo: "https://i.pravatar.cc/150?img=12",
            github: "https://github.com/brunohsantos",
            linkedin: "https://linkedin.com/in/brunohsantos"
          },
          {
            name: "Camila Rodrigues",
            photo: "https://i.pravatar.cc/150?img=5",
            github: "https://github.com/camilarodrigues",
            linkedin: "https://linkedin.com/in/camilarodrigues"
          }
        ]
      },
      {
        name: "SmartMarket - E-commerce Inteligente",
        description: "Marketplace com sistema de recomendação baseado em IA, carrinho de compras, integração com pagamentos e painel administrativo completo.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        technologies: ["Vue.js", "Python", "Django", "MySQL", "TensorFlow"],
        stack: {
          frontend: "Vue.js",
          backend: "Python + Django",
          database: "MySQL",
          cloud: "AWS"
        },
        githubUrl: "https://github.com/escola-adelia/smartmarket",
        liveUrl: "https://smartmarket-demo.aws.com",
        students: [
          {
            name: "Daniel Oliveira",
            photo: "https://i.pravatar.cc/150?img=13",
            github: "https://github.com/danieloliveira",
            linkedin: "https://linkedin.com/in/danieloliveira"
          },
          {
            name: "Eduarda Ferreira",
            photo: "https://i.pravatar.cc/150?img=9",
            github: "https://github.com/eduardaferreira",
            linkedin: "https://linkedin.com/in/eduardaferreira"
          },
          {
            name: "Felipe Costa",
            photo: "https://i.pravatar.cc/150?img=15",
            github: "https://github.com/felipecosta",
            linkedin: "https://linkedin.com/in/felipecosta"
          },
          {
            name: "Gabriela Almeida",
            photo: "https://i.pravatar.cc/150?img=24",
            github: "https://github.com/gabrielaalmeida",
            linkedin: "https://linkedin.com/in/gabrielaalmeida"
          }
        ]
      },
      {
        name: "HealthTrack - Aplicativo de Saúde",
        description: "App mobile para monitoramento de saúde pessoal, com registro de atividades físicas, controle de medicamentos e histórico médico.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
        stack: {
          frontend: "React Native",
          backend: "Firebase",
          database: "Firestore",
          cloud: "Google Cloud"
        },
        githubUrl: "https://github.com/escola-adelia/healthtrack",
        liveUrl: "https://healthtrack.app",
        students: [
          {
            name: "Helena Martins",
            photo: "https://i.pravatar.cc/150?img=20",
            github: "https://github.com/helenamartins",
            linkedin: "https://linkedin.com/in/helenamartins"
          },
          {
            name: "Igor Pereira",
            photo: "https://i.pravatar.cc/150?img=33",
            github: "https://github.com/igorpereira",
            linkedin: "https://linkedin.com/in/igorpereira"
          },
          {
            name: "Julia Lima",
            photo: "https://i.pravatar.cc/150?img=16",
            github: "https://github.com/julialima",
            linkedin: "https://linkedin.com/in/julialima"
          }
        ]
      },
      {
        name: "GameZone - Plataforma de Games 2D",
        description: "Coleção de jogos 2D desenvolvidos em Unity, incluindo plataforma, puzzle e arcade, com sistema de ranking e conquistas.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
        technologies: ["Unity", "C#", "Firebase", "Photon"],
        stack: {
          frontend: "Unity + C#",
          backend: "Photon Server",
          database: "Firebase",
          cloud: "Google Cloud"
        },
        githubUrl: "https://github.com/escola-adelia/gamezone",
        students: [
          {
            name: "Kauan Souza",
            photo: "https://i.pravatar.cc/150?img=52",
            github: "https://github.com/kauansouza",
            linkedin: "https://linkedin.com/in/kauansouza"
          },
          {
            name: "Laura Dias",
            photo: "https://i.pravatar.cc/150?img=44",
            github: "https://github.com/lauradias",
            linkedin: "https://linkedin.com/in/lauradias"
          },
          {
            name: "Matheus Barbosa",
            photo: "https://i.pravatar.cc/150?img=51",
            github: "https://github.com/matheusbarbosa",
            linkedin: "https://linkedin.com/in/matheusbarbosa"
          }
        ]
      },
      {
        name: "EcoMonitor - Sistema de Monitoramento Ambiental",
        description: "Sistema IoT para monitoramento de qualidade do ar, temperatura e umidade, com dashboard web e alertas em tempo real.",
        image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Arduino", "MQTT"],
        stack: {
          frontend: "React",
          backend: "Node.js + MQTT",
          database: "MongoDB",
          cloud: "Azure"
        },
        githubUrl: "https://github.com/escola-adelia/ecomonitor",
        students: [
          {
            name: "Nicolas Ribeiro",
            photo: "https://i.pravatar.cc/150?img=59",
            github: "https://github.com/nicolasribeiro",
            linkedin: "https://linkedin.com/in/nicolasribeiro"
          },
          {
            name: "Olivia Cardoso",
            photo: "https://i.pravatar.cc/150?img=27",
            github: "https://github.com/oliviacardoso",
            linkedin: "https://linkedin.com/in/oliviacardoso"
          },
          {
            name: "Pedro Nascimento",
            photo: "https://i.pravatar.cc/150?img=68",
            github: "https://github.com/pedronascimento",
            linkedin: "https://linkedin.com/in/pedronascimento"
          },
          {
            name: "Rafaela Gomes",
            photo: "https://i.pravatar.cc/150?img=45",
            github: "https://github.com/rafaelagomes",
            linkedin: "https://linkedin.com/in/rafaelagomes"
          }
        ]
      },
      {
        name: "TaskMaster - Gerenciador de Projetos",
        description: "Ferramenta colaborativa para gestão de projetos e tarefas, com quadros Kanban, timelines, chat integrado e relatórios de produtividade.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        technologies: ["Angular", "NestJS", "PostgreSQL", "Socket.io", "Docker"],
        stack: {
          frontend: "Angular",
          backend: "NestJS",
          database: "PostgreSQL",
          cloud: "Docker + AWS"
        },
        githubUrl: "https://github.com/escola-adelia/taskmaster",
        students: [
          {
            name: "Samuel Araújo",
            photo: "https://i.pravatar.cc/150?img=60",
            github: "https://github.com/samuelaraujo",
            linkedin: "https://linkedin.com/in/samuelaraujo"
          },
          {
            name: "Thais Moreira",
            photo: "https://i.pravatar.cc/150?img=31",
            github: "https://github.com/thaismoreira",
            linkedin: "https://linkedin.com/in/thaismoreira"
          },
          {
            name: "Vinicius Alves",
            photo: "https://i.pravatar.cc/150?img=66",
            github: "https://github.com/viniciusalves",
            linkedin: "https://linkedin.com/in/viniciusalves"
          }
        ]
      },
      {
        name: "FoodDelivery - Sistema de Delivery",
        description: "Aplicativo completo de delivery de comida com painel para restaurantes, app para entregadores e sistema de rastreamento em tempo real.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        technologies: ["Flutter", "Laravel", "MySQL", "Google Maps API", "Redis"],
        stack: {
          frontend: "Flutter",
          backend: "Laravel + PHP",
          database: "MySQL + Redis",
          cloud: "AWS"
        },
        githubUrl: "https://github.com/escola-adelia/fooddelivery",
        students: [
          {
            name: "Wesley Silva",
            photo: "https://i.pravatar.cc/150?img=69",
            github: "https://github.com/wesleysilva",
            linkedin: "https://linkedin.com/in/wesleysilva"
          },
          {
            name: "Yasmin Santos",
            photo: "https://i.pravatar.cc/150?img=28",
            github: "https://github.com/yasminsantos",
            linkedin: "https://linkedin.com/in/yasminsantos"
          },
          {
            name: "Arthur Carvalho",
            photo: "https://i.pravatar.cc/150?img=11",
            github: "https://github.com/arthurcarvalho",
            linkedin: "https://linkedin.com/in/arthurcarvalho"
          }
        ]
      },
      {
        name: "SecurePass - Gerenciador de Senhas",
        description: "Aplicativo desktop para gerenciamento seguro de senhas com criptografia AES-256, autenticação biométrica e sincronização em nuvem.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
        technologies: ["Electron", "React", "SQLite", "Crypto", "AWS"],
        stack: {
          frontend: "Electron + React",
          backend: "Node.js",
          database: "SQLite",
          cloud: "AWS S3"
        },
        githubUrl: "https://github.com/escola-adelia/securepass",
        students: [
          {
            name: "Beatriz Rocha",
            photo: "https://i.pravatar.cc/150?img=23",
            github: "https://github.com/beatrizrocha",
            linkedin: "https://linkedin.com/in/beatrizrocha"
          },
          {
            name: "Caio Fernandes",
            photo: "https://i.pravatar.cc/150?img=14",
            github: "https://github.com/caiofernandes",
            linkedin: "https://linkedin.com/in/caiofernandes"
          },
          {
            name: "Debora Lima",
            photo: "https://i.pravatar.cc/150?img=26",
            github: "https://github.com/deboralima",
            linkedin: "https://linkedin.com/in/deboralima"
          },
          {
            name: "Erick Mendes",
            photo: "https://i.pravatar.cc/150?img=17",
            github: "https://github.com/erickmendes",
            linkedin: "https://linkedin.com/in/erickmendes"
          }
        ]
      },
      {
        name: "SmartHome - Automação Residencial",
        description: "Sistema de automação residencial com controle de dispositivos via app, agendamento de tarefas e integração com assistentes virtuais.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
        technologies: ["React", "Python", "Raspberry Pi", "MQTT", "Alexa SDK"],
        stack: {
          frontend: "React",
          backend: "Python + MQTT",
          database: "SQLite",
          cloud: "AWS IoT"
        },
        githubUrl: "https://github.com/escola-adelia/smarthome",
        students: [
          {
            name: "Fernanda Nunes",
            photo: "https://i.pravatar.cc/150?img=29",
            github: "https://github.com/fernandanunes",
            linkedin: "https://linkedin.com/in/fernandanunes"
          },
          {
            name: "Gustavo Torres",
            photo: "https://i.pravatar.cc/150?img=18",
            github: "https://github.com/gustavotorres",
            linkedin: "https://linkedin.com/in/gustavotorres"
          },
          {
            name: "Isabela Freitas",
            photo: "https://i.pravatar.cc/150?img=32",
            github: "https://github.com/isabelafreitas",
            linkedin: "https://linkedin.com/in/isabelafreitas"
          }
        ]
      }
    ];

    projetos.forEach(p => {
      const projeto = Project.create(
        p.name,
        p.description,
        p.image,
        p.technologies,
        p.students,
        p.stack,
        p.githubUrl,
        p.liveUrl
      );
      this.lista.push(projeto);
    });
  }

  criarProjeto(project: {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    students: Student[];
    stack: Stack;
    githubUrl: string;
    liveUrl?: string;
  }): Project {
    const projectCreated = Project.create(
      project.name,
      project.description,
      project.image,
      project.technologies,
      project.students,
      project.stack,
      project.githubUrl,
      project.liveUrl
    );
    this.lista.push(projectCreated);
    return projectCreated;
  }

  editarProjeto(
    id: string,
    dados: {
      name?: string;
      description?: string;
      image?: string;
      technologies?: string[];
      students?: Student[];
      stack?: Stack;
      githubUrl?: string;
      liveUrl?: string;
    }
  ): Project {
    const project = this.lista.find((project) => project.getId() === id);
    if (!project) {
      throw new Error("Projeto não encontrado");
    }

    if (dados.name) project.setName(dados.name);
    if (dados.description) project.setDescription(dados.description);
    if (dados.image) project.setImage(dados.image);
    if (dados.technologies) project.setTechnologies(dados.technologies);
    if (dados.students) project.setStudents(dados.students);
    if (dados.stack) project.setStack(dados.stack);
    if (dados.githubUrl) project.setGithubUrl(dados.githubUrl);
    if (dados.liveUrl !== undefined) project.setLiveUrl(dados.liveUrl);

    return project;
  }

  listarProjetos(): Project[] {
    return this.lista;
  }

  buscarProjetoPorId(id: string): Project | undefined {
    return this.lista.find((project) => project.getId() === id);
  }

  buscarProjetoPorNome(name: string): Project | undefined {
    return this.lista.find((project) => project.getName() === name);
  }

  // Métodos de filtro que retornam listas
  filtrarProjetosPorNome(name: string): Project[] {
    return this.lista.filter((project) =>
      project.getName().toLowerCase().includes(name.toLowerCase())
    );
  }

  filtrarProjetosPorTecnologia(tech: string): Project[] {
    const searchTerm = tech.toLowerCase();
    return this.lista.filter((project) =>
      project.getTechnologies().some(t => t.toLowerCase().includes(searchTerm))
    );
  }

  filtrarProjetosPorEstudante(studentName: string): Project[] {
    const searchTerm = studentName.toLowerCase();
    return this.lista.filter((project) =>
      project.getStudents().some(student =>
        student.name.toLowerCase().includes(searchTerm)
      )
    );
  }
}
