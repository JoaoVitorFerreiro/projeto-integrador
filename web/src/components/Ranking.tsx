import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal } from 'lucide-react';
import { getTopProjects } from '../data/projectsData';

export default function Ranking() {
  const topProjects = getTopProjects();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const getRankingLabel = (ranking: number) => {
    switch (ranking) {
      case 1:
        return 'Campeão';
      case 2:
        return 'Vice-Campeão';
      case 3:
        return 'Terceiro Lugar';
      default:
        return '';
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

  if (topProjects.length === 0) return null;

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alunos Destaque do Último Semestre
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça os projetos que se destacaram pela qualidade, inovação e execução
          </p>

          {/* Winner Group Images - Two side by side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-6xl mx-auto mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/GrupoGanhador.jpeg"
                  alt="Alunos Destaque - Grupo 1"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/GrupoGanhador2.jpeg"
                  alt="Alunos Destaque - Grupo 2"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ranking Podium */}
        <div className="max-w-5xl mx-auto">
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
                  {/* Trophy Badge */}
                  <div className={`h-24 bg-gradient-to-br ${getRankingBgColor(2)} flex items-center justify-center`}>
                    {getRankingIcon(2)}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-1 bg-gray-100 rounded-full">
                        <span className="text-sm font-semibold text-gray-600">
                          Grupo {topProjects[1].groupNumber}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-primary mb-2">
                      {topProjects[1].name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {topProjects[1].description}
                    </p>

                    {/* Team */}
                    <div className="space-y-1 mb-4">
                      {topProjects[1].students.map((student, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium text-gray-900">{student.name}</span>
                          <span className="text-gray-500"> - {student.role}</span>
                        </div>
                      ))}
                    </div>

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
                  {/* Trophy Badge */}
                  <div className={`h-32 bg-gradient-to-br ${getRankingBgColor(1)} flex items-center justify-center relative`}>
                    {getRankingIcon(1)}
                    <div className="absolute top-2 right-2">
                      <div className="bg-white rounded-full px-3 py-1 shadow-lg">
                        <span className="text-yellow-600 font-bold text-sm">#1</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-1 bg-yellow-100 rounded-full">
                        <span className="text-sm font-semibold text-yellow-700">
                          Grupo {topProjects[0].groupNumber}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-primary mb-3">
                      {topProjects[0].name}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {topProjects[0].description}
                    </p>

                    {/* Team */}
                    <div className="space-y-1 mb-4">
                      {topProjects[0].students.map((student, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium text-gray-900">{student.name}</span>
                          <span className="text-gray-500"> - {student.role}</span>
                        </div>
                      ))}
                    </div>

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
                  {/* Trophy Badge */}
                  <div className={`h-20 bg-gradient-to-br ${getRankingBgColor(3)} flex items-center justify-center`}>
                    {getRankingIcon(3)}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-1 bg-amber-100 rounded-full">
                        <span className="text-sm font-semibold text-amber-700">
                          Grupo {topProjects[2].groupNumber}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-primary mb-2">
                      {topProjects[2].name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {topProjects[2].description}
                    </p>

                    {/* Team */}
                    <div className="space-y-1 mb-4">
                      {topProjects[2].students.map((student, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium text-gray-900">{student.name}</span>
                          <span className="text-gray-500"> - {student.role}</span>
                        </div>
                      ))}
                    </div>

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
        </div>
      </div>
    </section>
  );
}
