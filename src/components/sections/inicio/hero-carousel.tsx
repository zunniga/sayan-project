'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  countryName: string;
}

export function HeroCarousel({ slides, countryName }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-xl">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-multiply dark:mix-blend-overlay" />
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div className="relative h-[70vh] min-h-[500px] md:min-h-[600px] w-full">
                {/* Fondo de imagen con overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className="object-cover opacity-30 dark:opacity-15"
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 mix-blend-multiply dark:mix-blend-overlay" />
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-16 max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase">
                      CIMADE {countryName}
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mt-2">
                      {slide.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-4">
                      {slide.description}
                    </p>
                    <div className="pt-6">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                        {slide.ctaText}
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controles de navegación */}
      <div className="absolute z-10 bottom-6 right-6 flex space-x-3">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollPrev} 
          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollNext}
          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>
    </div>
  );
}
