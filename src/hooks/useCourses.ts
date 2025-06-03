import { useState, useEffect } from 'react';
import { CourseApiResponse, CourseData } from '@/types/api';

/**
 * Hook personalizado para obtener cursos desde la API
 */
export function useCourses({
  countryCode,
  limit = 10,
  offset = 0,
}: {
  countryCode: string;
  limit?: number;
  offset?: number;
}) {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [pagination, setPagination] = useState<{
    total: number;
    page: number;
    limit: number;
    currentPages: number;
  }>({ total: 0, page: 1, limit: 10, currentPages: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCoursesData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/${countryCode}/courses?limit=${limit}&offset=${offset}`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data: CourseApiResponse = await response.json();
        setCourses(data.data);
        setPagination(data.pagination);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido al obtener cursos'));
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, [countryCode, limit, offset]);

  return { courses, pagination, loading, error };
}