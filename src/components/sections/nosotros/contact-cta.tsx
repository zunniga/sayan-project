'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  MessageCircle,
  Calendar,
  Users
} from 'lucide-react';
import Link from 'next/link';

interface ContactCTAProps {
  countryCode: string;
}

export function ContactCTA({ countryCode }: ContactCTAProps) {
  const getContactInfo = () => {
    if (countryCode === 'pe') {
      return {
        phone: "+51 1 234-5678",
        email: "info@cimade.edu.pe",
        address: "Av. Javier Prado Este 123, San Isidro, Lima",
        whatsapp: "+51 987-654-321",
        schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM"
      };
    } else {
      return {
        phone: "+57 1 234-5678", 
        email: "info@cimade.edu.co",
        address: "Carrera 11 #123-45, Zona Rosa, Bogotá",
        whatsapp: "+57 321-654-9876",
        schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM"
      };
    }
  };

  const contactInfo = getContactInfo();

  const contactMethods = [
    {
      icon: Phone,
      title: "Llámanos",
      description: "Habla directamente con nuestros asesores académicos",
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata a tus consultas",
      value: "Chatear ahora",
      action: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`,
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Información detallada por correo electrónico",
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Agenda una Cita",
      description: "Visita personalizada en nuestras instalaciones",
      value: "Agendar reunión",
      action: "/contacto#agendar",
      color: "orange"
    }
  ];

  const quickActions = [
    {
      title: "Solicitar Información",
      description: "Recibe el brochure completo de nuestros programas",
      buttonText: "Descargar Brochure",
      href: "/brochure"
    },
    {
      title: "Proceso de Admisión",
      description: "Conoce los requisitos y pasos para matricularte",
      buttonText: "Ver Requisitos",
      href: "/admisiones"
    },
    {
      title: "Visita Virtual",
      description: "Recorre nuestras instalaciones desde casa",
      buttonText: "Tour Virtual",
      href: "/tour-virtual"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Listo para Transformar tu Futuro?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Da el primer paso hacia una carrera exitosa. Nuestro equipo está aquí para 
            acompañarte en cada etapa de tu proceso educativo.
          </p>
          <div className="inline-flex items-center bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-gray-600/20 dark:border-white/10 rounded-full px-6 py-3 text-gray-700 dark:text-gray-300">
            <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">Más de 5,000 graduados exitosos nos respaldan</span>
          </div>
        </motion.div>        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group border border-gray-600/20 dark:border-white/10"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 bg-gradient-to-br ${getColorClasses(method.color)} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                {method.description}
              </p>
              
              <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {method.value}
              </div>
            </motion.a>
          ))}
        </div>        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Acciones Rápidas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explora nuestras opciones y encuentra la información que necesitas para tomar la mejor decisión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-600/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-black/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {action.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {action.description}
                </p>
                <Link
                  href={action.href}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300 group"
                >
                  {action.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200/30 dark:border-gray-600/30">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-3 flex-shrink-0 shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">Dirección</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{contactInfo.address}</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-600/20 dark:border-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mr-3 flex-shrink-0 shadow-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">Horarios</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{contactInfo.schedule}</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-600/20 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mr-3 flex-shrink-0 shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 dark:text-white font-medium mb-1">Teléfono</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{contactInfo.phone}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
