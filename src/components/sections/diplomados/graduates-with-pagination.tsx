"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiplomaGridMain } from "@/components/ui/diploma-grid-main";
import { GraduateSkeleton } from "@/components/ui/skeleton/graduate-skeleton";
import type { GraduateData } from "@/types/graduate";
import { fetchGraduatesClient } from "@/lib/api/graduates-client";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GraduatesWithPaginationProps {
  countryCode: string;
  countryName?: string;
  initialGraduates: GraduateData[];
  initialPagination: {
    total: number;
    limit: number;
    currentPages: number;
  };
}

const gradients = {
  primary: "from-[#12a9be] to-[#0d617b]",
  accent: "from-[#0d617b] to-[#12a9be]",
  hero: "from-[#080717]/70 to-[#0d617b]/50 dark:from-[#080717]/80 dark:to-[#12a9be]/40",
};

export function GraduatesWithPagination({
  countryCode,
  countryName,
  initialGraduates,
  initialPagination,
}: GraduatesWithPaginationProps) {
  const [graduates, setGraduates] = useState<GraduateData[]>(initialGraduates);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isVisible, setIsVisible] = useState(false);

  const GRADUATES_PER_PAGE = 6;

  // Fix hydration issue
  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
  }, []);

  // Función para cargar diplomados de una página específica
  const loadGraduatesPage = async (page: number) => {
    setLoading(true);
    try {
      const offset = (page - 1) * GRADUATES_PER_PAGE;
      const response = await fetchGraduatesClient({
        countryCode,
        limit: GRADUATES_PER_PAGE,
        offset,
      });

      setGraduates(response.data);
      setPagination(response.pagination);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error loading graduates:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calcular páginas
  const totalPages = Math.ceil(pagination.total / GRADUATES_PER_PAGE);

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
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - sidePages - 1) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - maxVisiblePages + 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - sidePages; i <= currentPage + sidePages; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Estructura exacta de la imagen */}
        <div className="relative w-full h-[400px] mb-12  overflow-hidden rounded-2xl">
          <Image
            src="/peru/diploma/graduate-bg.jpg"
            alt="Graduados"
            fill
            className="object-cover"
            priority
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b ${gradients.hero}`}
          ></div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-4xl md:text-6xl font-bold mb-2 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Diplomados con
            </motion.div>

            <motion.div
              className="text-4xl md:text-6xl font-bold mb-8 text-[#b6d900]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              enfoque profesional en {countryName}
            </motion.div>

            <motion.p
              className="text-lg text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explora nuestra completa oferta educativa diseñada para impulsar
              tu carrera profesional.
            </motion.p>
          </motion.div>
        </div>

        {/* Toolbar - Estructura exacta de la imagen */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* Left side - View mode buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                viewMode === "grid"
                  ? `bg-gradient-to-r ${gradients.primary} text-white`
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Rejilla
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                viewMode === "list"
                  ? `bg-gradient-to-r ${gradients.primary} text-white`
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <List className="w-4 h-4 mr-2" />
              Lista
            </Button>
          </div>

          {/* Right side - Search and Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <Input
                placeholder="Busca tu diplomado..."
                className="
        pl-10 pr-4 py-2 w-80
        bg-white dark:bg-[#181f2a]
        rounded-lg
        border border-gray-300 dark:border-gray-700
        focus:ring-1 focus:ring-[#12a9be] dark:focus:ring-[#b6d900]
        text-gray-800 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500
        transition-colors
      "
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="
      flex items-center gap-2
      bg-white dark:bg-[#181f2a]
      rounded-lg
      border border-gray-300 dark:border-gray-700
      px-4 py-2
      text-gray-700 dark:text-gray-100 hover:bg-[#12a9be]
      dark:hover:bg-[#12a9be]
      transition-colors
    "
            >
              <Filter className="w-4 h-4" />
              Filtro
            </Button>
          </div>
        </motion.div>

        {/* Graduates Grid - Usando el diseño exacto de la imagen */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GraduateSkeleton count={GRADUATES_PER_PAGE} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DiplomaGridMain
              countryCode={countryCode}
              diplomas={graduates}
              viewMode={viewMode}
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
                onClick={() =>
                  currentPage > 1 && loadGraduatesPage(currentPage - 1)
                }
                disabled={currentPage === 1 || loading}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/90 dark:bg-slate-800/90 border border-gray-200/50 dark:border-gray-600/50 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              {/* Pages */}
              <div className="flex gap-1 sm:gap-2">
                {getPageNumbers().map((pageNum, index) => (
                  <React.Fragment key={index}>
                    {pageNum === "..." ? (
                      <div className="flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 text-gray-400">
                        <MoreHorizontal className="w-4 h-4" />
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          typeof pageNum === "number" &&
                          loadGraduatesPage(pageNum)
                        }
                        disabled={loading}
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base min-w-[40px] sm:min-w-[48px] shadow-lg ${
                          pageNum === currentPage
                            ? `bg-gradient-to-r ${gradients.primary} text-white hover:from-[#0d617b] hover:to-[#12a9be]`
                            : "bg-white/90 dark:bg-slate-800/90 border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                onClick={() =>
                  currentPage < totalPages && loadGraduatesPage(currentPage + 1)
                }
                disabled={currentPage === totalPages || loading}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/90 dark:bg-slate-800/90 border border-gray-200/50 dark:border-gray-600/50 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base shadow-lg"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop Info */}
            <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-400 ml-4">
              Mostrando {(currentPage - 1) * GRADUATES_PER_PAGE + 1} -{" "}
              {Math.min(currentPage * GRADUATES_PER_PAGE, pagination.total)} de{" "}
              {pagination.total} diplomados
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && graduates.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 sm:p-12 border border-gray-200/50 dark:border-gray-600/50 max-w-md mx-auto shadow-lg">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                No hay diplomados disponibles
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Pronto tendremos más programas especializados disponibles
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
