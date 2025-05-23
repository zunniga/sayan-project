'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { countries, commonRoutes } from '@/config/countries';

export function Footer({ countryCode = '' }: { countryCode?: string }) {
  const pathname = usePathname();
  
  // Determinar el código de país
  let currentCountryCode = countryCode;
  if (!currentCountryCode) {
    // Si no se proporcionó en las props, detectarlo de la URL
    const countryFromPath = Object.keys(countries).find(code => 
      pathname.includes(`/${code}`)
    );
    currentCountryCode = countryFromPath || 'pe'; // Perú como valor predeterminado
  }
  
  // Obtener la configuración del país
  const country = countries[currentCountryCode];
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logos/CIMADE ICONO.svg" 
                alt="CIMADE Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-gray-800 dark:text-white">CIMADE</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Centro de Investigación y Mejoramiento Académico para el Desarrollo Educativo
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image 
                src={country.flag} 
                alt={country.name} 
                width={20} 
                height={15} 
                className="mr-1"
              />
              <span className="font-medium text-sm">{country.name}</span>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {commonRoutes.map((route, index) => (
                <li key={index}>
                  <Link 
                    href={route.href === '' ? `/${currentCountryCode}` : `/${currentCountryCode}${route.href}`} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#40C8F8]"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Contacto</h3>
            {country.address && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {country.address}
              </p>
            )}
            {country.email && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <a href={`mailto:${country.email}`} className="hover:text-primary dark:hover:text-[#40C8F8]">
                  {country.email}
                </a>
              </p>
            )}
            {country.whatsapp && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <a href={`https://wa.me/${country.whatsapp.replace(/[^0-9]/g, '')}`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-primary dark:hover:text-[#40C8F8]">
                  {country.whatsapp}
                </a>
              </p>
            )}
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Síguenos</h3>
            {country.socialMedia && (
              <div className="flex space-x-4">
                {country.socialMedia.facebook && (
                  <a href={country.socialMedia.facebook} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-[#40C8F8]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                )}
                {country.socialMedia.instagram && (
                  <a href={country.socialMedia.instagram} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-[#40C8F8]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CIMADE {country.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}