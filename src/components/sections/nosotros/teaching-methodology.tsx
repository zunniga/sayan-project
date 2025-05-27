'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Monitor, 
  Brain, 
  Target, 
  Trophy,
  GraduationCap,
  Clock
} from 'lucide-react';

interface TeachingMethodologyProps {
  countryCode: string;
}

export function TeachingMethodology({ }: TeachingMethodologyProps) {
  const methodologies = [
    {
      icon: BookOpen,
      title: "Aprendizaje Basado en Proyectos",
      description: "Los estudiantes desarrollan proyectos reales que les permiten aplicar los conocimientos teóricos en situaciones prácticas del mundo empresarial.",
      features: ["Casos reales", "Aplicación práctica", "Resultados medibles"]
    },
    {
      icon: Users,
      title: "Aprendizaje Colaborativo",
      description: "Fomentamos el trabajo en equipo y la colaboración entre estudiantes para simular entornos laborales reales y desarrollar habilidades blandas.",
      features: ["Trabajo en equipo", "Networking", "Habilidades sociales"]
    },
    {
      icon: Monitor,
      title: "Tecnología Educativa",
      description: "Utilizamos plataformas digitales avanzadas y herramientas tecnológicas para crear experiencias de aprendizaje interactivas y personalizadas.",
      features: ["Plataforma LMS", "Aulas virtuales", "Recursos digitales"]
    },
    {
      icon: Brain,
      title: "Pensamiento Crítico",
      description: "Desarrollamos la capacidad de análisis y resolución de problemas complejos mediante metodologías que estimulan el razonamiento lógico.",
      features: ["Análisis de casos", "Resolución de problemas", "Debate académico"]
    },
    {
      icon: Target,
      title: "Aprendizaje Personalizado",
      description: "Adaptamos el ritmo y enfoque de enseñanza según las necesidades específicas y objetivos profesionales de cada estudiante.",
      features: ["Rutas personalizadas", "Mentoría individual", "Flexibilidad horaria"]
    },
    {
      icon: Trophy,
      title: "Evaluación Continua",
      description: "Sistema de evaluación integral que incluye proyectos, presentaciones, exámenes y evaluación por competencias.",
      features: ["Evaluación 360°", "Feedback constante", "Mejora continua"]
    }
  ];

  const learningPhases = [
    {
      phase: "Exploración",
      description: "Introducción a conceptos fundamentales y contextualización en el entorno profesional",
      duration: "Semanas 1-2",
      activities: ["Conferencias introductorias", "Lecturas dirigidas", "Debates grupales"]
    },
    {
      phase: "Desarrollo",
      description: "Profundización en temas específicos con casos prácticos y simulaciones",
      duration: "Semanas 3-6",
      activities: ["Talleres prácticos", "Estudios de caso", "Simulaciones empresariales"]
    },
    {
      phase: "Aplicación",
      description: "Implementación de proyectos reales y desarrollo de soluciones innovadoras",
      duration: "Semanas 7-10",
      activities: ["Proyectos integradores", "Consultoría empresarial", "Presentaciones ejecutivas"]
    },
    {
      phase: "Evaluación",
      description: "Síntesis de aprendizajes y evaluación integral de competencias adquiridas",
      duration: "Semanas 11-12",
      activities: ["Evaluación final", "Presentación de proyectos", "Certificación"]
    }
  ];

  const stats = [
    { number: "95%", label: "Satisfacción estudiantil" },
    { number: "87%", label: "Aplicación inmediata" },
    { number: "12", label: "Promedio por clase" },
    { number: "40h", label: "Práctica empresarial" }
  ];
  return (
    <section className="py-20 md:py-2">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="p-3 bg-blue-100/20 dark:bg-blue-900/30 rounded-full mr-3 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Metodología de Enseñanza
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestro enfoque pedagógico combina la excelencia académica con la aplicación práctica, 
            preparando profesionales para los desafíos del mundo empresarial moderno.
          </p>
        </motion.div>        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>        
        {/* Metodologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methodologies.map((methodology, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-600/20 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100/20 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
                  <methodology.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {methodology.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {methodology.description}
              </p>
              
              <div className="space-y-2">
                {methodology.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>       
        {/* Fases del Aprendizaje */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="p-2 bg-blue-100/20 dark:bg-blue-900/30 rounded-lg mr-3 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Fases del Aprendizaje
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Nuestro proceso educativo está estructurado en cuatro fases que garantizan 
              una progresión lógica y efectiva del aprendizaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div 
                  className="relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {phase.phase}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/30 px-2 py-1 rounded backdrop-blur-sm">
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-1">
                    {phase.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-300"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
