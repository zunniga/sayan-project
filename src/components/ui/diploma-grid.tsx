"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Star,
  ArrowRight,
  Award,
  Medal,
  Crown,
} from "lucide-react";
import { GraduateData } from "@/types/graduate";
import { formatCurrency, formatDate } from "@/utils/format";

interface DiplomaGridProps {
  countryCode: string;
  diplomas: GraduateData[];
}

export function DiplomaGrid({ countryCode, diplomas }: DiplomaGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {diplomas && Array.isArray(diplomas) && diplomas.length > 0 ? (
        diplomas.map((diploma, index) => (
          <motion.div
            key={diploma.id}
            variants={item}
            className="group relative h-full"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect - purple theme para diplomados */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:shadow-2xl h-full flex flex-col backdrop-blur-sm">
              {/* Imagen - altura fija */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 flex-shrink-0">
                <Image
                  src="/peru/course/diplomado.webp"
                  alt={diploma.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                  <Medal className="w-3 h-3 inline mr-1" />
                  Diplomado
                </div>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                  #{index + 1}
                </div>
              </div>

              {/* Contenido - flex-grow para ocupar espacio disponible */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Header badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold">
                    ESPECIALIZACIÓN
                  </span>
                  <Star className="w-5 h-5 text-yellow-500 group-hover:animate-pulse" />
                </div>

                {/* Título - altura consistente */}
                <h3 className="font-black text-xl text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-start">
                  {diploma.name}
                </h3>

                {/* Stats - altura fija */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 mb-4 space-y-3 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="font-semibold text-sm">Duración</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-xs">
                      {diploma.corporation[0]?.hours || "180"} hrs
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
                      <span className="font-semibold text-sm">Inicio</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-xs">
                      {formatDate(diploma.startDate)}
                    </span>
                  </div>
                </div>

                {/* Footer - siempre al final */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600 mt-auto">
                  <div className="flex-1">
                    <div className="font-black text-lg bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                      {formatCurrency(diploma.corporation[0]?.priceGraduate || "0", countryCode)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Inversión total
                    </div>
                  </div>
                  <Link
                    href={`/${countryCode}/diplomados/${diploma.id}`}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl group/link transform hover:scale-105 text-sm"
                  >
                    Ver diplomado
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Crown className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.div
          className="col-span-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-16 text-center border border-gray-200 dark:border-gray-700">
            <Award className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Próximamente nuevos diplomados
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
              Estamos preparando programas especializados de alta calidad para tu crecimiento profesional.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
