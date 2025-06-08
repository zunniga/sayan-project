import { GraduateApiResponse, GraduateDetailApiResponse } from '@/types/graduate';

/**
 * Servicio para obtener cursos desde la API de CIMADE
 */
export async function fetchGraduates({
  //countryCode,
  limit = 10,
  offset = 0,
}: {
  countryCode: string;
  limit: number;
  offset: number;
}): Promise<GraduateApiResponse> {
  const baseUrl = process.env.BACKEND_URL || 'http://backunp.auladm.com';
  // Usamos los parámetros dinámicamente en lugar de valores fijos
  const url = `${baseUrl}/api/v1/pages/graduate?name=cimade&limit=${limit}&offset=${offset}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching courses: ${response.status} ${response.statusText}`);
    }
    
    const data: GraduateApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

/**
 * Servicio para obtener el detalle de un diplomado específico
 */
export async function fetchGraduateDetail({
  id,
}: {
  id: string;
}): Promise<GraduateDetailApiResponse> {
  const baseUrl = process.env.BACKEND_URL || 'http://backunp.auladm.com';
  const url = `${baseUrl}/api/v1/pages/gradute/${id}?name=cimade`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching graduate detail: ${response.status} ${response.statusText}`);
    }
    
    const data: GraduateDetailApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching graduate detail:', error);
    throw error;
  }
}