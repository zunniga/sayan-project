"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Book,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { CourseData } from "@/types/course";
import { CourseGrid } from "@/components/ui/course-grid";

interface FeaturedCoursesProps {
  countryCode: string;
  courses: CourseData[];
}

export function FeaturedCourses({
  countryCode,
  courses,
}: FeaturedCoursesProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide flex items-center shadow-lg">
                <BookOpen className="w-5 h-5 mr-3" />
                CURSOS DESTACADOS
                <Sparkles className="w-5 h-5 ml-3" />
              </div>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Acelera tu
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Carrera Profesional
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Descubre programas diseñados por expertos de la industria para
              impulsar tu crecimiento profesional y mantenerte a la vanguardia
              en tu campo.
            </motion.p>
          </motion.div>

          {/* Course Grid Component */}
          <div className="mb-16">
            <CourseGrid countryCode={countryCode} courses={courses} />
          </div>

          {/* Botón Ver Todos los Cursos */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${countryCode}/cursos`}
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Book className="w-5 h-5 mr-3" />
              Ver Todos los Cursos
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}