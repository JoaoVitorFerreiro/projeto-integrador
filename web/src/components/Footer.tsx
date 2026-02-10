import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { schoolInfo } from '../data/mockData';

const socialLinks = [
  { Icon: Instagram, url: schoolInfo.social.instagram, label: 'Instagram' },
  { Icon: Youtube, url: schoolInfo.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Social */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/logo.png"
                alt="Escola Técnica Adélia"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <h3 className="text-xl font-bold">{schoolInfo.name}</h3>
            </motion.div>
            <p className="text-gray-400 mb-4 text-sm">
              Formando profissionais qualificados para o mercado de tecnologia
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{schoolInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {schoolInfo.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
