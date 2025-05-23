import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default function NosotrosPage({ params }: CountryParams) {
  const country = countries[params.countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nosotros
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Conozca más sobre CIMADE {country.name}
        </p>
      </div>
      
      {/* Contenido sobre nosotros específico para cada país */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        {/* Aquí se puede cargar contenido específico por país */}
        <p>
          CIMADE {country.name} es una institución especializada en la educación continua y el desarrollo profesional.
        </p>

        {/* El contenido puede variar según el país */}
        {params.countryCode === 'pe' && (
          <p>
            En Perú, hemos desarrollado programas específicos adaptados a las necesidades del mercado laboral peruano.
          </p>
        )}

        {params.countryCode === 'co' && (
          <p>
            En Colombia, nuestros programas están diseñados considerando las particularidades del contexto colombiano.
          </p>
        )}      </div>
    </>
  );
}
