'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroAboutProps {
  countryName: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export function HeroAbout({ countryName, stats }: HeroAboutProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950"></div>
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}></div>
      </div>

      {/* Formas geométricas decorativas */}
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              Conoce CIMADE {countryName}
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transformando el futuro de la educación
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              profesional
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Somos una institución líder en educación continua y desarrollo profesional, 
            comprometidos con la excelencia académica y la formación integral de nuestros estudiantes 
            en {countryName}.
          </motion.p>          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="min-w-[140px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
