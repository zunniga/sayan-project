import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function CursosPage({ params }: CountryParams) {
  const { countryCode } = await params;
  const country = countries[countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cursos
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Explora nuestros cursos en CIMADE {country.name}
        </p>
      </div>
      
      {/* Contenido de cursos específico para cada país */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {/* Aquí se cargarían los cursos desde una API o CMS específicos por país */}
        {/* Por ahora usamos contenido de ejemplo */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Curso 1</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descripción del curso específico para {country.name}.
          </p>
          <p className="text-primary dark:text-[#40C8F8] mt-2">
            {country.currency === 'PEN' ? 'S/.' : '$'} 299
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Curso 2</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descripción del curso específico para {country.name}.
          </p>
          <p className="text-primary dark:text-[#40C8F8] mt-2">
            {country.currency === 'PEN' ? 'S/.' : '$'} 349
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Curso 3</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descripción del curso específico para {country.name}.
          </p>
          <p className="text-primary dark:text-[#40C8F8] mt-2">
            {country.currency === 'PEN' ? 'S/.' : '$'} 399
          </p>
        </div>      </div>
    </>
  );
}
