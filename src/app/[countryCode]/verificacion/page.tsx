import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default function VerificacionPage({ params }: CountryParams) {
  const country = countries[params.countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Verificación de Certificados
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Verifica la autenticidad de tu certificado CIMADE {country.name}
        </p>
      </div>
      
      {/* Formulario de verificación */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 my-12">
        <form className="space-y-6">
          <div>
            <label htmlFor="certificate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Código de certificado
            </label>
            <input
              type="text"
              id="certificate"
              placeholder="Ej: CIMADE-{params.countryCode.toUpperCase()}-2023-12345"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-[#40C8F8] focus:border-transparent dark:bg-gray-700"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 dark:bg-[#40C8F8] dark:hover:bg-[#40C8F8]/90 text-white py-2 px-4 rounded-md transition-colors"
          >
            Verificar Certificado
          </button>
        </form>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-medium mb-4">¿Cómo verificar mi certificado?</h3>
          <ol className="space-y-2 text-gray-600 dark:text-gray-300 list-decimal pl-5">
            <li>Ingresa el código único que aparece en tu certificado</li>
            <li>Haz clic en "Verificar Certificado"</li>
            <li>El sistema mostrará la información sobre la autenticidad del documento</li>
          </ol>
        </div>      </div>
    </>
  );
}
