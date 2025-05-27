'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OurHistoryProps {
  countryName: string;
  timeline: Array<{
    year: string;
    title: string;
    description: string;
    milestone: boolean;
  }>;
}

export function OurHistory({ countryName, timeline }: OurHistoryProps) {
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
              Nuestra Historia
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Más de una década construyendo el futuro profesional de miles de personas en {countryName} y la región.
            </motion.p>
          </div>          {/* Timeline */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Contenido */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <div className={`group ${item.milestone ? 'bg-white/15 dark:bg-black/25 border-blue-400/50' : 'bg-white/10 dark:bg-black/20 border-gray-600/20 dark:border-white/10'} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl ${item.milestone ? 'hover:shadow-blue-500/20' : 'hover:shadow-gray-500/10'} hover:border-blue-400/50`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{item.milestone ? '🏆' : '📅'}</span>
                        <span className={`text-2xl font-bold ${item.milestone ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Punto en la línea */}
                  <div className={`flex-shrink-0 w-6 h-6 ${item.milestone ? 'bg-blue-600 dark:bg-blue-400 shadow-lg shadow-blue-500/50' : 'bg-gray-400 dark:bg-gray-500'} rounded-full border-4 border-white dark:border-gray-900 z-10 mx-4 lg:mx-0 transition-transform duration-300 hover:scale-125`}></div>

                  {/* Espaciador */}
                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>          {/* Imagen de cierre */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white border border-blue-400/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                El futuro sigue escribiéndose
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                Continuamos innovando y creciendo para ofrecer la mejor educación profesional 
                en {countryName} y expandir nuestro impacto en la región.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
