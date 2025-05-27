// Types for CIMADE website components

// Re-export existing interfaces from components - updating StatItem to match the component
export interface StatItem {
  id: string;
  value: number;
  label: string;
  icon: 'students' | 'courses' | 'certificates' | 'countries';
  suffix?: string;
  prefix?: string;
}

// Hero and layout types
export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroStat {
  number: string;
  label: string;
}

// About page specific types
export interface HistoryTimelineItem {
  year: string;
  title: string;
  description: string;
  milestone: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  specialties: string[];
  email: string;
  linkedin: string;
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  year: string;
}

export interface Recognition {
  id: string;
  title: string;
  organization: string;
  year: string;
  iconName: string;
}

export interface Partnership {
  name: string;
  type: string;
  logo: string;
}

export interface SocialProgram {
  iconName: string;
  title: string;
  description: string;
  impact: string;
  color: string;
}

export interface SustainabilityInitiative {
  iconName: string;
  title: string;
  description: string;
  actions: string[];
}

export interface ImpactNumber {
  number: string;
  label: string;
  iconName: string;
}

// Re-export other interfaces from components
export type { FeaturedCourse } from '@/components/sections/inicio/featured-courses';
export type { Testimonial } from '@/components/sections/inicio/testimonials';

// News and diploma types - updating FeaturedDiploma to match component
export interface FeaturedDiploma {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  duration: string;
  modality: string;
  price: string;
  slug: string;
  featured?: boolean;
}

// News item interface
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

// Lucide icon type for type-safe icon rendering
export type LucideIconName = 
  | 'Shield' 
  | 'Award' 
  | 'CheckCircle' 
  | 'Heart' 
  | 'Users' 
  | 'BookOpen' 
  | 'Globe' 
  | 'Leaf' 
  | 'Lightbulb' 
  | 'Target' 
  | 'Zap' 
  | 'Star' 
  | 'TrendingUp' 
  | 'Building' 
  | 'Handshake' 
  | 'GraduationCap' 
  | 'Trophy' 
  | 'Clock' 
  | 'MapPin' 
  | 'Phone' 
  | 'Mail' 
  | 'ExternalLink'
  | 'TreePine'
  | 'Building2'
  | 'HandHeart';
