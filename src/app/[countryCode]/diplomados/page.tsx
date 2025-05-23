import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default function DiplomadosPage({ params }: CountryParams) {
  const country = countries[params.countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Diplomados
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Programas especializados de CIMADE {country.name}
        </p>
      </div>
      
      {/* Contenido de diplomados específico para cada país */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {/* Aquí se cargarían los diplomados desde una API o CMS específicos por país */}
        {/* Por ahora usamos contenido de ejemplo */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Diplomado en Gestión Educativa</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descripción del diplomado específico para {country.name}.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>✓ 120 horas académicas</li>
            <li>✓ Certificación oficial</li>
            <li>✓ Profesores especializados</li>
          </ul>
          <p className="text-primary dark:text-[#40C8F8] mt-4 text-xl font-bold">
            {country.currency === 'PEN' ? 'S/.' : '$'} 1,299
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Diplomado en Innovación Educativa</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descripción del diplomado específico para {country.name}.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>✓ 150 horas académicas</li>
            <li>✓ Certificación oficial</li>
            <li>✓ Profesores especializados</li>
          </ul>
          <p className="text-primary dark:text-[#40C8F8] mt-4 text-xl font-bold">
            {country.currency === 'PEN' ? 'S/.' : '$'} 1,499
          </p>
        </div>      </div>
    </>
  );
}
