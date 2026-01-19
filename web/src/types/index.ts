export interface Student {
  name: string;
  role: 'Líder' | 'Backend' | 'Frontend' | 'FullStack';
  photo?: string;
  github?: string;
  linkedin?: string;
}

export interface Stack {
  frontend?: string;
  backend?: string;
  database?: string;
  cloud?: string;
}

export interface Project {
  id: string;
  groupNumber: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  students: Student[];
  stack: Stack;
  githubUrl?: string;
  liveUrl: string;
  ranking?: number; // 1, 2, 3 para top 3 projetos
}
