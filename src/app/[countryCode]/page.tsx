import { CountryParams, generateStaticParams } from './page.params';
import { countries } from '@/config/countries';
import HomeLayout from '@/components/layout/home-layout';
import { getImageUrl } from '@/lib/image-utils';

// Importar datos de país según el código de país
import {
  heroSlidesPE,
  featuredCoursesPE,
  testimonialsPE,
  statsPE,
  featuredDiplomasPE,
  latestNewsPE
} from '@/mock/peru-data';

import {
  heroslidesCO,
  featuredCoursesCO,
  testimonialsCO,
  statsCO,
  featuredDiplomasCO,
  latestNewsCO
} from '@/mock/colombia-data';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

// Procesar las imágenes con placeholders
const processImages = (data: any[], property: string = 'image', textProperty: string = 'title'): any[] => {
  return data.map(item => ({
    ...item,
    [property]: getImageUrl(item[property], item[textProperty] || 'CIMADE')
  }));
};

export default function CountryHomePage({ params }: CountryParams) {
  // Obtener la configuración del país desde los parámetros
  const country = countries[params.countryCode];
  
  // Determinar qué datos usar según el código de país
  let heroSlides, featuredCourses, testimonials, stats, featuredDiplomas, latestNews;
  
  if (params.countryCode === 'pe') {
    heroSlides = processImages(heroSlidesPE);
    featuredCourses = processImages(featuredCoursesPE);
    testimonials = processImages(testimonialsPE, 'avatar', 'name');
    stats = statsPE;
    featuredDiplomas = processImages(featuredDiplomasPE);
    latestNews = processImages(latestNewsPE);
  } else if (params.countryCode === 'co') {
    heroSlides = processImages(heroslidesCO);
    featuredCourses = processImages(featuredCoursesCO);
    testimonials = processImages(testimonialsCO, 'avatar', 'name');
    stats = statsCO;
    featuredDiplomas = processImages(featuredDiplomasCO);
    latestNews = processImages(latestNewsCO);
  } else {
    // Datos por defecto en caso de otros países que se puedan añadir en el futuro
    heroSlides = processImages(heroSlidesPE);
    featuredCourses = processImages(featuredCoursesPE);
    testimonials = processImages(testimonialsPE, 'avatar', 'name');
    stats = statsPE;
    featuredDiplomas = processImages(featuredDiplomasPE);
    latestNews = processImages(latestNewsPE);
  }
    return (
    <HomeLayout
      countryCode={params.countryCode}
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
