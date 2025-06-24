import React from 'react';
import { CoursesWithPagination } from '@/components/sections/cursos/courses-with-pagination';
import type { CourseData } from '@/types/course';

interface CourseLayoutProps {
  countryCode: string;
  countryName: string;
  featuredCourses: CourseData[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    currentPages: number;
  };
}

export default function CourseLayout({
  countryCode,
  countryName,
  featuredCourses,
  pagination,
}: CourseLayoutProps) {
  return (
    <>
       <main className="pt-23 pb-16 px-4 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 dark:from-[#0a0f1c] dark:via-[#0a0f1c] dark:to-[#0a0f1c]">
        <div className="max-w-[1200px] mx-auto space-y-16 ">
          <section>
            {/* Courses Section with Pagination */}
            <CoursesWithPagination 
              countryCode={countryCode}
              countryName={countryName}
              initialCourses={featuredCourses}
              initialPagination={pagination}
            />
          </section>
        </div>
      </main>
    </>
  );
}