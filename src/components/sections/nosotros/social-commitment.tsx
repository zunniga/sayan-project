'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { renderIconLegacy } from '@/lib/icon-utils';
import type { SocialProgram, SustainabilityInitiative, ImpactNumber } from '@/types';

interface SocialCommitmentProps {
  socialPrograms: SocialProgram[];
  sustainabilityInitiatives: SustainabilityInitiative[];
  impactNumbers: ImpactNumber[];
}

export function SocialCommitment({ 
  socialPrograms, 
  sustainabilityInitiatives, 
  impactNumbers,
}: SocialCommitmentProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600", 
      purple: "from-purple-500 to-purple-600",
      red: "from-red-500 to-red-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  const renderIcon = (iconName: string, className?: string) => {
    return renderIconLegacy(iconName, className);
  };
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Compromiso Social
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            En CIMADE creemos que la educación debe ser una fuerza transformadora que contribuya 
            al desarrollo sostenible de nuestras comunidades y el bienestar social.
          </p>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {impactNumbers.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {renderIcon(stat.iconName, "w-8 h-8 text-white")} {/* Use renderIcon */}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Programs */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Programas de Impacto Social
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Iniciativas que reflejan nuestro compromiso con el desarrollo integral de la sociedad.
            </p>
          </motion.div>          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20 dark:border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-6">
                  <div className={`p-4 bg-gradient-to-br ${getColorClasses(program.color)} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {renderIcon(program.iconName, "w-8 h-8 text-white")} {/* Use renderIcon */}
                  </div>
                  <div className="ml-6 flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {program.title}
                    </h4>
                    <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-3">
                      {program.impact}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="mb-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sostenibilidad y Medio Ambiente
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprometidos con la protección del medio ambiente y la educación en sostenibilidad.
            </p>
          </motion.div>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20 dark:border-white/10 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(initiative.iconName, "w-6 h-6 text-white")} {/* Use renderIcon */}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white ml-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {initiative.title}
                  </h4>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                
                <div className="space-y-3">
                  {initiative.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{action}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
