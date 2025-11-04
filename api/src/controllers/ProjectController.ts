import { Project } from "../models/Project";
import { app } from "../server";
import { ProjectService } from "../services/ProjectService";

export function ProjectController() {
  const service = new ProjectService();

  app.get("/projetos", (req, res) => {
    const projetos = service.listarProjetos();

    const projetosFormatados = projetos.map((projeto) => ({
      id: projeto.getId(),
      name: projeto.getName(),
      description: projeto.getDescription(),
      image: projeto.getImage(),
      technologies: projeto.getTechnologies(),
      students: projeto.getStudents(),
      stack: projeto.getStack(),
      githubUrl: projeto.getGithubUrl(),
      liveUrl: projeto.getLiveUrl(),
    }));

    res.json(projetosFormatados);
  });

  app.post("/projetos", (req, res) => {
    try {
      const dadosProjeto = req.body;
      const novoProjeto = service.criarProjeto(dadosProjeto);
      res.status(201).json({
        status: "Projeto criado com sucesso",
        id: novoProjeto.getId(),
      });
    } catch (e: any) {
      return res.status(400).json({ erro: e.message });
    }
  });

  app.put("/projetos/:id", (req, res) => {
    try {
      const { id } = req.params;
      const dados = req.body;
      const projetoAtualizado = service.editarProjeto(id, dados);

      res.json({
        status: "Projeto atualizado com sucesso",
        dados: {
          id: projetoAtualizado.getId(),
          name: projetoAtualizado.getName(),
          description: projetoAtualizado.getDescription(),
          image: projetoAtualizado.getImage(),
          technologies: projetoAtualizado.getTechnologies(),
          students: projetoAtualizado.getStudents(),
          stack: projetoAtualizado.getStack(),
          githubUrl: projetoAtualizado.getGithubUrl(),
          liveUrl: projetoAtualizado.getLiveUrl(),
        },
      });
    } catch (e: any) {
      return res.status(404).json({ erro: e.message });
    }
  });

  app.get("/projetos/buscar", (req, res) => {
    const { name, tech, student } = req.query;

    // Filtro por nome (retorna lista)
    if (name) {
      const projetos = service.filtrarProjetosPorNome(name as string);
      const projetosFormatados = projetos.map((projeto) => ({
        id: projeto.getId(),
        name: projeto.getName(),
        description: projeto.getDescription(),
        image: projeto.getImage(),
        technologies: projeto.getTechnologies(),
        students: projeto.getStudents(),
        stack: projeto.getStack(),
        githubUrl: projeto.getGithubUrl(),
        liveUrl: projeto.getLiveUrl(),
      }));
      return res.status(200).json(projetosFormatados);
    }

    // Filtro por tecnologia (retorna lista)
    if (tech) {
      const projetos = service.filtrarProjetosPorTecnologia(tech as string);
      const projetosFormatados = projetos.map((projeto) => ({
        id: projeto.getId(),
        name: projeto.getName(),
        description: projeto.getDescription(),
        image: projeto.getImage(),
        technologies: projeto.getTechnologies(),
        students: projeto.getStudents(),
        stack: projeto.getStack(),
        githubUrl: projeto.getGithubUrl(),
        liveUrl: projeto.getLiveUrl(),
      }));
      return res.status(200).json(projetosFormatados);
    }

    // Filtro por estudante (retorna lista)
    if (student) {
      const projetos = service.filtrarProjetosPorEstudante(student as string);
      const projetosFormatados = projetos.map((projeto) => ({
        id: projeto.getId(),
        name: projeto.getName(),
        description: projeto.getDescription(),
        image: projeto.getImage(),
        technologies: projeto.getTechnologies(),
        students: projeto.getStudents(),
        stack: projeto.getStack(),
        githubUrl: projeto.getGithubUrl(),
        liveUrl: projeto.getLiveUrl(),
      }));
      return res.status(200).json(projetosFormatados);
    }

    return res.status(400).json({
      mensagem:
        "Parâmetros de busca inválidos. Use: name, tech, ou student",
    });
  });

  app.get("/projetos/:id", (req, res) => {
    try {
      const { id } = req.params;
      const projeto = service.buscarProjetoPorId(id);

      if (!projeto) {
        return res.status(404).json({ erro: "Projeto não encontrado" });
      }

      res.json({
        id: projeto.getId(),
        name: projeto.getName(),
        description: projeto.getDescription(),
        image: projeto.getImage(),
        technologies: projeto.getTechnologies(),
        students: projeto.getStudents(),
        stack: projeto.getStack(),
        githubUrl: projeto.getGithubUrl(),
        liveUrl: projeto.getLiveUrl(),
      });
    } catch (e: any) {
      return res.status(500).json({ erro: e.message });
    }
  });
}
