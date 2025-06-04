"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Book, Calendar, Clock } from "lucide-react";
import { CourseData } from "@/types/course";
import { formatDate } from '@/utils/format';

interface FeaturedCoursesProps {
  countryCode: string;
  courses: CourseData[];
  title?: string;
  subtitle?: string;
}

export function FeaturedCourses({
  countryCode,
  courses,
  title = "Cursos Destacados",
  subtitle = "Explora nuestros cursos más populares diseñados para potenciar tu desarrollo profesional",
}: FeaturedCoursesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto ">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Book className="h-4 w-4" />
            Cursos Destacados
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Grid de cursos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses && Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
              <motion.div
                key={course.id}
                variants={item}
                className="group bg-white dark:bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/peru/course/diplomado.webp"
                    alt={course.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105 p-3"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Curso
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
                    {course.corporation[0]?.institute?.name ||
                      "Descripción del curso no disponible."}
                  </p>

                  {/* Stats */}
                  <div className="rounded-xl mb-6 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium">Duración</span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {course.corporation[0]?.hours || "No especificado"} horas
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-green-600" />
                        <span className="font-medium">Inicio</span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {formatDate(course.startDate)}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600 mt-auto">
                    <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
                      Inscríbete
                    </span>
                    <Link
                      href={`/${countryCode}/cursos/${course.id}`}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors group/link"
                    >
                      Ver detalles
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Book className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No hay cursos disponibles en este momento.
              </p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href={`/${countryCode}/cursos`}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-lg group"
          >
            Ver todos los cursos
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}