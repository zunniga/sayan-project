'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { renderIconLegacy } from '@/lib/icon-utils';
import { 
  Award, 
  Star, 
  Trophy, 
  Shield, 
  Users, 
  Globe, 
  Zap, 
  Crown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
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
        border: "border-blue-200 dark:border-blue-800",
        gradient: "from-blue-500 to-cyan-600",
        shadow: "shadow-blue-500/20"
      },
      green: {
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-800",
        gradient: "from-emerald-500 to-teal-600",
        shadow: "shadow-emerald-500/20"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800",
        gradient: "from-indigo-500 to-purple-600",
        shadow: "shadow-indigo-500/20"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        gradient: "from-purple-500 to-pink-600",
        shadow: "shadow-purple-500/20"
      },
      gold: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800",
        gradient: "from-yellow-500 to-orange-600",
        shadow: "shadow-yellow-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const renderIcon = (iconName: string, className?: string) => {
    return renderIconLegacy(iconName, className);
  };

  const certificationStats = [
    { 
      number: "ISO 9001", 
      label: "Calidad Internacional",
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "15+", 
      label: "Certificaciones",
      icon: <Award className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      number: "25+", 
      label: "Reconocimientos",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    { 
      number: "50+", 
      label: "Alianzas Estratégicas",
      icon: <Users className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                CALIDAD CERTIFICADA
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Certificaciones y
              <br />
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text">
                Reconocimientos
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestro compromiso con la excelencia educativa está respaldado por prestigiosas 
              certificaciones internacionales y reconocimientos del sector en {countryName}.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {certificationStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="mb-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="p-3 bg-blue-100/20 dark:bg-blue-900/30 rounded-full mr-3 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Certificaciones de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Calidad</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Estándares internacionales que garantizan la excelencia en nuestros procesos educativos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => {
                const colorClasses = getColorClasses(cert.color);
                return (
                  <motion.div 
                    key={cert.id}
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`${colorClasses.bg} p-4 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <div className={colorClasses.text}>
                            {renderIcon(cert.iconName, 'w-7 h-7')}
                          </div>
                        </div>
                        <div className="text-right">
                          <Sparkles className={`w-5 h-5 ${colorClasses.text} group-hover:animate-pulse`} />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className={`text-sm font-semibold ${colorClasses.text} mb-3`}>
                          {cert.subtitle}
                        </p>
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${colorClasses.gradient} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className={`${colorClasses.bg} px-3 py-1 rounded-full`}>
                          <span className={`text-xs font-bold ${colorClasses.text}`}>
                            {cert.year}
                          </span>
                        </div>
                        <CheckCircle2 className={`w-4 h-4 ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Reconocimientos */}
          <div className="mb-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="p-3 bg-yellow-100/20 dark:bg-yellow-900/30 rounded-full mr-3 backdrop-blur-sm border border-yellow-200/30 dark:border-yellow-700/30"
                  whileHover={{ scale: 1.1, rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Reconocimientos y <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Premios</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Logros que reflejan nuestro liderazgo y compromiso con la innovación educativa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {recognitions.map((recognition, index) => (
                <motion.div 
                  key={recognition.id}
                  className="relative group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <div className="text-white">
                          {renderIcon(recognition.iconName, 'w-8 h-8')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                            {recognition.title}
                          </h4>
                          <Star className="w-5 h-5 text-yellow-500 group-hover:animate-pulse" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {recognition.organization}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {recognition.year}
                          </span>
                          <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                            <Award className="w-4 h-4 mr-1" />
                            <span className="text-xs font-semibold">Certificado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Alianzas */}
          <div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="p-3 bg-emerald-100/20 dark:bg-emerald-900/30 rounded-full mr-3 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Alianzas <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Estratégicas</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Colaboraciones que fortalecen nuestra red académica y amplían oportunidades para nuestros estudiantes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerships.map((partner, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <Image
                          src={partner.logo || '/images/diplomado.webp'}
                          alt={partner.name}
                          width={48}
                          height={48}
                          className="rounded-xl transition-all duration-300 group-hover:opacity-80"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-600 w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {partner.name}
                    </h4>
                    
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {partner.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}