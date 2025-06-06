import { CourseApiResponse, CourseDetailApiResponse } from '@/types/course';

/**
 * Servicio para obtener cursos desde la API de CIMADE
 */
export async function fetchCourses({
  countryCode,
  limit = 10,
  offset = 0,
}: {
  countryCode: string;
  limit: number;
  offset: number;
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

/**
 * Servicio para obtener los detalles de un curso específico desde la API de CIMADE
 * @param courseId - ID del curso a obtener
 */
export async function fetchCourseDetail({
  courseId,
}: {
  courseId: string | number;
}): Promise<CourseDetailApiResponse> {
  const baseUrl = process.env.BACKEND_URL || 'https://backunp.auladm.com';
  const url = `${baseUrl}/api/v1/pages/course/${courseId}?name=cimade`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching course detail: ${response.status} ${response.statusText}`);
    }
    
    const data: CourseDetailApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching course detail:', error);
    throw error;
  }
}