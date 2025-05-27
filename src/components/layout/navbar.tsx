"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { CountrySwitcher } from "../country-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Importamos las configuraciones de países
import {
  countries,
  commonRoutes,
} from "@/config/countries";

export function Navbar({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname();
  const [country, setCountry] = React.useState<string>(countryCode || "pe");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Si no se proporcionó un código de país en las props, detectarlo de la ruta
    if (!countryCode) {
      // Detectar el país actual basado en la ruta
      const detectedCountry = Object.keys(countries).find((code) =>
        pathname.includes(`/${code}`)
      );

      if (detectedCountry) {
        setCountry(detectedCountry);
      }
    }
  }, [pathname, countryCode]);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="w-full px-2 sm:px-4 py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav 
        className={`relative max-w-[1200px] mx-auto rounded-xl sm:rounded-2xl transition-all duration-500 ease-out ${
          scrolled 
            ? "bg-white/95 dark:bg-[#0a0a14]/95 backdrop-blur-xl shadow-2xl border border-gray-200/20 dark:border-white/10" 
            : "bg-white/80 dark:bg-[#0a0a14]/80 backdrop-blur-md shadow-lg border border-gray-100/30 dark:border-white/5"
        }`}
      >
        {/* Gradiente decorativo superior */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1E5AC8]/5 via-transparent to-[#40C8F8]/5 pointer-events-none" />
        
        <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-12 min-w-0 flex-1">
            {/* Logo - Tamaño fijo sin hover */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              {mounted && (
                <div className="relative">
                  <Image
                    src="/logos/logo_cimade.webp"
                    alt="CIMADE Logo"
                    width={160}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                    priority
                  />
                </div>
              )}
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {commonRoutes.map((item, index) => {
                // Construir la URL con el prefijo del país actual
                const fullHref =
                  item.href === "" ? `/${country}` : `/${country}${item.href}`;

                // Verificar si esta ruta está activa
                const isActive =
                  item.href === ""
                    ? pathname === `/${country}`
                    : pathname === `/${country}${item.href}`;

                return (
                  <Link
                    key={index}
                    href={fullHref}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group whitespace-nowrap ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#1E5AC8] to-[#2C72FF] shadow-lg shadow-[#1E5AC8]/25"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Efecto de hover para elementos inactivos */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E5AC8]/10 to-[#40C8F8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Controles de la derecha */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Divisor - Oculto en móviles pequeños */}
            <div className="hidden md:block w-px h-6 bg-gradient-to-b from-transparent via-gray-300 dark:via-white/20 to-transparent" />
            
            {/* Country Switcher Desktop - Responsive */}
            <div className="hidden sm:block">
              <CountrySwitcher currentCountryCode={country} size="default" />
            </div>
            
            {/* Mode Toggle */}
            <div className="flex-shrink-0">
              <ModeToggle />
            </div>

            {/* Botón de menú móvil */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                isMenuOpen 
                  ? "bg-[#1E5AC8] text-white hover:bg-[#2C72FF]" 
                  : "hover:bg-gray-400 dark:hover:bg-white/10"
              }`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-0 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white dark:bg-[#0a0a14] backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/20 dark:border-white/10 shadow-2xl overflow-hidden">
            {/* Gradiente decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E5AC8]/5 via-transparent to-[#40C8F8]/5 pointer-events-none" />
            
            <div className="relative p-4 sm:p-6">
              {/* Enlaces de navegación */}
              <nav className="space-y-1 mb-4 sm:mb-6">
                {commonRoutes.map((item, index) => {
                  const fullHref =
                    item.href === "" ? `/${country}` : `/${country}${item.href}`;
                  const isActive =
                    item.href === ""
                      ? pathname === `/${country}`
                      : pathname === `/${country}${item.href}`;

                  return (
                    <Link
                      key={index}
                      href={fullHref}
                      className={`flex items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#1E5AC8] to-[#2C72FF] text-white shadow-lg shadow-[#1E5AC8]/25"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8]"
                      }`}
                    >
                      {isActive && (
                        <div className="w-1.5 h-4 bg-white rounded-full mr-3 shadow-sm flex-shrink-0" />
                      )}
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Divisor con gradiente */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-4 sm:mb-6" />

              {/* Country Switcher Mobile y controles */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    País:
                  </span>
                  <CountrySwitcher currentCountryCode={country} size="default" />
                </div>
                
                {/* Indicador de conexión */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Conectado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}