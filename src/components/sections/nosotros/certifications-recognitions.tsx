'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { renderIconLegacy } from '@/lib/icon-utils';
import type { Certification, Recognition } from '@/types';

interface CertificationsRecognitionsProps {
  countryName: string;
  certifications: Certification[];
  recognitions: Recognition[];
  partnerships: Array<{
    name: string;
    type: string;
    logo: string;
  }>;
}

export function CertificationsRecognitions({ 
  countryName, 
  certifications, 
  recognitions, 
  partnerships 
}: CertificationsRecognitionsProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  const renderIcon = (iconName: string, className?: string) => {
    return renderIconLegacy(iconName, className);
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
              Certificaciones y Reconocimientos
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestro compromiso con la calidad educativa está respaldado por prestigiosas 
              certificaciones internacionales y reconocimientos del sector.
            </motion.p>
          </div>

          {/* Certificaciones */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Certificaciones de Calidad
            </motion.h3>            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const colorClasses = getColorClasses(cert.color);
                return (
                  <motion.div 
                    key={cert.id}
                    className={`group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`${colorClasses.bg} p-3 rounded-full w-fit mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <div className={colorClasses.text}>
                        {renderIcon(cert.iconName, 'w-6 h-6')} {/* Use renderIcon */}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className={`text-sm font-medium ${colorClasses.text}`}>
                        {cert.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      {cert.description}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Obtenida en {cert.year}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Reconocimientos */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Reconocimientos y Premios
            </motion.h3>            <div className="grid md:grid-cols-2 gap-6">
              {recognitions.map((recognition, index) => (
                <motion.div 
                  key={recognition.id}
                  className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/20 dark:border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <div className="text-yellow-600 dark:text-yellow-400">
                        {renderIcon(recognition.iconName, 'w-6 h-6')} {/* Use renderIcon */}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {recognition.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                        {recognition.organization}
                      </p>
                      <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                        {recognition.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Alianzas */}
          <div>
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Alianzas Estratégicas
            </motion.h3>            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerships.map((partner, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100/50 dark:bg-gray-700/50 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={partner.logo || '/images/diplomado.webp'}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className="rounded transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                    {partner.type}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>          {/* CTA */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white border border-blue-400/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Calidad Garantizada
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Nuestras certificaciones y reconocimientos respaldan nuestro compromiso 
              con la excelencia educativa en {countryName}.
            </p>
            <motion.button
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestros estándares de calidad
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
