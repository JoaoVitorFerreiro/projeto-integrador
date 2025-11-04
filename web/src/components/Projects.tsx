import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Users } from 'lucide-react';
import { apiService } from '../services/api';
import type { Project } from '../types';
import toast from 'react-hot-toast';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await apiService.fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        toast.error('Erro ao carregar projetos. Usando dados de exemplo.');
        // Mock data em caso de erro
        setProjects([
          {
            id: '1',
            name: 'Sistema de Gerenciamento Escolar',
            description: 'Plataforma completa para gestão escolar com módulos de matrículas, notas, frequência e relatórios.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
            students: [
              {
                name: 'João Silva',
                photo: 'https://ui-avatars.com/api/?name=Joao+Silva&background=146131&color=fff',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
              },
              {
                name: 'Maria Santos',
                photo: 'https://ui-avatars.com/api/?name=Maria+Santos&background=146131&color=fff',
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
              },
            ],
            stack: {
              frontend: 'React + TypeScript',
              backend: 'Node.js + Express',
              database: 'PostgreSQL',
              cloud: 'AWS',
            },
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projetos Desenvolvidos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça as soluções criadas pelos alunos do curso de Informática
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Students */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Desenvolvido por:
                    </span>
                  </div>
                  <div className="space-y-2">
                    {project.students.map((student, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-gray-800">
                          {student.name}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={student.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="GitHub"
                          >
                            <Github size={16} />
                          </a>
                          <a
                            href={student.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            title="LinkedIn"
                          >
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
