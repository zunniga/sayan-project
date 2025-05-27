'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
    skipSnaps: false 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);
  
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
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
          <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_33.333%] px-4"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-blue-900/10 dark:bg-blue-800/10 backdrop-blur-sm rounded-xl p-8 mx-2 min-h-[320px] flex flex-col border-l-4 border-blue-600 dark:border-blue-500"
                >
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 relative rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-600/10">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <Quote size={28} className="text-blue-600 dark:text-blue-400 opacity-80 flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow italic font-light">
                    {testimonial.comment}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-12 gap-4">
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
