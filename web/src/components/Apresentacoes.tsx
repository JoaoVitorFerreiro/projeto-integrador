import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Clock } from 'lucide-react';

interface Presentation {
  date: string;
  weekday: string;
  time: string;
  image?: string;
  themes: string[];
}

const edition = { label: '4ª Edição', semester: '2026.2' };

const presentations: Presentation[] = [
  {
    date: '16/10/2026',
    weekday: 'Sexta-feira',
    time: '19h00',
    image: '/projeto-sustentavel-agua.jpeg',
    themes: ['Projeto sustentável: captação e reaproveitamento de água da chuva'],
  },
  {
    date: '19/10/2026',
    weekday: 'Segunda-feira',
    time: '19h00',
    themes: [
      'Vitrine digital para loja náutica',
      'Agendamento e faturamento para barbearia',
      'Site institucional de confeitaria',
      'Encomendas de padaria com chat e montador de bolos',
      'Automação de envio de documentos de viagens',
      'Agendamento e cadastro de pacientes',
      'Divulgação e agendamento para empresa de cargas e contêineres',
      'Prevenção e orientação contra golpes',
      'Gestão de pedidos e comandas para quiosque de praia',
    ],
  },
];

export default function Apresentacoes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ultima-edicao" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apresentações da {edition.label}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Edição {edition.semester} · Dois dias de apresentações
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {presentations.map((p, i) => (
            <motion.div
              key={p.date}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt="Maquete do projeto sustentável de captação de água da chuva"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-primary font-semibold">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={20} />
                    {p.date} · {p.weekday}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={20} />
                    {p.time}
                  </span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                  Temas
                </h3>
                <ul className="space-y-2 text-gray-800">
                  {p.themes.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-secondary-yellow">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
