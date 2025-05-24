'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { getCountryFromCookie } from '@/lib/api/ipapi';
import { countries } from '@/config/countries';
import { COUNTRY_DETECTION_CONFIG } from '@/config/country-detection';

export default function Home() {
  const router = useRouter();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Inicializando...');

  useEffect(() => {
    let isMounted = true;

    async function handleCountryDetection() {
      if (!isMounted) return;

      try {
        // Paso 1: Verificar si ya tenemos una cookie de país
        setLoadingMessage('Verificando configuración...');
        setLoadingProgress(20);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const savedCountry = getCountryFromCookie();
        
        if (savedCountry && countries[savedCountry]) {
          setLoadingMessage('País detectado, redirigiendo...');
          setLoadingProgress(80);
          
          await new Promise(resolve => setTimeout(resolve, 800));
          
          if (isMounted) {
            setLoadingProgress(100);
            setTimeout(() => {
              router.push(`/${savedCountry}`);
            }, 500);
          }
          return;
        }

        // Paso 2: No hay cookie, detectar país por IP
        setLoadingMessage('Detectando tu ubicación...');
        setLoadingProgress(40);
        
        await new Promise(resolve => setTimeout(resolve, 800));

        // Paso 3: Realizar detección
        setLoadingMessage('Configurando experiencia personalizada...');
        setLoadingProgress(70);
        
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Paso 4: Redirigir a la API de detección
        setLoadingMessage('Finalizando...');
        setLoadingProgress(90);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (isMounted) {
          setLoadingProgress(100);
          // Usar window.location para forzar la navegación a la API
          setTimeout(() => {
            window.location.href = '/api/detect-country';
          }, 300);
        }

      } catch (error) {
        console.error('Error en la detección de país:', error);
        
        if (isMounted) {
          setLoadingMessage('Redirigiendo al sitio principal...');
          setLoadingProgress(100);
          
          setTimeout(() => {
            router.push(`/${COUNTRY_DETECTION_CONFIG.DEFAULT_COUNTRY}`);
          }, 1000);
        }
      }
    }
    
    handleCountryDetection();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <LoadingScreen 
        message={loadingMessage}
        progress={loadingProgress}
      />
    </div>
  );
}
