'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Monitor, 
  Brain, 
  Target, 
  Trophy,
  Clock,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface TeachingMethodologyProps {
  countryName: string;
}

export function TeachingMethodology({ countryName }: TeachingMethodologyProps) {
  const methodologies = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Aprendizaje Basado en Proyectos",
      description: "Los estudiantes desarrollan proyectos reales que les permiten aplicar los conocimientos teóricos en situaciones prácticas del mundo empresarial.",
      features: ["Casos reales", "Aplicación práctica", "Resultados medibles"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Aprendizaje Colaborativo",
      description: "Fomentamos el trabajo en equipo y la colaboración entre estudiantes para simular entornos laborales reales y desarrollar habilidades blandas.",
      features: ["Trabajo en equipo", "Networking", "Habilidades sociales"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "Tecnología Educativa",
      description: "Utilizamos plataformas digitales avanzadas y herramientas tecnológicas para crear experiencias de aprendizaje interactivas y personalizadas.",
      features: ["Plataforma LMS", "Aulas virtuales", "Recursos digitales"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "Pensamiento Crítico",
      description: "Desarrollamos la capacidad de análisis y resolución de problemas complejos mediante metodologías que estimulan el razonamiento lógico.",
      features: ["Análisis de casos", "Resolución de problemas", "Debate académico"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Aprendizaje Personalizado",
      description: "Adaptamos el ritmo y enfoque de enseñanza según las necesidades específicas y objetivos profesionales de cada estudiante.",
      features: ["Rutas personalizadas", "Mentoría individual", "Flexibilidad horaria"],
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Trophy className="h-7 w-7" />,
      title: "Evaluación Continua",
      description: "Sistema de evaluación integral que incluye proyectos, presentaciones, exámenes y evaluación por competencias.",
      features: ["Evaluación 360°", "Feedback constante", "Mejora continua"],
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      iconColor: "text-rose-600 dark:text-rose-400"
    }
  ];

  const learningPhases = [
    {
      phase: "Exploración",
      description: "Introducción a conceptos fundamentales y contextualización en el entorno profesional",
      duration: "Semanas 1-2",
      activities: ["Conferencias introductorias", "Lecturas dirigidas", "Debates grupales"],
      color: "from-blue-500 to-cyan-500",
      number: "01"
    },
    {
      phase: "Desarrollo",
      description: "Profundización en temas específicos con casos prácticos y simulaciones",
      duration: "Semanas 3-6",
      activities: ["Talleres prácticos", "Estudios de caso", "Simulaciones empresariales"],
      color: "from-emerald-500 to-teal-500",
      number: "02"
    },
    {
      phase: "Aplicación",
      description: "Implementación de proyectos reales y desarrollo de soluciones innovadoras",
      duration: "Semanas 7-10",
      activities: ["Proyectos integradores", "Consultoría empresarial", "Presentaciones ejecutivas"],
      color: "from-purple-500 to-indigo-500",
      number: "03"
    },
    {
      phase: "Evaluación",
      description: "Síntesis de aprendizajes y evaluación integral de competencias adquiridas",
      duration: "Semanas 11-12",
      activities: ["Evaluación final", "Presentación de proyectos", "Certificación"],
      color: "from-orange-500 to-red-500",
      number: "04"
    }
  ];

  const stats = [
    { 
      number: "95%", 
      label: "Satisfacción estudiantil",
      icon: <Award className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "87%", 
      label: "Aplicación inmediata",
      icon: <Target className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      number: "12", 
      label: "Promedio por clase",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    { 
      number: "40h", 
      label: "Práctica empresarial",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    }
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
                NUESTRA METODOLOGÍA
              </div>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Excelencia en
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Educación
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestro enfoque pedagógico combina la excelencia académica con la aplicación práctica, 
              preparando profesionales para los desafíos del mundo empresarial moderno en {countryName}.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
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
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
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

          {/* Metodologías Grid */}
          <div className="mb-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Nuestras <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Metodologías</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodologies.map((methodology, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${methodology.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`${methodology.bgColor} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`${methodology.iconColor}`}>
                          {methodology.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {methodology.title}
                        </h4>
                        <div className={`w-12 h-0.5 bg-gradient-to-r ${methodology.color} rounded-full`}></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {methodology.description}
                    </p>
                    
                    <div className="space-y-3">
                      {methodology.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 mr-3 ${methodology.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                          <span className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fases del Aprendizaje */}
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
                  className="p-3 bg-blue-100/20 dark:bg-blue-900/30 rounded-full mr-3 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Fases del <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Aprendizaje</span>
                </h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nuestro proceso educativo está estructurado en cuatro fases que garantizan 
                una progresión lógica y efectiva del aprendizaje.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    {/* Phase Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`bg-gradient-to-r ${phase.color} text-white text-2xl font-bold w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        {phase.number}
                      </div>
                      <div className={`text-xs font-semibold bg-gradient-to-r ${phase.color} text-white px-3 py-1 rounded-full`}>
                        {phase.duration}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {phase.phase}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                      {phase.description}
                    </p>
                    
                    <div className="space-y-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {activity}
                          </span>
                        </div>
                      ))}
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