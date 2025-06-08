'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  progress?: number;
  onComplete?: () => void;
}

export function LoadingScreen({ 
  progress = 0,
  onComplete,
}: LoadingScreenProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Mensajes dinámicos basados en el progreso
  const loadingMessages = [
    'Iniciando sistema...',
    'Cargando recursos...',
    'Preparando interfaz...',
    'Configurando experiencia...',
    'Casi listo...'
  ];

  // Posiciones fijas para las partículas (no aleatorias)
  const particlePositions = [
    { left: 10, top: 85, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 20, top: 90, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 30, top: 88, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 40, top: 92, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 50, top: 87, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 60, top: 91, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 70, top: 89, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 80, top: 93, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 90, top: 86, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 15, top: 94, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 25, top: 84, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 35, top: 95, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 45, top: 83, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 55, top: 96, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 65, top: 82, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 75, top: 97, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 85, top: 81, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 95, top: 98, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 12, top: 80, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 22, top: 99, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 32, top: 79, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 42, top: 100, size: 'w-3 h-3', color: 'bg-blue-400/30' },
    { left: 52, top: 78, size: 'w-2 h-2', color: 'bg-indigo-400/40' },
    { left: 62, top: 101, size: 'w-1.5 h-1.5', color: 'bg-cyan-400/50' },
    { left: 72, top: 77, size: 'w-3 h-3', color: 'bg-blue-400/30' }
  ];

  // Detectar si estamos en el cliente para evitar hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animación del progreso
  useEffect(() => {
    if (progress > 0) {
      setCurrentProgress(progress);
      return;
    }

    const interval = setInterval(() => {
      setCurrentProgress(prev => {
        // Usar incrementos fijos en lugar de Math.random()
        const increments = [8, 12, 15, 10, 7, 13, 9, 11, 14, 6];
        const increment = increments[Math.floor(prev / 10) % increments.length];
        const newProgress = prev + increment;
        
        // Actualizar etapa basada en progreso
        if (newProgress > 20 && newProgress < 40) setLoadingStage(1);
        else if (newProgress > 40 && newProgress < 60) setLoadingStage(2);
        else if (newProgress > 60 && newProgress < 80) setLoadingStage(3);
        else if (newProgress > 80) setLoadingStage(4);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            onComplete?.();
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [progress, onComplete]);

  // Variantes mejoradas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { 
      scale: 0.3, 
      opacity: 0,
      rotateY: -180,
      filter: 'blur(20px)'
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 1.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const progressContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Variantes para partículas flotantes (sin Math.random())
  const particleVariants = {
    initial: { 
      scale: 0, 
      opacity: 0,
      rotate: 0
    },
    animate: {
      scale: [0, 1, 0.8, 1],
      opacity: [0, 0.8, 0.6, 0],
      rotate: [0, 180, 360],
      y: [0, -120, -200],
      x: [0, 30, -15], // Valores fijos en lugar de aleatorios
      transition: {
        repeat: Infinity,
        duration: 4,
        delay: 0,
        ease: 'easeOut'
      }
    }
  };

  // Anillo principal mejorado
  const mainRingVariants = {
    initial: { rotate: 0, scale: 0.8, opacity: 0.6 },
    animate: {
      rotate: 360,
      scale: [0.8, 1.1, 0.8],
      opacity: [0.6, 1, 0.6],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 3,
          ease: 'linear'
        },
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        },
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }
      }
    }
  };

  // No renderizar hasta que esté en el cliente para evitar hydration issues
  if (!isClient) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-300">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(30, 90, 200, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(64, 200, 248, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(44, 114, 255, 0.2) 0%, transparent 60%),
              linear-gradient(135deg, rgb(248, 250, 255) 0%, rgb(240, 245, 255) 50%, rgb(235, 242, 255) 100%)
            `,
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Modo oscuro overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 dark:opacity-100 opacity-0 transition-opacity duration-500" />
          
          {/* Partículas flotantes con posiciones fijas */}
          <div className="absolute inset-0 overflow-hidden">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${particle.size} ${particle.color}`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                variants={{
                  ...particleVariants,
                  animate: {
                    ...particleVariants.animate,
                    transition: {
                      ...particleVariants.animate.transition,
                      delay: i * 0.1, // Delay basado en índice, no aleatorio
                    }
                  }
                }}
                initial="initial"
                animate="animate"
              />
            ))}
          </div>

          {/* Efectos de fondo geométricos */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-indigo-300 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Contenedor principal del logo */}
          <motion.div
            className="relative mb-12"
            variants={logoVariants}
          >
            {/* Anillo exterior principal */}
            <motion.div
              className="absolute inset-0 w-48 h-48 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #1E5AC8, #40C8F8, #2C72FF, #1E5AC8)',
                padding: '3px'
              }}
              variants={mainRingVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
            </motion.div>
            
            {/* Anillo medio */}
            <motion.div
              className="absolute inset-3 w-42 h-42 border-2 border-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400 rounded-full opacity-60"
              animate={{
                rotate: -360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear'
                },
                scale: {
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut'
                }
              }}
            />

            {/* Anillo interior pulsante */}
            <motion.div
              className="absolute inset-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }}
            />

            {/* Logo central */}
            <div className="relative w-48 h-48 p-12 flex items-center justify-center">
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
              >
                <Image 
                  src="/logos/CIMADE ICONO.svg"
                  alt="CIMADE Logo"
                  className="dark:hidden w-full h-full object-contain drop-shadow-lg"
                  width={120}
                  height={120}
                  priority
                />
                <Image 
                  src="/logos/CIMADE ICONO BLANCO.svg"
                  alt="CIMADE Logo"
                  className="hidden dark:block w-full h-full object-contain drop-shadow-lg"
                  width={120}
                  height={120}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Título principal mejorado */}
          <motion.div
            className="text-center mb-8"
            variants={textVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear'
              }}
              style={{
                background: 'linear-gradient(90deg, #1E5AC8, #40C8F8, #2C72FF, #1E5AC8, #40C8F8)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              CIMADE
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              variants={textVariants}
            >
              Centro de Investigación y Mejoramiento Académico para el Desarrollo Educativo
            </motion.p>
          </motion.div>

          {/* Progreso mejorado */}
          <motion.div
            className="w-full max-w-md px-4"
            variants={progressContainerVariants}
          >
            {/* Mensaje dinámico */}
            <motion.p
              className="text-center text-gray-500 dark:text-gray-400 mb-6 font-medium"
              key={loadingStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {loadingMessages[loadingStage]}
            </motion.p>

            {/* Barra de progreso moderna */}
            <div className="relative mb-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full relative rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #1E5AC8, #40C8F8, #2C72FF)',
                    backgroundSize: '200% 100%'
                  }}
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: `${Math.min(currentProgress, 100)}%`,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    width: { duration: 0.3, ease: 'easeOut' },
                    backgroundPosition: { repeat: Infinity, duration: 2, ease: 'linear' }
                  }}
                >
                  {/* Brillo de progreso */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </motion.div>
              </div>
              
              {/* Indicadores de progreso */}
              <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Porcentaje con animación */}
            <motion.div
              className="text-center text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8"
              animate={{
                scale: currentProgress > 0 ? [1, 1.1, 1] : 1
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut'
              }}
            >
              {Math.round(currentProgress)}%
            </motion.div>
          </motion.div>

          {/* Indicadores de carga mejorados */}
          <motion.div 
            className="flex space-x-3 mb-12"
            variants={textVariants}
          >
            {[0, 0.2, 0.4, 0.6, 0.8].map((delay, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #1E5AC8, #40C8F8)'
                }}
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  delay,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </motion.div>

          {/* Footer mejorado */}
          <motion.div
            className="absolute bottom-8 text-center"
            variants={textVariants}
          >
            <motion.p 
              className="text-sm text-gray-400 dark:text-gray-500 mb-2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
              }}
            >
              Preparando tu experiencia educativa de excelencia
            </motion.p>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-300 dark:text-gray-600">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Sistema inicializado</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}