import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Prof. Carlos Silva',
    role: 'Coordenador do Curso',
    photo: 'https://ui-avatars.com/api/?name=Carlos+Silva&background=146131&color=fff&size=200',
    bio: 'Especialista em Desenvolvimento de Software com 15 anos de experiência.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Profa. Ana Paula',
    role: 'Professora de Banco de Dados',
    photo: 'https://ui-avatars.com/api/?name=Ana+Paula&background=146131&color=fff&size=200',
    bio: 'Mestre em Ciência da Computação, especialista em SQL e NoSQL.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Prof. Ricardo Santos',
    role: 'Professor de Desenvolvimento Web',
    photo: 'https://ui-avatars.com/api/?name=Ricardo+Santos&background=146131&color=fff&size=200',
    bio: 'Full Stack Developer com foco em React e Node.js.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function Team() {
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
            Nosso Time de Professores
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissionais experientes dedicados a formar os melhores talentos da área de tecnologia
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
