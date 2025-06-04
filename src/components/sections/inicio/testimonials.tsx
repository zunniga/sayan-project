'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

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
  title?: string;
  subtitle?: string;
}

export function Testimonials({ 
  testimonials,
  title = "Lo que dicen nuestros estudiantes",
  subtitle = "Descubre las experiencias de quienes ya han formado parte de nuestra comunidad educativa",
}: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 25
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
      <div className="container mx-auto">
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
            <Star className="w-4 h-4 fill-current" />
            Testimonios
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
        
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_40%] xl:flex-[0_0_33.333%]"
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 mx-2 h-[450px] flex flex-col shadow-xl shadow-blue-500/5 dark:shadow-blue-500/10 border border-white/20 dark:border-slate-700/50 relative overflow-hidden group"
                  >
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/10 opacity-50"></div>
                    
                    {/* Quote Icon Background */}
                    <div className="absolute top-4 right-4 opacity-10 transition-opacity duration-300">
                      <Quote size={60} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 relative">
                          <div className="h-16 w-16 relative rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/30 transition-all duration-300">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {/* Online indicator */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {testimonial.role}
                          </p>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <Star 
                              size={18}
                              className={`${
                                i < testimonial.rating 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-gray-300 dark:text-gray-600'
                              } transition-colors duration-200`}
                            />
                          </motion.div>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {testimonial.rating}.0
                        </span>
                      </div>
                      
                      {/* Comment */}
                      <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow text-lg font-light relative">
                        <p className="pl-6 pr-2 italic">
                          {testimonial.comment}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        {/* Controls */}
        <div className="flex justify-center items-center mt-12 gap-4">
          {/* Dots */}
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-blue-600 dark:bg-blue-500 scale-110' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}