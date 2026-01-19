import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Check, MessageCircle, Code2, Database, Cpu } from 'lucide-react';
import { courseInfo } from '../data/mockData';

const floatingIcons = [
  { Icon: Code2, delay: 0 },
  { Icon: Database, delay: 0.3 },
  { Icon: Cpu, delay: 0.6 },
];

export default function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${courseInfo.whatsapp}`, '_blank');
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10"
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              delay,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Icon size={64} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comece Sua Jornada na Tecnologia Hoje!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Faça parte do Curso Técnico em Informática e desenvolva projetos reais
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="flex justify-center mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full max-w-md"
          >
            <div className="flex items-start gap-4">
              <div className="bg-secondary-yellow rounded-lg p-3">
                <Calendar className="text-gray-900" size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Duração</h3>
                <p className="text-white/90">Presencial: 1 ano e meio (18 meses)</p>
                <p className="text-white/90">EAD: Mínimo 6 meses</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseInfo.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-secondary-yellow rounded-full flex items-center justify-center">
                  <Check className="text-gray-900" size={16} />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-secondary-yellow hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={24} />
            <span>Fale Conosco no WhatsApp</span>
          </motion.button>
          <p className="text-white/80 mt-4 text-sm">
            Tire suas dúvidas e saiba como se matricular
          </p>
        </motion.div>
      </div>
    </section>
  );
}
