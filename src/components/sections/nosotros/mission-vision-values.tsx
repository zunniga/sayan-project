"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Star,
  Lightbulb,
  Users,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";

interface MissionVisionValuesProps {
  countryName: string;
  countryCode: string;
}

export function MissionVisionValues({ countryName, countryCode }: MissionVisionValuesProps) {
  const values = [
    {
      icon: <Star className="h-7 w-7" />,
      title: "Excelencia",
      description:
        "Comprometidos con los más altos estándares de calidad en todos nuestros programas educativos.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Innovación",
      description:
        "Incorporamos constantemente nuevas metodologías y tecnologías para mejorar el aprendizaje.",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Compromiso",
      description:
        "Dedicados al éxito profesional y personal de cada uno de nuestros estudiantes.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Integridad",
      description:
        "Actuamos con transparencia, honestidad y responsabilidad en todas nuestras acciones.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Inclusión",
      description:
        "Promovemos un ambiente diverso e inclusivo donde todos puedan desarrollar su potencial.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Responsabilidad Social",
      description:
        "Contribuimos al desarrollo de la sociedad a través de la educación y la formación profesional.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      iconColor: "text-rose-600 dark:text-rose-400"
    },
  ];

  return (
    <section className="py-24 md:py-32">
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                QUIÉNES SOMOS
              </div>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Misión, Visión
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                y Valores
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Los pilares fundamentales que guían nuestro trabajo y definen
              nuestro compromiso con la educación de calidad en {countryName}.
            </motion.p>
          </div>

          {/* Misión y Visión */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Misión */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl mr-6 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Nuestra Misión
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Nuestro propósito es ofrecer servicios especializados a empresas e individuos,
                  destacando la excelencia de nuestros ponentes con tecnología y un equipo 
                  comprometido con una educación de primer nivel.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Nuestra Visión
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Ser una empresa líder, innovadora y reconocida a nivel nacional, estableciendo
                  un liderazgo en capacitaciones, recursos humanos y ofrecer servicio de calidad
                  en consultoría.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Valores */}
          <div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Nuestros <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Valores</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`${value.bgColor} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`${value.iconColor}`}>
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {value.title}
                        </h4>
                        <div className={`w-12 h-0.5 bg-gradient-to-r ${value.color} rounded-full`}></div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-24 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  ¿Listo para transformar tu futuro?
                </motion.h3>
                <motion.p
                  className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Únete a CIMADE {countryName} y experimenta una educación que va más allá de lo convencional. 
                  Descubre programas diseñados para líderes del mañana.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                    href={`/${countryCode}/cursos`}
                  >
                    Explorar Cursos
                  </Link>
                  <Link
                    className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                    href={`/${countryCode}/contacto`}
                  >
                    Solicitar Información
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