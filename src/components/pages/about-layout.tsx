"use client";

import React from "react";
import { HeroAbout } from "@/components/sections/nosotros/hero-about";
import { MissionVisionValues } from "@/components/sections/nosotros/mission-vision-values";
import { OurTeam } from "@/components/sections/nosotros/our-team";
import { TeachingMethodology } from "@/components/sections/nosotros/teaching-methodology";
import { CertificationsRecognitions } from "@/components/sections/nosotros/certifications-recognitions";
import { SocialCommitment } from "@/components/sections/nosotros/social-commitment";
import { ContactCTA } from "@/components/sections/nosotros/contact-cta";
import type {
  HeroStat,
  TeamMember,
  Certification,
  Recognition,
  Partnership,
  SocialProgram,
  SustainabilityInitiative,
} from '@/types';

interface AboutLayoutProps {
  countryCode: string;
  countryName: string;
  heroStats: HeroStat[];
  teamMembers: TeamMember[];
  certifications: Certification[];
  recognitions: Recognition[];
  partnerships: Partnership[];
  socialPrograms: SocialProgram[];
  sustainabilityInitiatives: SustainabilityInitiative[];
}

export default function AboutLayout({
  countryCode,
  countryName,
  heroStats,
  teamMembers,
  certifications,
  recognitions,
  partnerships,
  socialPrograms,
  sustainabilityInitiatives,
}: AboutLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <HeroAbout countryName={countryName} stats={heroStats} />
      </section>

      <main className="pt-23 pb-16 px-4">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {/* Misión, Visión y Valores */}
          <section>
            <MissionVisionValues
              countryName={countryName} 
              countryCode={countryCode} 
            />
          </section>

          {/* Nuestro Equipo */}
          <section>
            <OurTeam
              countryCode={countryCode}
              countryName={countryName}
              teamMembers={teamMembers}
            />
          </section>

          {/* Metodología de Enseñanza */}
          <section>
            <TeachingMethodology countryName={countryName} />
          </section>

          {/* Certificaciones y Reconocimientos */}
          <section>
            <CertificationsRecognitions
              countryName={countryName}
              certifications={certifications}
              recognitions={recognitions}
              partnerships={partnerships}
            />
          </section>

          {/* Compromiso Social */}
          <section>
            <SocialCommitment
              socialPrograms={socialPrograms}
              sustainabilityInitiatives={sustainabilityInitiatives}
            />
          </section>

          {/* CTA Final */}
          <section>
            <ContactCTA countryCode={countryCode} />
          </section>
        </div>
      </main>
    </>
  );
}
