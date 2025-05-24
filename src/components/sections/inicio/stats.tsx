'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

export interface StatItem {
  id: string;
  value: number;
  label: string;
  icon: 'students' | 'courses' | 'certificates' | 'countries';
  suffix?: string;
  prefix?: string;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
  bgColor?: 'light' | 'dark' | 'gradient';
}

export function Stats({
  stats,
  title = "CIMADE en cifras",
  subtitle = "Nuestros números hablan de nuestro compromiso con la educación de calidad",
  bgColor = 'gradient'
}: StatsProps) {
  const [inView, setInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>(
    stats.reduce((acc, stat) => ({ ...acc, [stat.id]: 0 }), {})
  );
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !inView) {
        setInView(true);
        
        // Animar los números
        const duration = 2000; // 2 segundos
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        
        let frame = 0;
        const intervals: { [key: string]: NodeJS.Timeout } = {};
        
        stats.forEach(stat => {
          intervals[stat.id] = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentValue = Math.round(stat.value * (progress < 1 ? progress : 1));
            
            setAnimatedValues(prev => ({
              ...prev,
              [stat.id]: currentValue
            }));
            
            if (frame === totalFrames) {
              clearInterval(intervals[stat.id]);
            }
          }, frameDuration);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial mount
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, stats]);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'students':
        return <Users size={32} className="text-blue-600 dark:text-blue-400" />;
      case 'courses':
        return <BookOpen size={32} className="text-blue-600 dark:text-blue-400" />;
      case 'certificates':
        return <Award size={32} className="text-blue-600 dark:text-blue-400" />;
      case 'countries':
        return <Globe size={32} className="text-blue-600 dark:text-blue-400" />;
      default:
        return <Award size={32} className="text-blue-600 dark:text-blue-400" />;
    }
  };
  return (
    <section id="stats-section" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border-b-4 border-blue-600 dark:border-blue-500 p-8 rounded-lg"
            >
              <div className="absolute -right-4 -top-4 opacity-5 dark:opacity-10">
                {renderIcon(stat.icon.toString())}
              </div>
              <div className="flex items-center justify-center mb-6 z-10 relative">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  {renderIcon(stat.icon.toString())}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3 text-center">
                {stat.prefix}{animatedValues[stat.id].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
