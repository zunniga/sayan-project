'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { detectUserCountry, getCountryFromCookie } from '@/lib/api/ipapi';
import { countries } from '@/config/countries';
import { COUNTRY_DETECTION_CONFIG } from '@/config/country-detection';

export default function Home() {
  const router = useRouter();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function handleCountryDetection() {
      if (!isMounted) return;

      try {
        // Paso 1: Verificar cookie existente
        setLoadingProgress(20);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const savedCountry = getCountryFromCookie();
        
        if (savedCountry && countries[savedCountry]) {
          setLoadingProgress(100);
          if (isMounted) {
            router.push(`/${savedCountry}`);
          }
          return;
        }

        // Paso 2: Detectar país por IP
        setLoadingProgress(50);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const detectedCountry = await detectUserCountry();
        
        setLoadingProgress(80);
        await new Promise(resolve => setTimeout(resolve, 300));

        if (detectedCountry && countries[detectedCountry]) {
          // Guardar en cookie
          document.cookie = `${COUNTRY_DETECTION_CONFIG.COOKIE.NAME}=${detectedCountry}; path=/; max-age=${COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE}`;
          
          setLoadingProgress(100);
          if (isMounted) {
            router.push(`/${detectedCountry}`);
          }
        } else {
          // País por defecto
          const defaultCountry = COUNTRY_DETECTION_CONFIG.DEFAULT_COUNTRY;
          document.cookie = `${COUNTRY_DETECTION_CONFIG.COOKIE.NAME}=${defaultCountry}; path=/; max-age=${COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE}`;
          
          setLoadingProgress(100);
          if (isMounted) {
            router.push(`/${defaultCountry}`);
          }
        }

      } catch (error) {
        console.error('Error en la detección de país:', error);
        
        const defaultCountry = COUNTRY_DETECTION_CONFIG.DEFAULT_COUNTRY;
        document.cookie = `${COUNTRY_DETECTION_CONFIG.COOKIE.NAME}=${defaultCountry}; path=/; max-age=${COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE}`;
        
        setLoadingProgress(100);
        if (isMounted) {
          router.push(`/${defaultCountry}`);
        }
      }
    }
    
    handleCountryDetection();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <LoadingScreen progress={loadingProgress} />
    </div>
  );
}
