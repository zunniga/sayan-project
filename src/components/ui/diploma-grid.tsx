"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Calendar, Star, ArrowRight, Award, Medal, Crown, ChevronLeft, ChevronRight } from "lucide-react"
import type { GraduateData } from "@/types/graduate"
import { formatCurrency, formatDate } from "@/utils/format"

interface DiplomaGridProps {
  countryCode: string
  diplomas: GraduateData[]
  viewMode?: "grid" | "list"
}

// Componente para cada tarjeta de diploma
function DiplomaCard({
  diploma,
  index,
  countryCode,
  isListView = false,
}: {
  diploma: GraduateData
  index: number
  countryCode: string
  isListView?: boolean
}) {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      variants={item}
      className={`group relative p-2 h-full ${isListView ? "mb-6" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect - purple theme para diplomados */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12a9be]/10 to-[#0d617b]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div
        className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#12a9be] dark:hover:border-[#b6d900] transition-all duration-500 hover:shadow-2xl h-full backdrop-blur-sm ${
          isListView ? "flex flex-col md:flex-row" : "flex flex-col"
        }`}
      >
        {/* Imagen */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 flex-shrink-0 ${
            isListView ? "md:w-80 h-64 md:h-auto" : "h-48 w-full"
          }`}
        >
          <Image
            src="/peru/course/diplomado.webp"
            alt={diploma.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0d617b] to-[#12a9be] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
            <Medal className="w-3 h-3 inline mr-1" />
            Diplomado
          </div>
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
            #{index + 1}
          </div>
        </div>

        {/* Contenido */}
        <div className={`p-6 flex flex-col flex-grow ${isListView ? "md:p-8" : ""}`}>
          {/* Header badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#0d617b] dark:bg-cyan-700/60 text-gray-100 dark:text-white px-3 py-1 rounded-full text-xs font-bold">
              ESPECIALIZACIÓN
            </span>
            <Star className="w-5 h-5 text-yellow-500 group-hover:animate-pulse" />
          </div>

          {/* Título */}
          <h3
            className={`font-black text-gray-900 dark:text-white mb-3 group-hover:text-[#0d617b] dark:group-hover:text-[#b6d900] transition-colors duration-300 leading-tight flex items-start ${
              isListView ? "text-2xl min-h-[4rem]" : "text-xl min-h-[3.5rem]"
            }`}
          >
            {diploma.name}
          </h3>

          {/* Stats */}
          <div
            className={`bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 mb-4 space-y-3 flex-shrink-0 ${
              isListView ? "md:mb-6" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4 mr-2 text-[#b6d900]" />
                <span className="font-semibold text-sm">Duración</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white bg-[#b6d900]/20 dark:bg-[#b6d900]/30 px-3 py-1 rounded-full text-xs">
                {diploma.corporation[0]?.hours || "180"} hrs
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="h-4 w-4 mr-2 text-[#12a9be]" />
                <span className="font-semibold text-sm">Inicio</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white bg-[#12a9be]/20 dark:bg-[#12a9be]/30 px-3 py-1 rounded-full text-xs">
                {formatDate(diploma.startDate)}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`flex items-center pt-4 border-t border-gray-200 dark:border-gray-600 mt-auto ${
              isListView ? "justify-between" : "justify-between"
            }`}
          >
            <div className="flex-1">
              <div className="font-black text-lg bg-gradient-to-r from-[#0d617b] to-[#12a9be] bg-clip-text text-transparent">
                {formatCurrency(diploma.corporation[0]?.priceGraduate || "0", countryCode)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Inversión total</div>
            </div>
            <Link
              href={`/${countryCode}/diplomados/${diploma.id}`}
              className={`bg-gradient-to-r from-[#0d617b] to-[#12a9be] hover:from-[#0d617b]/90 hover:to-[#12a9be]/90 text-white font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl group/link transform hover:scale-105 text-sm ${
                isListView ? "ml-4" : ""
              }`}
            >
              Ver diplomado
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Crown className="w-6 h-6 text-[#b6d900]" />
        </div>
      </div>
    </motion.div>
  )
}

export function DiplomaGrid({ countryCode, diplomas, viewMode = "grid" }: DiplomaGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [diplomaGroups, setDiplomaGroups] = useState<GraduateData[][]>([])
  const [isReady, setIsReady] = useState(false)

  // Todos los hooks deben estar aquí, antes de cualquier lógica condicional
  useEffect(() => {
    if (diplomas && Array.isArray(diplomas) && diplomas.length > 0) {
      const groups = []
      for (let i = 0; i < diplomas.length; i += 3) {
        groups.push(diplomas.slice(i, i + 3))
      }
      setDiplomaGroups(groups)
      setIsReady(true)
    } else {
      setIsReady(true) // También marcar como ready si no hay diplomas
    }
  }, [diplomas])

  // Autoplay solo para vista de rejilla
  useEffect(() => {
    if (viewMode === "grid" && !isHovered && diplomaGroups.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % diplomaGroups.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, diplomaGroups.length, viewMode])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % diplomaGroups.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + diplomaGroups.length) % diplomaGroups.length)
  }

  // Verificar si no hay diplomas
  const hasNoDiplomas = !diplomas || !Array.isArray(diplomas) || diplomas.length === 0

  // Mostrar loading mientras se preparan los datos
  if (!isReady) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#12a9be]"></div>
      </div>
    )
  }

  if (hasNoDiplomas) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-16 text-center border border-gray-200 dark:border-gray-700">
          <Award className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Próximamente nuevos diplomados</h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
            Estamos preparando programas especializados de alta calidad para tu crecimiento profesional.
          </p>
        </div>
      </motion.div>
    )
  }

  // Renderizar vista de lista
  if (viewMode === "list") {
    return (
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {diplomas.map((diploma, index) => (
          <DiplomaCard key={diploma.id} diploma={diploma} index={index} countryCode={countryCode} isListView={true} />
        ))}
      </motion.div>
    )
  }

  // Renderizar vista de rejilla (carrusel)
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {diplomaGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.map((diploma, index) => (
                  <DiplomaCard
                    key={diploma.id}
                    diploma={diploma}
                    index={groupIndex * 3 + index}
                    countryCode={countryCode}
                    isListView={false}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botones de navegación */}
      {diplomaGroups.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0d617b] to-[#12a9be] hover:from-[#0d617b]/90 hover:to-[#12a9be]/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0d617b] to-[#12a9be] hover:from-[#0d617b]/90 hover:to-[#12a9be]/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {diplomaGroups.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {diplomaGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-gradient-to-r from-[#0d617b] to-[#12a9be]" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
