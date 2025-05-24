import { COUNTRY_DETECTION_CONFIG } from '@/config/country-detection';

// Definición del tipo de respuesta de ipapi.co
export interface IpapiResponse {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_calling_code: string;
  org: string;
}

/**
 * Detecta la ubicación del usuario basada en su IP
 * Utiliza el servicio de ipapi.co con configuración desde variables de entorno
 */
export async function detectUserCountry(): Promise<string | null> {
  try {
    // Controller para timeout de la petición
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), COUNTRY_DETECTION_CONFIG.REQUEST_TIMEOUT);
    
    // Realizamos la petición a ipapi.co
    const response = await fetch(COUNTRY_DETECTION_CONFIG.API_URL, { 
      signal: controller.signal,
      next: { revalidate: COUNTRY_DETECTION_CONFIG.CACHE_DURATION },
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'CIMADE-Website/1.0'
      }
    });
    
    // Limpiar el timeout si la petición fue exitosa
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error('Error fetching country data:', response.statusText);
      return null;
    }
    
    const data: IpapiResponse = await response.json();
    
    // Validar que tenemos un código de país válido
    if (!data.country_code || data.country_code.length !== 2) {
      console.error('Invalid country code received:', data.country_code);
      return null;
    }
    
    // Retornamos el código de país en minúsculas
    return data.country_code.toLowerCase();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Country detection request timed out');
      } else {
        console.error('Error detecting user country:', error.message);
      }
    } else {
      console.error('Unknown error detecting user country:', error);
    }
    return null;
  }
}

/**
 * Obtiene el país desde cookies del navegador
 */
export function getCountryFromCookie(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cookies = document.cookie.split(';');
    const countryCookie = cookies.find(cookie => 
      cookie.trim().startsWith(`${COUNTRY_DETECTION_CONFIG.COOKIE.NAME}=`)
    );
    
    if (countryCookie) {
      return countryCookie.split('=')[1].trim();
    }
    
    return null;
  } catch (error) {
    console.error('Error reading country cookie:', error);
    return null;
  }
}
