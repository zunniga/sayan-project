'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, Star, Award, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  countryCode: string;
  countryName: string;
  teamMembers: TeamMember[];
}

export function OurTeam({ countryCode, countryName, teamMembers }: OurTeamProps) {
  // Usar directamente las imágenes tal como vienen de los datos mock
  const team = teamMembers.map(member => ({
    ...member,
    // Si no hay imagen, usar la imagen de equipo por defecto
    image: member.image || '/images/equipo1.jpg'
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const specialtyColors = [
    "from-blue-500 to-cyan-600",
    "from-indigo-500 to-purple-600", 
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
    "from-violet-500 to-purple-600"
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2">
                <Users className="h-4 w-4" />
                NUESTRO EQUIPO
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Expertos que 
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Transforman Vidas
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Profesionales altamente calificados y comprometidos con la excelencia educativa, 
              trabajando juntos para ofrecer la mejor experiencia formativa en {countryName}.
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                variants={cardVariants}
                className="relative group"
                whileHover={{ y: -12 }}
              >
                {/* Card background with gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${specialtyColors[index % specialtyColors.length]} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 overflow-hidden">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-bl-3xl"></div>
                  
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg border-3 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                      {member.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Award className="h-3 w-3" />
                      Especialidades
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.slice(0, 3).map((specialty, idx) => (
                        <span 
                          key={idx}
                          className={`bg-gradient-to-r ${specialtyColors[idx % specialtyColors.length]} text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm`}
                        >
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 3 && (
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                          +{member.specialties.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {member.linkedin && (
                      <motion.a 
                        href={member.linkedin}
                        className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-4 w-4" />
                      </motion.a>
                    )}
                    {member.email && (
                      <motion.a 
                        href={`mailto:${member.email}`}
                        className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  ¿Quieres ser parte de la excelencia?
                </motion.h3>
                <motion.p
                  className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Estamos siempre en búsqueda de profesionales talentosos y comprometidos 
                  con la educación de calidad. Únete a nosotros y ayuda a transformar el futuro 
                  de la educación en {countryName}.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Oportunidades
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                  <Link
                    className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                    href={`/${countryCode}/contacto`}
                  >
                    Contactar RRHH
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}