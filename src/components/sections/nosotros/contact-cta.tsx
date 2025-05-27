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
        </motion.div>        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
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
        </div>
      </div>
    </section>
  );
}
