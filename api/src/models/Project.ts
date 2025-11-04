import { randomUUID } from "crypto";

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

export class Project {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private image: string,
    private technologies: string[],
    private students: Student[],
    private stack: Stack,
    private githubUrl: string,
    private liveUrl?: string
  ) {
    if (!name) throw new Error("nome obrigatório");
    if (!description) throw new Error("descrição obrigatória");
    if (!image) throw new Error("imagem obrigatória");
    if (!githubUrl) throw new Error("URL do GitHub obrigatória");
    if (name.length < 3) throw new Error("nome muito curto");
    if (technologies.length === 0) throw new Error("pelo menos uma tecnologia é obrigatória");
    if (students.length === 0) throw new Error("pelo menos um estudante é obrigatório");
  }

  static create(
    name: string,
    description: string,
    image: string,
    technologies: string[],
    students: Student[],
    stack: Stack,
    githubUrl: string,
    liveUrl?: string
  ) {
    const id = randomUUID();
    return new Project(id, name, description, image, technologies, students, stack, githubUrl, liveUrl);
  }

  // Getters
  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getImage(): string {
    return this.image;
  }

  getTechnologies(): string[] {
    return this.technologies;
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStack(): Stack {
    return this.stack;
  }

  getGithubUrl(): string {
    return this.githubUrl;
  }

  getLiveUrl(): string | undefined {
    return this.liveUrl;
  }

  // Setters
  setName(name: string): void {
    if (!name || name.length < 3) throw new Error("nome inválido");
    this.name = name;
  }

  setDescription(description: string): void {
    if (!description) throw new Error("descrição obrigatória");
    this.description = description;
  }

  setImage(image: string): void {
    if (!image) throw new Error("imagem obrigatória");
    this.image = image;
  }

  setTechnologies(technologies: string[]): void {
    if (technologies.length === 0) throw new Error("pelo menos uma tecnologia é obrigatória");
    this.technologies = technologies;
  }

  setStudents(students: Student[]): void {
    if (students.length === 0) throw new Error("pelo menos um estudante é obrigatório");
    this.students = students;
  }

  setStack(stack: Stack): void {
    this.stack = stack;
  }

  setGithubUrl(githubUrl: string): void {
    if (!githubUrl) throw new Error("URL do GitHub obrigatória");
    this.githubUrl = githubUrl;
  }

  setLiveUrl(liveUrl?: string): void {
    this.liveUrl = liveUrl;
  }
}
