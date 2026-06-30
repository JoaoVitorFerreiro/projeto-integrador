import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, User, Linkedin, Filter } from 'lucide-react';
import {
  getAllProjects,
  getEditionLabel,
  getEditionNumber,
  getEditionYear,
  THEMES,
} from '../data/projectsData';
import type { Project, Theme } from '../types';

type ThemeFilter = Theme | 'all';
type EditionFilter = number | 'all';

export default function Projects() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const [selectedTheme, setSelectedTheme] = useState<ThemeFilter>('all');
  const [selectedEdition, setSelectedEdition] = useState<EditionFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const editions = useMemo(() => {
    const unique = Array.from(
      new Set(allProjects.map((p) => getEditionNumber(p.semester)))
    );
    return unique.sort((a, b) => b - a);
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchTheme = selectedTheme === 'all' || project.theme === selectedTheme;
      const matchEdition =
        selectedEdition === 'all' ||
        getEditionNumber(project.semester) === selectedEdition;
      return matchTheme && matchEdition;
    });
  }, [allProjects, selectedTheme, selectedEdition]);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todos os Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projetos desenvolvidos pelos alunos ao longo das edições do Projeto Integrador
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="max-w-4xl mx-auto mb-12 space-y-5">
          {/* Filtro por tema */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-3 text-gray-700">
              <Filter size={18} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Tema
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterButton
                active={selectedTheme === 'all'}
                onClick={() => setSelectedTheme('all')}
              >
                Todos
              </FilterButton>
              {THEMES.map((theme) => (
                <FilterButton
                  key={theme}
                  active={selectedTheme === theme}
                  onClick={() => setSelectedTheme(theme)}
                >
                  {theme}
                </FilterButton>
              ))}
            </div>
          </div>

          {/* Filtro por edição */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-3 text-gray-700">
              <span className="text-sm font-semibold uppercase tracking-wide">
                Edição
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterButton
                active={selectedEdition === 'all'}
                onClick={() => setSelectedEdition('all')}
              >
                Todas
              </FilterButton>
              {editions.map((edition) => (
                <FilterButton
                  key={edition}
                  active={selectedEdition === edition}
                  onClick={() => setSelectedEdition(edition)}
                >
                  {edition}ª Edição
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de projetos */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            Nenhum projeto encontrado para os filtros selecionados.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col"
              >
                {/* Ranking Badge */}
                {project.ranking && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`
                      px-3 py-1 rounded-full font-bold text-sm shadow-lg
                      ${project.ranking === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900' : ''}
                      ${project.ranking === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800' : ''}
                      ${project.ranking === 3 ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' : ''}
                    `}>
                      #{project.ranking}
                    </div>
                  </div>
                )}

                {/* Project Preview - Clickable */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        <ExternalLink className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Tags: edição + tema */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {getEditionLabel(project.semester)} · {getEditionYear(project.semester)}
                    </span>
                    <span className="bg-gray-900/5 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200">
                      {project.theme}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Students */}
                  {project.students.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <User size={18} className="text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700">
                          Equipe:
                        </span>
                      </div>
                      <div className="space-y-2">
                        {project.students.map((student, i) => (
                          <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-800">
                                {student.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {student.role}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {student.github && (
                                <a
                                  href={student.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-gray-900 transition-colors"
                                  title="GitHub"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={16} />
                                </a>
                              )}
                              {student.linkedin && (
                                <a
                                  href={student.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-blue-600 transition-colors"
                                  title="LinkedIn"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin size={16} />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="font-medium">GitHub</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.githubUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-colors duration-300`}
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Ver Projeto</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Project Preview */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedProject.liveUrl}
                className="w-full h-full"
                title={selectedProject.name}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
        active
          ? 'bg-primary text-white border-primary shadow-md'
          : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
      }`}
    >
      {children}
    </button>
  );
}
