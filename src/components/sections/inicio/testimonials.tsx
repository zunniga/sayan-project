'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ 
  testimonials,
}: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 25
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header más compacto */}
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide flex items-center shadow-lg">
                <Heart className="w-5 h-5 mr-3" />
                TESTIMONIOS
                <Sparkles className="w-5 h-5 ml-3" />
              </div>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4 leading-tight"
            >
              Historias de
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Éxito Real
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Descubre cómo nuestros estudiantes han transformado sus carreras con nuestros programas.
            </motion.p>
          </motion.div>
          
          {/* Carousel Container optimizado */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_90%] lg:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
                  >
                    <motion.div 
                      className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-6 mx-3 h-[380px] flex flex-col shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                      
                      {/* Quote Icon Background */}
                      <div className="absolute top-4 right-4 opacity-[0.03] dark:opacity-[0.08]">
                        <Quote size={60} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header compacto */}
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0 relative">
                            <div className="h-12 w-12 relative rounded-xl overflow-hidden shadow-md ring-2 ring-blue-100 dark:ring-blue-900/30">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {/* Status indicator */}
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-800 shadow-sm">
                              <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>
                            </div>
                          </div>
                          <div className="ml-3 flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium truncate">
                              {testimonial.role}
                            </p>
                            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold truncate">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        
                        {/* Rating compacto */}
                        <div className="flex items-center justify-between mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-xl">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                size={16}
                                className={`${
                                  i < testimonial.rating 
                                    ? 'text-yellow-500 fill-yellow-500' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                            {testimonial.rating}.0 ★
                          </span>
                        </div>
                        
                        {/* Comment optimizado */}
                        <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow text-sm relative mb-4">
                          <div className="absolute -left-1 -top-1 text-blue-500 opacity-20">
                            <Quote size={16} />
                          </div>
                          <p className="pl-4 italic font-medium line-clamp-6">
                            {testimonial.comment}
                          </p>
                        </blockquote>

                        {/* Footer compacto */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-600">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                            VERIFICADO
                          </span>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Heart className="w-3 h-3 mr-1 text-red-500" />
                            Real
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        
          {/* Controls */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'w-6 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full' 
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400 rounded-full'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}