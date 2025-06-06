"use client";

import React from "react";
import { HeroCarousel } from "@/components/sections/inicio/hero-carousel";
import { FeaturedCourses } from "@/components/sections/inicio/featured-courses";
import { Testimonials } from "@/components/sections/inicio/testimonials";
import { Stats } from "@/components/sections/inicio/stats";
import { FeaturedDiplomas } from "@/components/sections/inicio/featured-diplomas";
import { LatestNews } from "@/components/sections/inicio/latest-news";
import { CTASection } from "@/components/sections/inicio/cta-section";
import type { 
  HeroSlide, 
  Testimonial,
  NewsItem 
} from '@/types';
import type { CourseData } from '@/types/course';
import type { GraduateData } from '@/types/graduate';
import type { StatItem } from '@/components/sections/inicio/stats';

interface HomeLayoutProps {
  countryCode: string;
  countryName: string;
  heroSlides: HeroSlide[];
  featuredCourses: CourseData[];
  testimonials: Testimonial[];
  stats: StatItem[];
  featuredDiplomas: GraduateData[];
  latestNews: NewsItem[];
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
    <>
      {/* Hero Section - Full screen */}
      <section className="relative w-full h-screen">
        <HeroCarousel slides={heroSlides} countryName={countryName} />
      </section>
      
      {/* Rest of content with proper spacing */}
      <main className="pt-16 pb-16 px-4">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {/* Featured Courses */}
          <section>
            <FeaturedCourses
              countryCode={countryCode}
              courses={featuredCourses}
            />
          </section>
          {/* Featured Diplomas */}
          <section>
            <FeaturedDiplomas
              countryCode={countryCode}
              graduates={featuredDiplomas}
            />
          </section>
          {/* Stats */}
          <section>
            <Stats
              stats={stats}
            />
          </section>
          {/* Testimonials */}
          <section>
            <Testimonials
              testimonials={testimonials}
            />
          </section>
          {/* Latest News */}
          <section>
            <LatestNews
              countryCode={countryCode}
              news={latestNews}
            />
          </section>
          {/* CTA Section */}
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
        </div>
      </main>
    </>
  );
}
