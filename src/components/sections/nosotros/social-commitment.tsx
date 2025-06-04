'use client';

import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Leaf, 
  HandHeart, 
  Globe, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  TreePine,
  Recycle,
  Award,
} from 'lucide-react';
import { renderIconLegacy } from '@/lib/icon-utils';
import type { SocialProgram, SustainabilityInitiative } from '@/types';

interface SocialCommitmentProps {
  socialPrograms: SocialProgram[];
  sustainabilityInitiatives: SustainabilityInitiative[];
}

export function SocialCommitment({ 
  socialPrograms, 
  sustainabilityInitiatives,
}: SocialCommitmentProps) {
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
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        gradient: "from-purple-500 to-pink-600",
        shadow: "shadow-purple-500/20"
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-600 dark:text-red-400",
        border: "border-red-200 dark:border-red-800",
        gradient: "from-red-500 to-pink-600",
        shadow: "shadow-red-500/20"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800",
        gradient: "from-orange-500 to-red-600",
        shadow: "shadow-orange-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const renderIcon = (iconName: string, className?: string) => {
    return renderIconLegacy(iconName, className);
  };

  const impactStats = [
    { 
      number: "15K+", 
      label: "Beneficiarios",
      description: "Personas impactadas",
      icon: <Users className="h-6 w-6" />,
      color: "from-red-500 to-pink-500"
    },
    { 
      number: "25", 
      label: "Proyectos Sociales",
      description: "Iniciativas activas",
      icon: <HandHeart className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "8", 
      label: "Comunidades",
      description: "Alcance territorial",
      icon: <Globe className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      number: "3", 
      label: "Años de Impacto",
      description: "Trabajo continuo",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        className="absolute right-10 w-24 h-24 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-xl"
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
              <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                IMPACTO SOCIAL
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-red-800 to-pink-900 dark:from-white dark:via-red-200 dark:to-pink-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Compromiso
              <br />
              <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text">
                Social
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              En CIMADE creemos que la educación debe ser una fuerza transformadora que contribuya 
              al desarrollo sostenible de nuestras comunidades y el bienestar social.
            </motion.p>
          </div>

          {/* Impact Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {impactStats.map((stat, index) => (
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
                    <div className="text-gray-900 dark:text-white font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-xs">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Programs */}
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
                  className="p-3 bg-red-100/20 dark:bg-red-900/30 rounded-full mr-3 backdrop-blur-sm border border-red-200/30 dark:border-red-700/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <HandHeart className="w-8 h-8 text-red-600 dark:text-red-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Programas de <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Impacto Social</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Iniciativas que reflejan nuestro compromiso con el desarrollo integral de la sociedad.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialPrograms.map((program, index) => {
                const colorClasses = getColorClasses(program.color);
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <div className={`${colorClasses.bg} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={colorClasses.text}>
                            {renderIcon(program.iconName, 'w-7 h-7')}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                            {program.title}
                          </h4>
                          <div className={`text-sm font-semibold ${colorClasses.text} mb-3`}>
                            {program.impact}
                          </div>
                          <div className={`w-16 h-0.5 bg-gradient-to-r ${colorClasses.gradient} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                        </div>
                        <Sparkles className={`w-5 h-5 ${colorClasses.text} group-hover:animate-pulse`} />
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {program.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className={`${colorClasses.bg} px-3 py-1 rounded-full`}>
                          <span className={`text-xs font-bold ${colorClasses.text}`}>
                            Activo
                          </span>
                        </div>
                        <CheckCircle className={`w-4 h-4 ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sustainability Initiatives */}
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
                  <Leaf className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Sostenibilidad y <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Medio Ambiente</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprometidos con la protección del medio ambiente y la educación en sostenibilidad.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {sustainabilityInitiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <div className="text-white">
                          {renderIcon(initiative.iconName, 'w-6 h-6')}
                        </div>
                      </div>
                      <TreePine className="w-5 h-5 text-emerald-500 group-hover:animate-pulse" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {initiative.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="space-y-3">
                      {initiative.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <ArrowRight className="w-3 h-3 text-emerald-500 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            En Progreso
                          </span>
                        </div>
                        <Recycle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
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