'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Star, Lightbulb, Users, Award, Globe } from 'lucide-react';

interface MissionVisionValuesProps {
  countryName: string;
}

export function MissionVisionValues({ countryName }: MissionVisionValuesProps) {
  const values = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excelencia",
      description: "Comprometidos con los más altos estándares de calidad en todos nuestros programas educativos."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación",
      description: "Incorporamos constantemente nuevas metodologías y tecnologías para mejorar el aprendizaje."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Compromiso",
      description: "Dedicados al éxito profesional y personal de cada uno de nuestros estudiantes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integridad",
      description: "Actuamos con transparencia, honestidad y responsabilidad en todas nuestras acciones."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Inclusión",
      description: "Promovemos un ambiente diverso e inclusivo donde todos puedan desarrollar su potencial."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Responsabilidad Social",
      description: "Contribuimos al desarrollo de la sociedad a través de la educación y la formación profesional."
    }
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto relative z-10">
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
              Misión, Visión y Valores
            </motion.h2>
            <motion.p 
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Los pilares fundamentales que guían nuestro trabajo y definen nuestro compromiso 
              con la educación de calidad en {countryName}.
            </motion.p>
          </div>          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Misión */}
            <motion.div 
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100/20 dark:bg-blue-900/30 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Formar profesionales competentes y comprometidos mediante programas educativos de excelencia, 
                contribuyendo al desarrollo económico y social de {countryName} a través de la educación continua 
                y la innovación pedagógica.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100/20 dark:bg-indigo-900/30 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30">
                  <Eye className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Ser reconocidos como la institución líder en educación profesional y desarrollo de competencias 
                en {countryName}, siendo referente en calidad educativa, innovación tecnológica y 
                responsabilidad social en la región.
              </p>
            </motion.div>
          </div>          {/* Valores */}
          <div>
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nuestros Valores
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Background effects for CTA */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full filter blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ¿Listo para ser parte de nuestra comunidad?
              </motion.h3>
              <motion.p 
                className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Únete a CIMADE {countryName} y transforma tu carrera profesional con nuestros programas de excelencia.
              </motion.p>
              <motion.button
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Conoce nuestros programas
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
