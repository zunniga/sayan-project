"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { CountrySwitcher } from "../country-switcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Importamos las configuraciones de países
import {
  countries,
  countryOptions,
  commonRoutes,
  getCountryFromPath,
} from "@/config/countries";

export function Navbar({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [country, setCountry] = React.useState<string>(countryCode || "pe");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  // Obtener la ruta actual sin el prefijo del país
  const getCurrentPath = () => {
    // Extraer la parte de la ruta que corresponde a la sección (después del código del país)
    for (const code of Object.keys(countries)) {
      if (pathname.startsWith(`/${code}`)) {
        // Si la ruta es exactamente '/{countryCode}', retornar ruta vacía (página principal)
        if (pathname === `/${code}`) {
          return "";
        }
        // Si no, retornar la parte después del código del país
        return pathname.replace(`/${code}`, "");
      }
    }

    // Si no tiene prefijo de país, devolver la ruta tal cual
    return pathname;
  };

  return (
    <div className="w-full px-4 py-4 fixed top-0 left-0 right-0 z-50">
      <nav className="relative max-w-[1200px] mx-auto rounded-full bg-white/80 dark:bg-[#0a0a14]/90 backdrop-blur-md border border-gray-100 dark:border-white/5 shadow-lg">
        <div className="flex h-14 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center gap-2">
              {mounted && (
                <>
                  <Image
                    src="/logos/CIMADE ICONO.svg"
                    alt="CIMADE Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    priority
                  />
                  <span className="font-bold text-xl text-gray-800 dark:text-white">
                    CIMADE
                  </span>
                </>
              )}
            </Link>{" "}
            <nav className="hidden md:flex gap-6 lg:gap-8">
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
                    className={`relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-[#40C8F8] transition-all duration-300 
                    ${
                      isActive
                        ? "text-primary dark:text-[#40C8F8] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary dark:after:bg-[#40C8F8] after:rounded-full"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>          {/* Controles de la derecha (país y modo) */}
          <div className="flex items-center gap-2 sm:gap-4 pl-2 sm:pl-4 border-l border-gray-200 dark:border-white/10">
            <div className="hidden sm:block">
              <CountrySwitcher currentCountryCode={country} size="default" />
            </div>
            <ModeToggle />

            {/* Botón de menú móvil */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {/* Menú móvil */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 py-4 px-6 bg-white dark:bg-[#0a0a14] border-t border-gray-100 dark:border-white/5 rounded-b-2xl shadow-lg transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-4">
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
                  className={`flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-[#40C8F8] transition-all duration-300 
                  ${
                    isActive
                      ? "text-primary dark:text-[#40C8F8] font-semibold"
                      : ""
                  }`}
                >
                  {isActive && (
                    <div className="w-1 h-4 bg-primary dark:bg-[#40C8F8] rounded-full mr-2"></div>
                  )}
                  {item.label}
                </Link>
              );
            })}            <div className="sm:hidden pt-3 mt-2 flex items-center gap-2 border-t border-gray-100 dark:border-white/10">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                País:
              </span>
              <CountrySwitcher currentCountryCode={country} size="default" />
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
