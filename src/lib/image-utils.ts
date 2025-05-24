/**
 * Utilidad para generar URLs de placeholder para imágenes
 * Esta utilidad ayuda a evitar errores cuando las imágenes reales no están disponibles
 */

/**
 * Obtiene una URL de imagen real o un placeholder si no existe
 * @param path Ruta de la imagen
 * @param text Texto para mostrar en el placeholder
 * @param width Ancho del placeholder
 * @param height Alto del placeholder
 * @returns URL de la imagen o del placeholder
 */
export function getImageUrl(
  path: string,
  text: string = 'CIMADE',
  width: number = 800,
  height: number = 600
): string {
  // En desarrollo, si la ruta comienza con /images/, usar un placeholder
  if (path.startsWith('/images/')) {
    // Extraer el tipo de imagen para personalizar el placeholder
    let bgColor = '0066CC'; // Azul CIMADE por defecto
    let textColor = 'FFFFFF';
    
    if (path.includes('hero')) {
      bgColor = '003366'; // Más oscuro para heroes
    } else if (path.includes('courses')) {
      bgColor = '0055AA';
    } else if (path.includes('diplomas')) {
      bgColor = '004488';
    } else if (path.includes('news')) {
      bgColor = '005599';
    } else if (path.includes('testimonials')) {
      // Si es un avatar de testimonial, usar una imagen de perfil
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(text)}&background=${bgColor}&color=${textColor}&size=${width}`;
    }
    
    // Crear un placeholder con el texto y dimensiones especificadas
    const encodedText = encodeURIComponent(text);
    return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
  }
  
  // En producción, o si la ruta no comienza con /images/, devolver la ruta original
  return path;
}
