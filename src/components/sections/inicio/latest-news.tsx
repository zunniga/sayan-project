'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronRight, Clock, ArrowRight } from 'lucide-react';

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
  title?: string;
  subtitle?: string;
}

export function LatestNews({
  countryCode,
  news,
  title = "Novedades y noticias",
  subtitle = "Mantente al día con nuestras últimas actualizaciones y eventos",
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

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link
              href={`/${countryCode}/noticias`}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors group"
            >
              Ver todas las noticias
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
          <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {news.map((item) => (
            <motion.article
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/20 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.readTime} min. de lectura</span>
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Link href={`/${countryCode}/noticias/${item.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <div className="pt-4 p-6 border-t border-white/10 dark:border-white/5">
                <Link
                  href={`/${countryCode}/noticias/${item.slug}`}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group/link"
                >
                  Leer artículo completo
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-12 md:hidden">
          <Link 
            href={`/${countryCode}/noticias`} 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
          >
            Ver todas las noticias
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
