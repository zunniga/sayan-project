// Lista de países disponibles y sus configuraciones
export interface CountryConfig {
  id: string;        // ID único para el país (pe, co, etc.)
  code: string;      // Código ISO del país (pe, co, etc.)
  name: string;      // Nombre completo del país
  flag: string;      // Ruta al archivo SVG de la bandera
  currency: string;  // Moneda del país
  phone: string;     // Código telefónico internacional
  address?: string;  // Dirección de la oficina principal (opcional)
  email?: string;    // Email de contacto específico del país
  whatsapp?: string; // Número de WhatsApp con formato internacional
  socialMedia?: {    // Redes sociales específicas del país
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}

// Configuración de países disponibles
export const countries: Record<string, CountryConfig> = {
  pe: {
    id: 'pe',
    code: 'pe',
    name: 'Perú',
    flag: '/flags/pe.svg',
    currency: 'PEN',
    phone: '+51',
    address: 'Lima, Perú',
    email: 'contacto@cimade.edu.pe',
    whatsapp: '+51987654321',
    socialMedia: {
      facebook: 'https://facebook.com/cimade.peru',
      instagram: 'https://instagram.com/cimade.peru',
    }
  },
  co: {
    id: 'co',
    code: 'co',
    name: 'Colombia',
    flag: '/flags/co.svg',
    currency: 'COP',
    phone: '+57',
    address: 'Bogotá, Colombia',
    email: 'contacto@cimade.edu.co',
    whatsapp: '+57987654321',
    socialMedia: {
      facebook: 'https://facebook.com/cimade.colombia',
      instagram: 'https://instagram.com/cimade.colombia',
    }
  },
};

// Lista de países para el selector
export const countryOptions = Object.values(countries).map(country => ({
  label: country.name,
  value: country.code,
  flag: country.flag
}));

// Obtener país por código
export const getCountryByCode = (code: string): CountryConfig | undefined => {
  return countries[code];
};

// Obtener país por ruta
export const getCountryFromPath = (path: string): CountryConfig => {
  // Buscar en la ruta alguno de los códigos de país
  const countryCode = Object.keys(countries).find(code => 
    path.includes(`/${code}`)
  );
  
  // Si se encuentra, devolver ese país
  if (countryCode && countries[countryCode]) {
    return countries[countryCode];
  }
  
  // Por defecto, devolver Perú
  return countries.pe;
};

// Lista de rutas comunes para todos los países
export const commonRoutes = [
  { label: 'Inicio', href: '' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Diplomados', href: '/diplomados' },
  { label: 'Verificación', href: '/verificacion' },
  { label: 'Contacto', href: '/contacto' },
];
