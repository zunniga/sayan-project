"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { countries, commonRoutes } from "@/config/countries";
import { Mail, Phone, Heart, FileText } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Footer({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logos/sayan_logo_blue.png");
  // Determinar el código de país
  let currentCountryCode = countryCode;
  if (!currentCountryCode) {
    const countryFromPath = Object.keys(countries).find((code) =>
      pathname.includes(`/${code}`)
    );
    currentCountryCode = countryFromPath || "pe";
  }

  useEffect(() => {
    // Esperar a que el componente esté montado para evitar problemas de hidratación
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setLogoSrc("/logos/sayan_logo_dark.png");
    } else {
      setLogoSrc("/logos/sayan_logo_blue.png");
    }
  }, [theme, systemTheme]);

  // Obtener la configuración del país
  const country = countries[currentCountryCode];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#0a0f1c] text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
        <Image
          src="/peru/hero/sayan7.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient
                id="grid-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#40C8F8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1E5AC8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Grid pattern */}
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 20}
                  y1="0"
                  x2={i * 20}
                  y2="400"
                  stroke="url(#grid-gradient)"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1={i * 20}
                  x2="400"
                  y2={i * 20}
                  stroke="url(#grid-gradient)"
                  strokeWidth="0.5"
                />
              </g>
            ))}
            {/* Curved lines */}
            <path
              d="M 0 200 Q 200 100 400 200 Q 200 300 0 200"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="1"
            />
            <path
              d="M 100 0 Q 200 200 300 400"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Link href="/" className="inline-block group">
                <Image
                  src={logoSrc}
                  alt="SAYAN Logo"
                  width={180}
                  height={45}
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
                />
              </Link>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm">
              &quot;Gracias por visitarnos. SAYAN, estamos comprometidos con tu
              desarrollo profesional. ¡Esperamos verte pronto!&quot;
            </p>

            {/* Información de contacto */}
            <div className="space-y-4">
              {country.whatsapp && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-[#40C8F8] flex-shrink-0" />
                  <a
                    href={`https://wa.me/${country.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300"
                  >
                    {country.whatsapp}
                  </a>
                </div>
              )}

              {country.email && (
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#40C8F8] flex-shrink-0" />
                  <a
                    href={`mailto:${country.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300"
                  >
                    {country.email}
                  </a>
                </div>
              )}

              {/* Badge del país - mover aquí */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative">
                  <Image
                    src={country.flag || "/placeholder.svg"}
                    alt={country.name}
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  <div className="absolute inset-0 rounded-sm ring-1 ring-black/20 dark:ring-white/20" />
                </div>
                <span className="font-semibold text-sm text-gray-900 dark:text-white">
                  {country.name}
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-8 uppercase tracking-wider">
              Navegación
            </h3>

            <ul className="space-y-4">
              {commonRoutes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={
                      route.href === ""
                        ? `/${currentCountryCode}`
                        : `/${currentCountryCode}${route.href}`
                    }
                    className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300 text-sm block"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legalidad */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-8 uppercase tracking-wider">
              Legalidad
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${currentCountryCode}/terminos`}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300 text-sm block"
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentCountryCode}/privacidad`}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300 text-sm block"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentCountryCode}/cookies`}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#40C8F8] transition-colors duration-300 text-sm block"
                >
                  Configuración de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Libro de Reclamaciones y Redes Sociales */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-8 uppercase tracking-wider">
              Libro de Reclamaciones
            </h3>

            {/* Caja destacada para libro de reclamaciones */}
            <div className="border border-dashed border-[#40C8F8] rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-[#40C8F8]" />
                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                  Presenta tu reclamo
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 leading-relaxed">
                Registra tu queja o sugerencia de manera oficial
              </p>
              <Link
                href={`/${currentCountryCode}/libro-de-reclamaciones`}
                className="inline-block w-full bg-[#40C8F8] hover:bg-[#2C72FF] text-white text-center py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Acceder al Libro
              </Link>
            </div>

            {/* Redes Sociales */}
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">
              Redes Sociales
            </h4>

            {country.socialMedia && (
              <div className="flex gap-3">
                {country.socialMedia.facebook && (
                  <a
                    href={country.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SocialIcon
                      type="facebook"
                      size={18}
                      className="text-white"
                    />
                  </a>
                )}

                {country.socialMedia.instagram && (
                  <a
                    href={country.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#FD1D1D] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SocialIcon
                      type="instagram"
                      size={18}
                      className="text-white"
                    />
                  </a>
                )}

                {country.socialMedia.youtube && (
                  <a
                    href={country.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-[#FF0000] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SocialIcon
                      type="youtube"
                      size={18}
                      className="text-white"
                    />
                  </a>
                )}

                {country.socialMedia.tiktok && (
                  <a
                    href={country.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <SocialIcon
                      type="tiktok"
                      size={18}
                      className="text-white"
                    />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Separador */}
        <div className="my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        </div>

        {/* Footer inferior */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>
              © {new Date().getFullYear()} - Todos los derechos reservados.
            </span>
            <span className="font-semibold text-[#40C8F8]">SAYAN</span>
          </div>

          {/* Mensaje especial */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>para la educación</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
