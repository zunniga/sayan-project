import { CountryParams, generateStaticParams } from './page.params';
import { countries } from '@/config/countries';
import HomeLayout from '@/components/pages/home-layout';

// Importar datos de país según el código de país
import {
  heroSlidesPE,
  featuredCoursesPE,
  testimonialsPE,
  statsPE,
  featuredDiplomasPE,
  latestNewsPE
} from '@/mock/inicio/peru-data';

import {
  heroslidesCO,
  featuredCoursesCO,
  testimonialsCO,
  statsCO,
  featuredDiplomasCO,
  latestNewsCO
} from '@/mock/inicio/colombia-data';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function CountryHomePage({ params }: CountryParams) {
  const { countryCode } = await params;
    // Obtener la configuración del país desde los parámetros
  const country = countries[countryCode];
    // Determinar qué datos usar según el código de país
  let heroSlides, featuredCourses, testimonials, stats, featuredDiplomas, latestNews;
  
  if (countryCode === 'pe') {
    // Usar los datos directamente desde mock sin procesar las imágenes
    heroSlides = heroSlidesPE;
    featuredCourses = featuredCoursesPE;
    testimonials = testimonialsPE;
    stats = statsPE;
    featuredDiplomas = featuredDiplomasPE;
    latestNews = latestNewsPE;
  } else if (countryCode === 'co') {
    // Usar los datos directamente desde mock sin procesar las imágenes
    heroSlides = heroslidesCO;
    featuredCourses = featuredCoursesCO;
    testimonials = testimonialsCO;
    stats = statsCO;
    featuredDiplomas = featuredDiplomasCO;
    latestNews = latestNewsCO;
  } else {
    // Datos por defecto en caso de otros países que se puedan añadir en el futuro
    heroSlides = heroSlidesPE;
    featuredCourses = featuredCoursesPE;
    testimonials = testimonialsPE;
    stats = statsPE;
    featuredDiplomas = featuredDiplomasPE;
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
