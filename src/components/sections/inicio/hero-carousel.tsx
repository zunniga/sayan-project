"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
        <div className="h-px bg-gradient-to-r from-blue-400/20 via-blue-300/60 to-blue-400/20"></div>
      </div>

      {/* Elemento decorativo lateral izquierdo */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/80 to-transparent"></div>
      </div>

      {/* Elemento decorativo lateral derecho */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/80 to-transparent"></div>
      </div>

      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div className="relative w-full h-full">
                {/* Fondo de imagen con overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4 sm:space-y-6 max-w-2xl lg:max-w-4xl"
                  >
                    {/* Badge con línea decorativa */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                      <p className="text-blue-400 font-semibold tracking-widest uppercase text-xs sm:text-sm">
                        CIMADE {countryName}
                      </p>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="pt-4 sm:pt-6"
                    >
                      <Link
                        href={slide.ctaLink}
                        className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative">{slide.ctaText}</span>
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 relative" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación mejorados */}
      <div className="absolute z-20 bottom-6 right-6 flex space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <ArrowLeft className="h-4 w-4 relative z-10" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <ArrowRight className="h-4 w-4 relative z-10" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores de slides elegantes */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-6 z-20">
          <div className="flex items-center space-x-2">
            <div className="text-white/60 text-sm font-medium">
              {String(selectedIndex + 1).padStart(2, "0")}
            </div>
            <div className="w-16 h-px bg-white/20 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ease-out"
                style={{
                  width: `${((selectedIndex + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
            <div className="text-white/40 text-sm">
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      )}

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="h-px bg-gradient-to-r from-blue-400/20 via-blue-300/60 to-blue-400/20"></div>
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      </div>
    </div>
  );
}
