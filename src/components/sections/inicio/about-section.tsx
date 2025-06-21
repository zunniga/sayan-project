"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, GraduationCap } from "lucide-react";


// Componente Counter animado
const AnimatedCounter = ({
  end,
  duration = 2,
  isVisible,
}: {
  end: number;
  duration?: number;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}</span>;
};

export const FirstSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animación principal que se ejecuta cuando está en vista
  const waveVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };


  return (
    <section id="nosotros" className="relative overflow-hidden" ref={ref}>
     
      <div className="bg-transparent text-gray-900 relative">
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#b6d900]/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#12a9be]/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content con animación activada por scroll */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center justify-end mb-0">
                <span className="mx-4 text-white p-2 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-[#12a9be] to-[#12a9be] dark:bg-gradient-to-r dark:from-[#12a9be]/50 dark:to-[#12a9be] shadow-lg transition-transform duration-300 hover:scale-105">
                  NOSOTROS
                </span>
              </div>
              <motion.h1
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={waveVariants}
                className="text-4xl text-center lg:text-left sm:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white ">
                  ¿Por qué debes{" "}
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#12a9be] to-[#0d617b]  bg-clip-text text-transparent">
                  elegirnos
                </span>
                <span className="bg-gradient-to-r from-[#12a9be] to-[#0d617b]  bg-clip-text text-transparent">
                  ?
                </span>
              </motion.h1>

              <motion.p
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={waveVariants}
                className="text-gray-600 dark:text-gray-300 text-center lg:text-left text-base sm:text-lg leading-relaxed max-w-lg"
              >
                En SAYAN, fortalecemos el currículum de titulados con cursos y
                diplomados en áreas clave como ingenierías, impulsando su
                desarrollo profesional.
              </motion.p>

              {/* Statistics con counters animados */}
              <motion.div
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={waveVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 "
              >
                {[
                  {
                    icon: Users,
                    number: 2000,
                    prefix: "+",
                    text: "Estudiantes graduados",
                  },
                  {
                    icon: BookOpen,
                    number: 100,
                    prefix: "+",
                    text: "Cursos disponibles",
                  },
                  {
                    icon: GraduationCap,
                    number: 14,
                    prefix: "+",
                    text: "Nuestros diplomados",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={2.5 + index * 0.1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={waveVariants}
                    className="flex items-center space-x-3 text-center sm:text-left justify-center sm:justify-start"
                  >
                    <div className="w-12 h-12 bg-[#12a9be]/10 dark:bg-[#12a9be]/20 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#12a9be]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#b6d900]">
                        {stat.prefix}
                        <AnimatedCounter
                          end={stat.number}
                          duration={2.5}
                          isVisible={isInView}
                        />
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={waveVariants}
                className="pt-4 flex justify-center lg:justify-start"
              >
                <motion.button
                  className="px-8 py-4 bg-[#0d617b] hover:bg-[#12a9be] dark:bg-[#12a9be] dark:hover:bg-[#0d617b] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce más
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Image con animación activada por scroll */}
            <motion.div
              custom={1.5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={waveVariants}
              className="relative order-1 lg:order-2"
            >
              <img
                  src="peru/hero/bg-counter.svg"
                  alt="Contador"
                  className="w-full h-full mx-auto"
                />
              <motion.div
                className="absolute bottom-20 left-0 w-12 h-12 bg-[#12a9be]/30 rounded-full"
                animate={
                  isInView ? { scale: [1, 1.3, 1], rotate: [360, 180, 0] } : {}
                }
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
