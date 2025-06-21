"use client";

import React from "react";
import HeroCarousel from "@/components/sections/inicio/hero-carousel";
import { FeaturedCourses } from "@/components/sections/inicio/featured-courses";
import { Testimonials } from "@/components/sections/inicio/testimonials";
import ContactPage from "@/components/pages/contact-page";
// import { Stats } from "@/components/sections/inicio/stats";
import { FeaturedDiplomas } from "@/components/sections/inicio/featured-diplomas";
import { FirstSection } from "@/components/sections/inicio/about-section";

// import { LatestNews } from "@/components/sections/inicio/latest-news";
// import { CTASection } from "@/components/sections/inicio/cta-section";
import type { HeroSlide, Testimonial, NewsItem } from "@/types";
import type { CourseData } from "@/types/course";
import type { GraduateData } from "@/types/graduate";
import type { StatItem } from "@/components/sections/inicio/stats";

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
  featuredCourses,
  testimonials,
  featuredDiplomas,
}: HomeLayoutProps) {
  return (
    <>
      {/* Hero Section - Full screen */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 dark:from-[#0a0f1c]/90 dark:via-[#0a0f1c]/90 dark:to-[#0a0f1c]/90 relative w-full h-screen">
        <HeroCarousel />
      </section>

      {/* Rest of content with proper spacing */}
      <main className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 dark:from-[#0a0f1c]/90 dark:via-[#0a0f1c]/90 dark:to-[#0a0f1c]/90 pt-16 pb-16 px-4">
        <div className=" max-w-[1200px] mx-auto ">
          <section className="">
            <FeaturedDiplomas
              countryCode={countryCode}
              graduates={featuredDiplomas}
            />
          </section>

          {/* NOSOTROS COMPONENT */}
          <section className="">
            <FirstSection />
          </section>

          <section className="">
            <FeaturedCourses
              countryCode={countryCode}
              courses={featuredCourses}
            />
          </section>

          <section>
            <Testimonials testimonials={testimonials} />
          </section>

          {/*CONTACTS */}

          <section>
            <ContactPage countryCode={countryCode} />
          </section>
        </div>
      </main>
    </>
  );
}
