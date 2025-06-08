import { CountryParams, generateStaticParams } from './page.params';
import { countries } from '@/config/countries';
import HomeLayout from '@/components/pages/home-layout';
import { fetchCourses } from '@/lib/api/courses';
import { fetchGraduates } from '@/lib/api/graduates';

// Importar datos de país según el código de país (excepto cursos que vendrán de la API)
import {
  heroSlidesPE,
  testimonialsPE,
  statsPE,
  latestNewsPE
} from '@/mock/inicio/peru-data';

import {
  heroslidesCO,
  testimonialsCO,
  statsCO,
  latestNewsCO
} from '@/mock/inicio/colombia-data';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function CountryHomePage({ params }: CountryParams) {
  const { countryCode } = await params;
  // Obtener la configuración del país desde los parámetros
  const country = countries[countryCode];
  
    // Obtener cursos destacados desde la API
  const coursesResponse = await fetchCourses({
    countryCode,
    limit: 6,
    offset: 0,
  }).catch(() => ({
    data: [],
    pagination: { total: 0, page: 1, limit: 6, currentPages: 1 }
  }));

  // Obtener diplomados destacados desde la API
  const graduatesResponse = await fetchGraduates({
    countryCode,
    limit: 6,
    offset: 0,
  }).catch(() => ({
    data: [],
    pagination: { total: 0, limit: 6, currentPages: 1 }
  }));
  
  const featuredCourses = coursesResponse.data;
  const featuredDiplomas = graduatesResponse.data;
  
  // Determinar qué datos usar según el código de país (excepto cursos)
  let heroSlides, testimonials, stats, latestNews;
  
  if (countryCode === 'pe') {
    // Usar los datos directamente desde mock sin procesar las imágenes
    heroSlides = heroSlidesPE;
    testimonials = testimonialsPE;
    stats = statsPE;
    latestNews = latestNewsPE;
  } else if (countryCode === 'co') {
    // Usar los datos directamente desde mock sin procesar las imágenes
    heroSlides = heroslidesCO;
    testimonials = testimonialsCO;
    stats = statsCO;
    latestNews = latestNewsCO;
  } else {
    // Datos por defecto en caso de otros países que se puedan añadir en el futuro
    heroSlides = heroSlidesPE;
    testimonials = testimonialsPE;
    stats = statsPE;
    latestNews = latestNewsPE;
  }
    return (
    <HomeLayout
      countryCode={countryCode}
      countryName={country.name}
      heroSlides={heroSlides}
      featuredCourses={featuredCourses}
      testimonials={testimonials}
      stats={stats}
      featuredDiplomas={featuredDiplomas}
      latestNews={latestNews}
    />
  );
}
