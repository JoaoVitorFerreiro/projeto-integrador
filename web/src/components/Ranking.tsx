import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal } from 'lucide-react';
import { getTopProjectsBySemester } from '../data/projectsData';
import type { Project, Semester } from '../types';

interface Edition {
  semester: Semester;
  label: string;
  year: string;
  images: string[];
}

const editions: Edition[] = [
  {
    semester: '2025.2',
    label: '2ª Edição',
    year: '2025',
    images: ['/GrupoGanhador.jpeg', '/GrupoGanhador2.jpeg'],
  },
  {
    semester: '2026.1',
    label: '3ª Edição',
    year: '2026',
    images: ['/Grupoganhador2026.jpeg', '/Grupoganhador20262.jpeg'],
  },
];

const getRankingIcon = (ranking: number) => {
  switch (ranking) {
    case 1:
      return <Trophy className="w-16 h-16 text-yellow-400" />;
    case 2:
      return <Award className="w-14 h-14 text-gray-400" />;
    case 3:
      return <Medal className="w-12 h-12 text-amber-600" />;
    default:
      return null;
  }
};

const getRankingBgColor = (ranking: number) => {
  switch (ranking) {
    case 1:
      return 'from-yellow-400 to-yellow-600';
    case 2:
      return 'from-gray-300 to-gray-500';
    case 3:
      return 'from-amber-500 to-amber-700';
    default:
      return 'from-gray-400 to-gray-600';
  }
};

export default function Ranking() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alunos Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça os projetos que se destacaram pela qualidade, inovação e execução
          </p>

          {/* Campeões por edição */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {editions.map((edition) => (
              <div key={edition.semester}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Campeã da {edition.label}{' '}
                    <span className="text-gray-500 font-semibold">({edition.year})</span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edition.images.map((src, i) => (
                    <div key={src} className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={src}
                        alt={`Campeã da ${edition.label} (${edition.year}) - Foto ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pódios por edição */}
        {editions.map((edition) => {
          const topProjects = getTopProjectsBySemester(edition.semester);
          if (topProjects.length === 0) return null;

          return (
            <div key={edition.semester} className="max-w-5xl mx-auto mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
                Pódio da {edition.label} ({edition.year})
              </h3>
              <Podium topProjects={topProjects} inView={inView} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Podium({ topProjects, inView }: { topProjects: Project[]; inView: boolean }) {
  return (
    <div className="flex flex-col md:flex-row items-end justify-center gap-8 mb-8">
      {/* Second Place */}
      {topProjects[1] && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 max-w-sm"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className={`h-24 bg-gradient-to-br ${getRankingBgColor(2)} flex items-center justify-center`}>
              {getRankingIcon(2)}
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-primary mb-2">
                {topProjects[1].name}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {topProjects[1].description}
              </p>
              <a
                href={topProjects[1].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors duration-300"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* First Place - Larger */}
      {topProjects[0] && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 max-w-sm md:scale-110 z-10"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className={`h-32 bg-gradient-to-br ${getRankingBgColor(1)} flex items-center justify-center relative`}>
              {getRankingIcon(1)}
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-yellow-600 font-bold text-sm">#1</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold text-primary mb-3">
                {topProjects[0].name}
              </h4>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {topProjects[0].description}
              </p>
              <a
                href={topProjects[0].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Third Place */}
      {topProjects[2] && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 max-w-sm"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className={`h-20 bg-gradient-to-br ${getRankingBgColor(3)} flex items-center justify-center`}>
              {getRankingIcon(3)}
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-primary mb-2">
                {topProjects[2].name}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {topProjects[2].description}
              </p>
              <a
                href={topProjects[2].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors duration-300"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
