"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeSwitch } from "../ThemeSwitch"
import { CountrySwitcher } from "../country-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// Importamos las configuraciones de países
import { countries, commonRoutes } from "@/config/countries"
import { useTheme } from "next-themes"

export function Navbar({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname()
  const [country, setCountry] = React.useState<string>(countryCode || "pe")
   const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logos/sayan_logo_blue.png");
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Si no se proporcionó un código de país en las props, detectarlo de la ruta
    if (!countryCode) {
      // Detectar el país actual basado en la ruta
      const detectedCountry = Object.keys(countries).find((code) => pathname.includes(`/${code}`))

      if (detectedCountry) {
        setCountry(detectedCountry)
      }
    }
  }, [pathname, countryCode])

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setLogoSrc("/logos/sayan_logo_dark.png");
    } else {
      setLogoSrc("/logos/sayan_logo_blue.png");
    }
  }, [resolvedTheme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#1a2332] border-b border-[#2a3441]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8 min-w-0 flex-1">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                {mounted && (
                  <div className="relative">
                    <Image
                      src={logoSrc}
                      alt="CIMADE Logo"
                      width={160}
                      height={40}
                      className="h-8 w-auto"
                      priority
                    />
                  </div>
                )}
              </Link>

              {/* Navegación Desktop */}
              <nav className="hidden lg:flex items-center gap-1">
                {commonRoutes.map((item, index) => {
                  // Construir la URL con el prefijo del país actual
                  const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`

                  // Verificar si esta ruta está activa
                  const isActive =
                    item.href === "" ? pathname === `/${country}` : pathname === `/${country}${item.href}`

                  return (
                    <Link
                      key={index}
                      href={fullHref}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "text-[#40c8f8] bg-[#2a3441] rounded"
                          : "text-white hover:text-[#40c8f8] hover:bg-[#2a3441] rounded"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Controles de la derecha */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Aula Virtual Button */}
              <Button
                className="hidden sm:flex bg-[#40c8f8] hover:bg-[#35b3e0] text-white font-medium px-4 py-2 rounded text-sm"
                asChild
              >
                <Link href={`/${country}/aula-virtual`}>🎓 Aula Virtual</Link>
              </Button>

              {/* Country Switcher Desktop */}
              <div className="hidden sm:block">
                <CountrySwitcher currentCountryCode={country} size="default" />
              </div>

              {/* Mode Toggle */}
              <div className="flex-shrink-0">
                <ThemeSwitch />
              </div>

              {/* Botón de menú móvil */}
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden p-2 transition-all duration-200 flex-shrink-0 ${
                  isMenuOpen ? "bg-[#40c8f8] text-white hover:bg-[#35b3e0]" : "text-white hover:bg-[#2a3441]"
                }`}
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Menú móvil */}
          <div
            className={`lg:hidden transition-all duration-300 ease-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="py-4 border-t border-[#2a3441]">
              {/* Enlaces de navegación */}
              <nav className="space-y-1 mb-4">
                {commonRoutes.map((item, index) => {
                  const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`
                  const isActive =
                    item.href === "" ? pathname === `/${country}` : pathname === `/${country}${item.href}`

                  return (
                    <Link
                      key={index}
                      href={fullHref}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#2a3441] text-[#40c8f8] border-l-4 border-[#40c8f8]"
                          : "text-white hover:bg-[#2a3441] hover:text-[#40c8f8]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>

              {/* Aula Virtual Mobile */}
              <div className="px-4 mb-4">
                <Button
                  className="w-full bg-[#40c8f8] hover:bg-[#35b3e0] text-white font-medium py-3 rounded text-sm"
                  asChild
                >
                  <Link href={`/${country}/aula-virtual`}>🎓 Aula Virtual</Link>
                </Button>
              </div>

              {/* Divisor */}
              <div className="h-px bg-[#2a3441] mb-4" />

              {/* Country Switcher Mobile y controles */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap">País:</span>
                  <CountrySwitcher currentCountryCode={country} size="default" />
                </div>

                {/* Indicador de conexión */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#40c8f8] rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-xs text-gray-400 whitespace-nowrap">Conectado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
