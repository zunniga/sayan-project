'use client';

import { motion } from 'framer-motion';

interface GraduateSkeletonProps {
  count?: number;
}

export function GraduateSkeleton({ count = 6 }: GraduateSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-lg"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }}
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 dark:from-purple-800 dark:via-purple-700 dark:to-purple-800 animate-pulse"></div>
          
          <div className="p-6 space-y-4">
            {/* Category Skeleton */}
            <div className="h-6 bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200 dark:from-violet-800 dark:via-violet-700 dark:to-violet-800 rounded-full w-28 animate-pulse"></div>
            
            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-full animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-4/5 animate-pulse"></div>
            </div>
            
            {/* Institution Skeleton */}
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-2/3 animate-pulse"></div>
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-5/6 animate-pulse"></div>
            </div>
            
            {/* Duration & Level Skeleton */}
            <div className="flex justify-between items-center pt-4">
              <div className="h-4 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 dark:from-indigo-800 dark:via-indigo-700 dark:to-indigo-800 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 dark:from-emerald-800 dark:via-emerald-700 dark:to-emerald-800 rounded w-20 animate-pulse"></div>
            </div>
            
            {/* Button Skeleton */}
            <div className="pt-4">
              <div className="h-12 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 dark:from-purple-800 dark:via-purple-700 dark:to-purple-800 rounded-xl w-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}