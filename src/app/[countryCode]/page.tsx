import { CountryParams, generateStaticParams } from './page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default function CountryHomePage({ params }: CountryParams) {
  // Obtener la configuración del país desde los parámetros
  const country = countries[params.countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          CIMADE {country.name}
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Centro de Investigación y Mejoramiento Académico para el Desarrollo Educativo
        </p>
      </div>
      
      {/* Aquí se agregaría el contenido específico de la página de inicio de cada país */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {/* Secciones comunes para todos los países */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Cursos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explora nuestra variedad de cursos diseñados para mejorar tus habilidades profesionales.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Diplomados</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Programas especializados para profundizar en áreas específicas de conocimiento.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Verificación</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Verifica la autenticidad de tus certificados y credenciales.
          </p>
        </div>
          </div>
    </>
  );
}
