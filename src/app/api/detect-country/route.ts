import { NextResponse } from 'next/server';
import { detectUserCountry } from '@/lib/api/ipapi';
import { countries } from '@/config/countries';
import { COUNTRY_DETECTION_CONFIG } from '@/config/country-detection';

// Esta API detecta el país del usuario y lo redirige apropiadamente
export async function GET() {
  try {
    // Detectar país del usuario
    const countryCode = await detectUserCountry();
    
    // Verificar si el país detectado está en nuestra lista de países soportados
    if (countryCode && countries[countryCode]) {
      // Crear respuesta con redirección
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const response = NextResponse.redirect(new URL(`/${countryCode}`, baseUrl));
      
      // Establecer cookie para futuras visitas
      response.cookies.set({
        name: COUNTRY_DETECTION_CONFIG.COOKIE.NAME,
        value: countryCode,
        path: COUNTRY_DETECTION_CONFIG.COOKIE.PATH,
        maxAge: COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE,
        sameSite: COUNTRY_DETECTION_CONFIG.COOKIE.SAME_SITE,
        secure: COUNTRY_DETECTION_CONFIG.COOKIE.SECURE,
      });
      
      return response;
    }
    
    // Si no pudimos detectar un país válido, redirigir al país por defecto
    const defaultCountry = COUNTRY_DETECTION_CONFIG.DEFAULT_COUNTRY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = NextResponse.redirect(new URL(`/${defaultCountry}`, baseUrl));
    
    // Establecer cookie con el país por defecto
    response.cookies.set({
      name: COUNTRY_DETECTION_CONFIG.COOKIE.NAME,
      value: defaultCountry,
      path: COUNTRY_DETECTION_CONFIG.COOKIE.PATH,
      maxAge: COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE,
      sameSite: COUNTRY_DETECTION_CONFIG.COOKIE.SAME_SITE,
      secure: COUNTRY_DETECTION_CONFIG.COOKIE.SECURE,
    });
    
    return response;
  } catch (error) {
    console.error('Error detecting country:', error);
    
    // En caso de error, redirigir al país por defecto
    const defaultCountry = COUNTRY_DETECTION_CONFIG.DEFAULT_COUNTRY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = NextResponse.redirect(new URL(`/${defaultCountry}`, baseUrl));
    
    // Establecer cookie con el país por defecto
    response.cookies.set({
      name: COUNTRY_DETECTION_CONFIG.COOKIE.NAME,
      value: defaultCountry,
      path: COUNTRY_DETECTION_CONFIG.COOKIE.PATH,
      maxAge: COUNTRY_DETECTION_CONFIG.COOKIE.MAX_AGE,
      sameSite: COUNTRY_DETECTION_CONFIG.COOKIE.SAME_SITE,
      secure: COUNTRY_DETECTION_CONFIG.COOKIE.SECURE,
    });
    
    return response;
  }
}
