"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";
import { countries } from "@/config/countries";
import { usePathname } from "next/navigation";

interface ContactCTAProps {
  countryCode: string;
}

export function ContactCTA({ countryCode }: ContactCTAProps) {
  const pathname = usePathname();
  // Determinar el código de país
  let currentCountryCode = countryCode;
  if (!currentCountryCode) {
    // Si no se proporcionó en las props, detectarlo de la URL
    const countryFromPath = Object.keys(countries).find((code) =>
      pathname.includes(`/${code}`)
    );
    currentCountryCode = countryFromPath || "pe"; // Perú como valor predeterminado
  }

  // Obtener la configuración del país
  const country = countries[currentCountryCode];

  const contactMethods = [
    {
      icon: Phone,
      title: "Llámanos",
      description: "Habla directamente con nuestros asesores académicos",
      value: country.whatsapp,
      action: `tel:${country.whatsapp}`,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
      features: [
        "Asesoría inmediata",
        "Horario extendido",
        "Especialistas disponibles",
      ],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata a tus consultas",
      value: "Chatear ahora",
      action: `https://wa.me/${country.whatsapp}`,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
      features: ["Chat en vivo", "Respuesta 24/7", "Multimedia compartido"],
    },
    {
      icon: Mail,
      title: "Email",
      description: "Información detallada por correo electrónico",
      value: country.email,
      action: `mailto:${country.email}`,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
      features: [
        "Información completa",
        "Documentos adjuntos",
        "Seguimiento detallado",
      ],
    },
    {
      icon: Calendar,
      title: "Agenda una Cita",
      description: "Visita personalizada en nuestras instalaciones",
      value: "Agendar reunión",
      action: "/contacto#agendar",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
      features: [
        "Reunión personal",
        "Tour instalaciones",
        "Plan personalizado",
      ],
    },
  ];

  const trustIndicators = [
    {
      icon: Users,
      text: "5,000+ graduados exitosos",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      text: "4.9/5 satisfacción estudiantil",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      text: "Certificación ISO 9001",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      text: "Respuesta en < 2 horas",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                CONTÁCTANOS AHORA
              </div>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              ¿Listo para Transformar
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                tu Futuro?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Da el primer paso hacia una carrera exitosa. Nuestro equipo está
              aquí para acompañarte en cada etapa de tu proceso educativo en{" "}
              {country.name}.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`bg-gradient-to-r ${indicator.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3`}
                  >
                    <indicator.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`${method.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className={`w-7 h-7 ${method.textColor}`} />
                    </div>
                    <Sparkles
                      className={`w-5 h-5 ${method.textColor} group-hover:animate-pulse`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle
                          className={`w-4 h-4 mr-3 ${method.textColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={method.action}
                    target={
                      method.action.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      method.action.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className={`w-full bg-gradient-to-r ${method.color} text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">{method.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nuestras Oficinas en {country.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Horarios de Atención
                  </h4>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Lunes a Viernes: 8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Sábados: 9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      <span>WhatsApp: 24/7</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    ¿Qué Puedes Esperar?
                  </h4>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      <span>Asesoría académica personalizada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      <span>Plan de estudios detallado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      <span>Opciones de financiamiento</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
