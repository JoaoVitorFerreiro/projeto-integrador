import type { Project } from "../types";

const API_URL = "https://escolatecnicaadelia.info/api";

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_URL;
  }

  async fetchProjects(): Promise<Project[]> {
    try {
      const response = await fetch(`${this.baseUrl}/projetos`);
      if (!response.ok) throw new Error("Erro ao buscar projetos");
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      throw error;
    }
  }

  async fetchProjectById(id: string): Promise<Project> {
    try {
      const response = await fetch(`${this.baseUrl}/projetos/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar projeto");
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar projeto:", error);
      throw error;
    }
  }

  async searchProjects(params: {
    name?: string;
    tech?: string;
    student?: string;
  }): Promise<Project[]> {
    try {
      const queryParams = new URLSearchParams();
      if (params.name) queryParams.append("name", params.name);
      if (params.tech) queryParams.append("tech", params.tech);
      if (params.student) queryParams.append("student", params.student);

      const response = await fetch(
        `${this.baseUrl}/projetos/buscar?${queryParams.toString()}`
      );
      if (!response.ok) throw new Error("Erro ao buscar projetos");
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
