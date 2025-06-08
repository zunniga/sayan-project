"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Shield } from "lucide-react";
import { countries } from "@/config/countries";
import Image from "next/image";

interface VeryCertsMessageProps {
  countryCode: string;
}

export default function VeryCertsMessage({ countryCode }: VeryCertsMessageProps) {
  const country = countries[countryCode];

  return (
    <main className="pt-32 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Verificación de Certificados
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Para verificar tus certificados de <span className="font-semibold text-blue-600 dark:text-blue-400">CIMADE {country.name}</span> utiliza nuestra plataforma oficial
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center text-white">
            <div className="mb-6">
              <Image
                src="/logos/logo_cimade.webp"
                alt="CIMADE Logo"
                width={150}
                height={40}
                className="h-12 w-auto mx-auto filter brightness-0 invert"
              />
            </div>
            <h2 className="text-3xl font-bold mb-3">
              Plataforma VeryCerts
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Tu portal oficial para la verificación de certificados académicos
            </p>
          </div>

          {/* Content */}
          <div className="p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Verificación Segura y Confiable
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Accede a la plataforma oficial de VeryCerts para verificar la autenticidad de todos tus certificados emitidos por CIMADE de manera segura, rápida y confiable.
              </p>
            </div>

            <motion.a
              href="https://www.verycerts.com/certs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-6 h-6" />
              Acceder a VeryCerts
            </motion.a>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Plataforma oficial de CIMADE para verificación de certificados
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Disponibilidad</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Confiable</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">SSL</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Seguridad</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Años</div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}