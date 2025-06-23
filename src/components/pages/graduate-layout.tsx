import React from 'react';
import { GraduatesWithPagination } from '@/components/sections/diplomados/graduates-with-pagination';
import type { GraduateData } from '@/types/graduate';

interface GraduateLayoutProps {
  countryCode: string;
  countryName: string;
  featuredGraduates: GraduateData[];
  pagination: {
    total: number;
    limit: number;
    currentPages: number;
  };
}

export default function GraduateLayout({
  countryCode,
  countryName,
  featuredGraduates,
  pagination,
}: GraduateLayoutProps) {
  return (
    <>
      <main className="pt-23 pb-16 px-4 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 dark:from-[#0a0f1c] dark:via-[#0a0f1c] dark:to-[#0a0f1c]">
        <div className="max-w-[1200px] mx-auto space-y-16 ">
          <section>
            {/* Graduates Section with Pagination */}
            <GraduatesWithPagination 
              countryCode={countryCode}
              countryName={countryName}
              initialGraduates={featuredGraduates}
              initialPagination={pagination}
            />
          </section>
        </div>
      </main>
    </>
  );
}