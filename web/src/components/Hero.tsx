import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Cpu, Cloud, Braces, Check } from 'lucide-react';

const floatingIcons = [
  { Icon: Code2, delay: 0, x: -20, y: -30 },
  { Icon: Database, delay: 0.2, x: 20, y: -20 },
  { Icon: Terminal, delay: 0.4, x: -30, y: 20 },
  { Icon: Cpu, delay: 0.6, x: 30, y: 30 },
  { Icon: Cloud, delay: 0.8, x: -10, y: -40 },
  { Icon: Braces, delay: 1, x: 10, y: 40 },
];

const orbs = [
  { size: 400, x: '10%', y: '20%', color: 'bg-cyan-500/20', delay: 0 },
  { size: 300, x: '80%', y: '60%', color: 'bg-green-500/20', delay: 0.5 },
  { size: 200, x: '50%', y: '80%', color: 'bg-yellow-500/20', delay: 1 },
];

const features = [
  { text: 'Projetos Interdisciplinares', icon: Check },
  { text: '100% Prático', icon: Check },
  { text: 'Deploy em Produção', icon: Check },
];

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-20 pb-16">
      {/* Animated Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            delay: orb.delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, y, 0],
              x: [0, x, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
              >
                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  Escola Técnica Adélia
                </span>
                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  Curso Técnico em Informática
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Desenvolvimento de Soluções Reais através do{' '}
                <span className="text-secondary-yellow">Projeto Integrador</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-white/90 mb-6 leading-relaxed"
              >
                Conheça os projetos desenvolvidos pelos alunos do curso de Informática.
                Soluções práticas e inovadoras que unem conhecimento técnico e criatividade.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="bg-secondary-yellow hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Projetos Desenvolvidos
              </motion.button>

              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20"
                  >
                    <feature.icon size={18} className="text-secondary-yellow" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 max-w-md lg:max-w-lg"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/Alunos.jpg"
                  alt="Alunos do Projeto Integrador"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
