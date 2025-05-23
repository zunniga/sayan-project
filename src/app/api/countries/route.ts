import { NextResponse } from 'next/server';
import { countries } from '@/config/countries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const countryCode = searchParams.get('country') || 'pe';
  
  // Verificar si el país existe en nuestra configuración
  if (!countries[countryCode]) {
    return NextResponse.json(
      { error: 'País no encontrado' },
      { status: 404 }
    );
  }
  
  // Simulación de datos dinamicos por país
  const cursosData = {
    pe: [
      { id: 1, title: 'Curso de Gestión Educativa', price: 299, currency: 'PEN' },
      { id: 2, title: 'Curso de Tecnología Educativa', price: 349, currency: 'PEN' },
      { id: 3, title: 'Curso de Evaluación del Aprendizaje', price: 399, currency: 'PEN' },
    ],
    co: [
      { id: 1, title: 'Curso de Gestión Educativa', price: 900000, currency: 'COP' },
      { id: 2, title: 'Curso de Tecnología Educativa', price: 1050000, currency: 'COP' },
      { id: 3, title: 'Curso de Evaluación del Aprendizaje', price: 1200000, currency: 'COP' },
    ],
  };

  const diplomadosData = {
    pe: [
      { id: 1, title: 'Diplomado en Gestión Educativa', price: 1199, currency: 'PEN', duration: '120 horas' },
      { id: 2, title: 'Diplomado en Innovación Educativa', price: 1499, currency: 'PEN', duration: '150 horas' },
    ],
    co: [
      { id: 1, title: 'Diplomado en Gestión Educativa', price: 3900000, currency: 'COP', duration: '120 horas' },
      { id: 2, title: 'Diplomado en Innovación Educativa', price: 4500000, currency: 'COP', duration: '150 horas' },
    ],
  };
  
  // Retornar datos específicos para el país
  return NextResponse.json({
    country: countries[countryCode],
    cursos: cursosData[countryCode as keyof typeof cursosData] || [],
    diplomados: diplomadosData[countryCode as keyof typeof diplomadosData] || [],
  });
}
