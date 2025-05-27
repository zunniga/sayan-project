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
    <div className="relative overflow-hidden w-full h-screen">
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
              <div className="relative w-full h-full">
                {/* Fondo de imagen con overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={slide.image}
                    alt={slide.title} 
                    fill 
                    className="object-cover"
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                </div>                
                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-16 max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 max-w-4xl"
                  >
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-blue-400 font-semibold tracking-widest uppercase text-sm md:text-base"
                    >
                      CIMADE {countryName}
                    </motion.p>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-xl md:text-3xl font-medium text-gray-200 leading-relaxed"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="pt-8"
                    >
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        {slide.ctaText}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>      
      {/* Controles de navegación */}
      <div className="absolute z-20 bottom-8 right-8 flex space-x-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollPrev} 
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollNext}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>
    </div>
  );
}
