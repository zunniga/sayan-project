import { NextRequest, NextResponse } from 'next/server';
import { countries } from '@/config/countries';
import { COUNTRY_DETECTION_CONFIG } from '@/config/country-detection';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // No aplicar redirección si ya estamos en una ruta de país válida
  const supportedCountries = Object.keys(countries);
  const isCountryRoute = supportedCountries.some(country => 
    pathname.startsWith(`/${country}`)
  );
  
  if (isCountryRoute) {
    return NextResponse.next();
  }

  // No aplicar redirección si estamos en rutas del sistema
  const systemPaths = ['/api', '/_next', '/favicon.ico', '/logos', '/flags'];
  if (systemPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // Conseguir country code de las cookies si existe
  const countryCode = request.cookies.get(COUNTRY_DETECTION_CONFIG.COOKIE.NAME)?.value;

  // Si ya tenemos un country code válido en cookies, redirigir
  if (countryCode && countries[countryCode]) {
    const url = request.nextUrl.clone();
    url.pathname = `/${countryCode}${pathname === '/' ? '' : pathname}`;
    
    return NextResponse.redirect(url);
  }

  // Si estamos en la raíz y no hay cookie, permitir que cargue la página de detección
  if (pathname === '/') {
    return NextResponse.next();
  }
  
  // Para cualquier otra ruta sin país válido, redirigir a la raíz
  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.redirect(url);
}

// Aplicar el middleware a todas las rutas excepto las del sistema
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logos (logo files)
     * - flags (flag files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logos|flags).*)',
  ],
};
