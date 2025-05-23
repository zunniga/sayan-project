'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { countries } from '@/config/countries';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const defaultCountry = 'pe';
    router.push(`/${defaultCountry}`);
    
    // Alternativa: se podría implementar una detección de país basada en IP
    // utilizando una API como ipapi.co, ipstack, etc.
    /*
    async function detectCountry() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country.toLowerCase();
        
        // Verificar si tenemos el país en nuestras configuraciones
        if (countries[countryCode]) {
          router.push(`/${countryCode}`);
        } else {
          router.push(`/${defaultCountry}`); // País por defecto si no está soportado
        }
      } catch (error) {
        console.error('Error detectando país:', error);
        router.push(`/${defaultCountry}`);
      }
    }
    
    detectCountry();
    */
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse">Redireccionando...</div>
    </div>
  );
}
