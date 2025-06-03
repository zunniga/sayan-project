import { NextResponse } from 'next/server';
import { fetchCourses } from '@/lib/api/courses';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit') || 10);
  const offset = Number(searchParams.get('offset') || 0);

  try {
    const data = await fetchCourses({
      countryCode: 'co',
      limit,
      offset,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in CO courses API route:', error);
    return NextResponse.json(
      { error: 'Error al obtener cursos para Colombia' },
      { status: 500 }
    );
  }
}