'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronRight, Clock, ArrowRight, Newspaper, TrendingUp, Sparkles } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
}

interface LatestNewsProps {
  countryCode: string;
  news: NewsItem[];
}

export function LatestNews({
  countryCode,
  news,
}: LatestNewsProps) {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
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
                <Newspaper className="w-5 h-5 mr-3" />
                NOTICIAS Y ACTUALIZACIONES
                <TrendingUp className="w-5 h-5 ml-3" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              Últimas
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Novedades
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10"
            >
              Mantente informado sobre las últimas tendencias educativas, eventos especiales
              y actualizaciones importantes que transforman el panorama profesional.
            </motion.p>
          </motion.div>

          {/* Grid de noticias */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl flex flex-col h-full relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Image container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {item.category}
                  </div>
                  
                  {/* Article number */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  {/* Meta info */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-2xl">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="font-medium">{item.date}</span>
                    </div>
                    <span className="mx-3 text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                      <span className="font-medium">{item.readTime} min</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-black text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-start">
                    <Link 
                      href={`/${countryCode}/noticias/${item.slug}`} 
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed flex-grow">
                    {item.excerpt}
                  </p>

                  {/* Read more link */}
                  <div className="pt-6 mt-4 border-t border-gray-200 dark:border-gray-600">
                    <Link
                      href={`/${countryCode}/noticias/${item.slug}`}
                      className="flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    >
                      Leer artículo completo
                      <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Newspaper className="w-6 h-6 text-blue-500" />
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {/* Ver todas button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/${countryCode}/noticias`} 
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Newspaper className="w-5 h-5 mr-3" />
              Ver Todas las Noticias
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}