"use client";

import React from "react";
import { HeroCarousel } from "@/components/sections/inicio/hero-carousel";
import { FeaturedCourses } from "@/components/sections/inicio/featured-courses";
import { Testimonials } from "@/components/sections/inicio/testimonials";
import { Stats } from "@/components/sections/inicio/stats";
import { FeaturedDiplomas } from "@/components/sections/inicio/featured-diplomas";
import { LatestNews } from "@/components/sections/inicio/latest-news";
import { CTASection } from "@/components/sections/inicio/cta-section";

interface HomeLayoutProps {
  countryCode: string;
  countryName: string;
  heroSlides: any[];
  featuredCourses: any[];
  testimonials: any[];
  stats: any[];
  featuredDiplomas: any[];
  latestNews: any[];
  ctaBackgroundImage?: string;
}

export default function HomeLayout({
  countryCode,
  countryName,
  heroSlides,
  featuredCourses,
  testimonials,
  stats,
  featuredDiplomas,
  latestNews,
}: HomeLayoutProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mb-0">
        <HeroCarousel slides={heroSlides} countryName={countryName} />
      </section>
      {/* Featured Courses */}
      <section>
        <FeaturedCourses
          countryCode={countryCode}
          courses={featuredCourses}
          title={`Cursos Destacados en ${countryName}`}
          subtitle="Programas diseñados para potenciar tu desarrollo profesional con metodologías prácticas y aplicadas"
        />
      </section>
      {/* Testimonials */}
      <section>
        <Testimonials
          testimonials={testimonials}
          title="Lo que dicen nuestros estudiantes"
          subtitle="Descubre por qué miles de profesionales confían en CIMADE para su formación especializada"
          bgColor="dark"
        />
      </section>
      {/* Stats */}
      <section>
        <Stats
          stats={stats}
          title={`CIMADE ${countryName} en cifras`}
          subtitle="Números que reflejan nuestro compromiso con la educación de calidad"
          bgColor="gradient"
        />
      </section>
      {/* Featured Diplomas */}
      <section>
        <FeaturedDiplomas
          countryCode={countryCode}
          diplomas={featuredDiplomas}
          title={`Diplomados Especializados en ${countryName}`}
          subtitle="Programas intensivos para potenciar tu desarrollo profesional en áreas específicas"
          bgColor="light"
        />
      </section>
      {/* Latest News */}
      <section>
        <LatestNews
          countryCode={countryCode}
          news={latestNews}
          title="Últimas noticias y eventos"
          subtitle="Mantente al día con las novedades de CIMADE"
          bgColor="dark"
        />
      </section>
      {/* CTA Section */}{" "}
      <section>
        <CTASection
          countryCode={countryCode}
          title="Impulsa tu carrera profesional"
          subtitle={`Da el siguiente paso en tu formación con CIMADE ${countryName}`}
          primaryButtonText="Explorar programas"
          primaryButtonLink="/cursos"
          secondaryButtonText="Contáctanos"
          secondaryButtonLink="/contacto"
        />
      </section>
    </main>
  );
}
