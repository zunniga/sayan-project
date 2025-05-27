import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function ContactoPage({ params }: CountryParams) {
  const { countryCode } = await params;
  const country = countries[countryCode];
  return (
    <>
      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contacto
        </h1>
        <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
          Ponte en contacto con CIMADE {country.name}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
        {/* Formulario de contacto */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-[#40C8F8] focus:border-transparent dark:bg-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-[#40C8F8] focus:border-transparent dark:bg-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-[#40C8F8] focus:border-transparent dark:bg-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-[#40C8F8] focus:border-transparent dark:bg-gray-700"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 dark:bg-[#40C8F8] dark:hover:bg-[#40C8F8]/90 text-white py-2 px-4 rounded-md transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
        
        {/* Información de contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          
          <div className="space-y-6">
            {country.address && (
              <div>
                <h3 className="text-lg font-medium mb-2">Dirección</h3>
                <p className="text-gray-600 dark:text-gray-300">{country.address}</p>
              </div>
            )}
            
            {country.email && (
              <div>
                <h3 className="text-lg font-medium mb-2">Correo electrónico</h3>
                <p className="text-gray-600 dark:text-gray-300">{country.email}</p>
              </div>
            )}
            
            {country.whatsapp && (
              <div>
                <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-300">{country.whatsapp}</p>
              </div>
            )}
            
            {country.socialMedia && Object.keys(country.socialMedia).length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Redes sociales</h3>
                <div className="flex space-x-4">
                  {country.socialMedia.facebook && (
                    <a href={country.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-[#40C8F8]">
                      Facebook
                    </a>
                  )}
                  {country.socialMedia.instagram && (
                    <a href={country.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-[#40C8F8]">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>      </div>
    </>
  );
}
