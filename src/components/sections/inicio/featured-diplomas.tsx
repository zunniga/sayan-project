'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Calendar, Clock } from 'lucide-react';

export interface FeaturedDiploma {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  duration: string;
  modality: string;
  price: string;
  slug: string;
  featured?: boolean;
}

interface FeaturedDiplomasProps {
  countryCode: string;
  diplomas: FeaturedDiploma[];
  title?: string;
  subtitle?: string;
}

export function FeaturedDiplomas({
  countryCode,
  diplomas,
  title = "Diplomados Especializados",
  subtitle = "Programas intensivos para potenciar tu desarrollo profesional en áreas específicas",
}: FeaturedDiplomasProps) {
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

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
          <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {diplomas.map((diploma) => (
            <motion.div
              key={diploma.id}
              variants={item}
              className={`group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col md:flex-row ${
                diploma.featured ? 'md:col-span-2 lg:flex-row' : ''
              }`}
            >
              <div className={`relative ${diploma.featured ? 'h-64 md:w-1/2 md:h-auto' : 'h-48 md:w-1/3 md:h-auto'}`}>
                <Image
                  src={diploma.image}
                  alt={diploma.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {diploma.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                    Destacado
                  </div>
                )}
              </div>
              <div className={`p-6 flex flex-col ${diploma.featured ? 'md:w-1/2' : 'md:w-2/3'}`}>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {diploma.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {diploma.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 mt-auto mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Inicia: {diploma.startDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{diploma.duration}</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <Award className="h-4 w-4 mr-1" />
                    <span>Modalidad: {diploma.modality}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-white/10 dark:border-white/5">
                  <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                    {diploma.price}
                  </span>
                  <Link
                    href={`/${countryCode}/diplomados/${diploma.slug}`}
                    className="flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    Ver diploma
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
          <div className="text-center mt-16">
          <Link 
            href={`/${countryCode}/diplomados`} 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-lg group"
          >
            Ver todos los diplomados
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
