import { format } from "date-fns"
import { es } from "date-fns/locale"

interface CurrencyConfig {
  symbol: string;
  code: string;
  locale: string;
}

const CURRENCY_MAP: Record<string, CurrencyConfig> = {
  pe: {
    symbol: 'S/',
    code: 'PEN',
    locale: 'es-PE'
  },
  co: {
    symbol: '$',
    code: 'COP',
    locale: 'es-CO'
  },
  // Agregar más países según sea necesario
};

/**
 * Formatea una cantidad monetaria según el código de país
 * @param amount - Cantidad a formatear (string o number)
 * @param countryCode - Código del país (pe, co, mx, etc.)
 * @param showSymbol - Si mostrar el símbolo de moneda (default: true)
 * @returns String formateado con la moneda correspondiente
 */
export function formatCurrency(
  amount: string | number, 
  countryCode: string, 
  showSymbol: boolean = true
): string {
  const config = CURRENCY_MAP[countryCode.toLowerCase()];
  
  if (!config) {
    // Fallback para países no configurados
    return `${amount}`;
  }

  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (isNaN(numericAmount)) {
    return showSymbol ? `${config.symbol} 0.00` : '0.00';
  }

  const formattedAmount = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericAmount);

  return showSymbol ? `${config.symbol} ${formattedAmount}` : formattedAmount;
}

/**
 * Formatea una fecha en el formato "dd de mmm de yyyy"
 * @param date - Fecha a formatear (Date o string)
 * @returns String con la fecha formateada
 */
export function formatDate(date: Date | string): string {
    return format(
        new Date(
        new Date(date).getUTCFullYear(), 
        new Date(date).getUTCMonth(), 
        new Date(date).getUTCDate()
        ), 
        "dd 'de' MMMM 'de' yyyy", 
        { locale: es }
    );
}

/**
 * Formatea un código de certificado eliminando el prefijo "C" si existe
 * @param code - Código del certificado
 * @returns Código formateado sin el prefijo "C"
 */
export function formatCertificateCode(code: string): string {
  if (!code) return "N/A";
  
  // Si el código empieza con "C", quitarlo
  if (code.startsWith('B') || code.startsWith('b')) {
    return code.substring(1);
  }
  
  return code;
}

/**
 * Agrega el prefijo "C" al código del certificado si no lo tiene
 * @param code - Código del certificado
 * @returns Código con el prefijo "C" agregado si es necesario
 */
export function addCodePrefix(code: string): string {
  if (!code) return code;
  
  // Si el código NO empieza con "C", agregarlo para la API
  if (!code.startsWith('B') && !code.startsWith('b')) {
    return `B${code}`;
  }
  
  return code;
}