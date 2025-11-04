export interface Student {
  name: string;
  photo: string;
  github: string;
  linkedin: string;
}

export interface Stack {
  frontend?: string;
  backend?: string;
  database?: string;
  cloud?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  students: Student[];
  stack: Stack;
  githubUrl: string;
  liveUrl?: string;
}
