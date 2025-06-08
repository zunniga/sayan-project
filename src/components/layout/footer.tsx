"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { countries, commonRoutes } from "@/config/countries";
import { Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icon";

export function Footer({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname();

  // Determinar el código de país
  let currentCountryCode = countryCode;
  if (!currentCountryCode) {
    // Si no se proporcionó en las props, detectarlo de la URL
    const countryFromPath = Object.keys(countries).find((code) =>
      pathname.includes(`/${code}`)
    );
    currentCountryCode = countryFromPath || "pe"; // Perú como valor predeterminado
  }

  // Obtener la configuración del país
  const country = countries[currentCountryCode];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-[#0a0a14] dark:to-gray-800 border-t border-gray-200/50 dark:border-white/10 overflow-hidden">
      {/* Gradientes decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E5AC8]/5 via-transparent to-[#40C8F8]/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E5AC8] via-[#2C72FF] to-[#40C8F8]" />
      
      <div className="container mx-auto px-6 py-12 relative">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6 group">
              <Link href="/" className="inline-block">
                <Image
                  src="/logos/logo_cimade.webp"
                  alt="CIMADE Logo"
                  width={180}
                  height={45}
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Centro de Investigación y Mejoramiento Académico para el Desarrollo Educativo
            </p>
            
            {/* Badge del país */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
              <div className="relative">
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={24}
                  height={18}
                  className="rounded-sm"
                />
                <div className="absolute inset-0 rounded-sm ring-1 ring-black/10" />
              </div>
              <span className="font-semibold text-sm text-gray-800 dark:text-white">
                {country.name}
              </span>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 relative">
              Enlaces Rápidos
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1E5AC8] to-[#40C8F8] rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {commonRoutes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={
                      route.href === ""
                        ? `/${currentCountryCode}`
                        : `/${currentCountryCode}${route.href}`
                    }
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-[#1E5AC8] dark:group-hover:bg-[#40C8F8] transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {route.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 relative">
              Contacto
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1E5AC8] to-[#40C8F8] rounded-full" />
            </h3>
            
            <div className="space-y-4">
              {country.address && (
                <div className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1E5AC8]/10 to-[#40C8F8]/10 rounded-lg flex items-center justify-center group-hover:from-[#1E5AC8]/20 group-hover:to-[#40C8F8]/20 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-[#1E5AC8] dark:text-[#40C8F8]" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                    {country.address}
                  </p>
                </div>
              )}
              
              {country.email && (
                <div className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1E5AC8]/10 to-[#40C8F8]/10 rounded-lg flex items-center justify-center group-hover:from-[#1E5AC8]/20 group-hover:to-[#40C8F8]/20 transition-all duration-300">
                    <Mail className="w-4 h-4 text-[#1E5AC8] dark:text-[#40C8F8]" />
                  </div>
                  <a
                    href={`mailto:${country.email}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300 hover:underline"
                  >
                    {country.email}
                  </a>
                </div>
              )}
              
              {country.whatsapp && (
                <div className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1E5AC8]/10 to-[#40C8F8]/10 rounded-lg flex items-center justify-center group-hover:from-[#1E5AC8]/20 group-hover:to-[#40C8F8]/20 transition-all duration-300">
                    <Phone className="w-4 h-4 text-[#1E5AC8] dark:text-[#40C8F8]" />
                  </div>
                  <a
                    href={`https://wa.me/${country.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300 hover:underline flex items-center gap-1"
                  >
                    {country.whatsapp}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Columna 4: Redes sociales y información adicional */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 relative">
              Síguenos
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1E5AC8] to-[#40C8F8] rounded-full" />
            </h3>
            
            {country.socialMedia && (
              <div className="flex gap-3 mb-8 flex-wrap">
                {country.socialMedia.facebook && (
                  <a
                    href={country.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br from-[#1877F2] to-[#42A5F5] transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700"  
                  >
                    <SocialIcon 
                      type="facebook" 
                      size={20} 
                      className="text-[#1877F2]" 
                    />
                  </a>
                )}
                
                {country.socialMedia.instagram && (
                  <a
                    href={country.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br from-[#E1306C] to-[#FD1D1D] transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700"  
                  >
                    <SocialIcon 
                      type="instagram" 
                      size={20}
                    />
                  </a>
                )}

                {country.socialMedia.youtube && (
                  <a
                    href={country.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br from-[#FF0000] to-[#FF0000] transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <SocialIcon 
                      type="youtube" 
                      size={20} 
                      className="text-[#FF0000] group-hover:text-white" 
                    />
                  </a>
                )}

                {country.socialMedia.tiktok && (
                  <a
                    href={country.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br from-[#000000] to-[#000000] transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <SocialIcon 
                      type="tiktok" 
                      size={20} 
                      className="text-black group-hover:text-white" 
                    />
                  </a>
                )}
              </div>
            )}

            {/* Información adicional */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-[#1E5AC8]/5 to-[#40C8F8]/5 rounded-xl border border-[#1E5AC8]/10 dark:border-[#40C8F8]/20">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                  Educación Continua
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transformando vidas a través de la educación de calidad y el desarrollo profesional.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Plataforma activa 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador con gradiente */}
        <div className="my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>
        </div>

        {/* Sección inferior */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} CIMADE {country.name}.</span>
            <span>Todos los derechos reservados.</span>
          </div>

          {/* Enlaces legales */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href={`/${currentCountryCode}/privacidad`}
              className="text-gray-500 dark:text-gray-400 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300"
            >
              Privacidad
            </Link>
            <Link
              href={`/${currentCountryCode}/terminos`}
              className="text-gray-500 dark:text-gray-400 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href={`/${currentCountryCode}/cookies`}
              className="text-gray-500 dark:text-gray-400 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300"
            >
              Cookies
            </Link>
            
            <Link
              href={`/${currentCountryCode}/libro-de-reclamaciones`}
              className="text-gray-500 dark:text-gray-400 hover:text-[#1E5AC8] dark:hover:text-[#40C8F8] transition-colors duration-300"
            >
              Libro de Reclamaciones
            </Link>
          </div>

          {/* Mensaje especial */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>para la educación</span>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-[#1E5AC8]/10 to-[#40C8F8]/10 rounded-full blur-xl opacity-50 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-[#40C8F8]/10 to-[#1E5AC8]/10 rounded-full blur-xl opacity-50 animate-pulse hidden lg:block"></div>
      </div>
    </footer>
  );
}