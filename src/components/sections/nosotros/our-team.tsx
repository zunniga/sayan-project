'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
  specialties: string[];
}

interface OurTeamProps {
  countryName: string;
  teamMembers: TeamMember[];
}

export function OurTeam({ countryName, teamMembers }: OurTeamProps) {
  // Usar directamente las imágenes tal como vienen de los datos mock
  const team = teamMembers.map(member => ({
    ...member,
    // Si no hay imagen, usar la imagen de equipo por defecto
    image: member.image || '/images/equipo1.jpg'
  }));const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nuestro Equipo
            </motion.h2>
            <motion.p 
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Profesionales altamente calificados y comprometidos con la excelencia educativa, 
              trabajando juntos para ofrecer la mejor experiencia formativa en {countryName}.
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member) => (              <motion.div 
                key={member.id}
                variants={cardVariants}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-200/50 dark:border-blue-800/50 group-hover:border-blue-400/70 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                </div>                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm hover:bg-blue-100/80 dark:hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>                {/* Contact */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-200/30 dark:border-gray-600/30">
                  {member.linkedin && (
                    <motion.a 
                      href={member.linkedin}
                      className="p-2 bg-blue-50/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100/80 dark:hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.a>
                  )}
                  {member.email && (
                    <motion.a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-green-50/80 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100/80 dark:hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 backdrop-blur-sm border border-green-200/30 dark:border-green-700/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>          {/* Footer section */}
          <motion.div 
            className="mt-16 text-center bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Estamos siempre en búsqueda de profesionales talentosos y comprometidos 
              con la educación de calidad. Únete a nosotros y ayuda a transformar el futuro 
              de la educación en {countryName}.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver oportunidades laborales
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
