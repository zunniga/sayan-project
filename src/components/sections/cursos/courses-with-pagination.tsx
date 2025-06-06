'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CourseGrid } from '@/components/ui/course-grid';
import { CourseData } from '@/types/course';
import { fetchCoursesClient } from '@/lib/api/courses-client';
import { ChevronLeft, ChevronRight, Loader2, MoreHorizontal } from 'lucide-react';

interface CoursesWithPaginationProps {
  countryCode: string;
  countryName?: string;
  initialCourses: CourseData[];
  initialPagination: {
    total: number;
    page: number;
    limit: number;
    currentPages: number;
  };
}

export function CoursesWithPagination({
  countryCode,
  countryName,
  initialCourses,
  initialPagination,
}: CoursesWithPaginationProps) {
  const [courses, setCourses] = useState<CourseData[]>(initialCourses);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const COURSES_PER_PAGE = 9;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Función para cargar cursos de una página específica
  const loadCoursesPage = async (page: number) => {
    setLoading(true);
    try {
      const offset = (page - 1) * COURSES_PER_PAGE;
      const response = await fetchCoursesClient({
        countryCode,
        limit: COURSES_PER_PAGE,
        offset,
      });
      
      setCourses(response.data);
      setPagination(response.pagination);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calcular páginas
  const totalPages = Math.ceil(pagination.total / COURSES_PER_PAGE);
  
  const getPageNumbers = () => {
    if (!isMounted) return [];
    
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    const sidePages = Math.floor((maxVisiblePages - 3) / 2);

    if (currentPage <= sidePages + 2) {
      for (let i = 1; i <= maxVisiblePages - 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - sidePages - 1) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - maxVisiblePages + 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - sidePages; i <= currentPage + sidePages; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              Todos Nuestros
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Cursos de {countryName}
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explora nuestra completa oferta educativa diseñada para impulsar tu carrera profesional.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                {pagination.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Cursos Disponibles
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                {totalPages}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Páginas
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
                {currentPage}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Página Actual
              </div>
            </div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Cargando cursos...
                </span>
              </div>
            </div>
          )}

          {/* Courses Grid */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CourseGrid 
                countryCode={countryCode} 
                courses={courses} 
              />
            </motion.div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && isMounted && (
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center mt-16 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Mobile Info */}
              <div className="sm:hidden text-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Página {currentPage} de {totalPages}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Previous */}
                <button
                  onClick={() => currentPage > 1 && loadCoursesPage(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                {/* Pages */}
                <div className="flex gap-1 sm:gap-2">
                  {getPageNumbers().map((pageNum, index) => (
                    <React.Fragment key={index}>
                      {pageNum === '...' ? (
                        <div className="flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 text-gray-400">
                          <MoreHorizontal className="w-4 h-4" />
                        </div>
                      ) : (
                        <button
                          onClick={() => typeof pageNum === 'number' && loadCoursesPage(pageNum)}
                          disabled={loading}
                          className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base min-w-[40px] sm:min-w-[48px] ${
                            pageNum === currentPage
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={() => currentPage < totalPages && loadCoursesPage(currentPage + 1)}
                  disabled={currentPage === totalPages || loading}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Desktop Info */}
              <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-400 ml-4">
                Mostrando {((currentPage - 1) * COURSES_PER_PAGE) + 1} - {Math.min(currentPage * COURSES_PER_PAGE, pagination.total)} de {pagination.total} cursos
              </div>
            </motion.div>
          )}

          {/* Empty State */}
          {!loading && courses.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-600 max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No hay cursos disponibles
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Pronto tendremos más contenido disponible
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}