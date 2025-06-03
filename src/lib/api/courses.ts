import { CourseApiResponse } from '@/types/api';

/**
 * Servicio para obtener cursos desde la API de CIMADE
 */
export async function fetchCourses({
  countryCode,
  limit = 10,
  offset = 0,
}: {
  countryCode: string;
  limit?: number;
  offset?: number;
}): Promise<CourseApiResponse> {
  const baseUrl = process.env.BACKEND_URL || 'http://backunp.auladm.com';
  // Usamos los parámetros dinámicamente en lugar de valores fijos
  const url = `${baseUrl}/api/v1/pages/course?name=cimade&limit=${limit}&offset=${offset}`;
  
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
    
    const data: CourseApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}