"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Memoized path configurations to prevent recalculation
const PATH_CONFIG = {
  COUNT: 36,
  BASE_WIDTH: 0.5,
  WIDTH_INCREMENT: 0.03,
  BASE_OPACITY: 0.1,
  OPACITY_INCREMENT: 0.03,
  BASE_DURATION: 20,
  DURATION_VARIANCE: 10,
} as const;

// Pre-calculate static animation properties
const STATIC_ANIMATION_PROPS = {
  initial: { pathLength: 0.3, opacity: 0.6 },
  animate: {
    pathLength: 1,
    opacity: [0.3, 0.6, 0.3],
    pathOffset: [0, 1, 0],
  },
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    ease: "linear" as const,
  },
};

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(() => {
    return Array.from({ length: PATH_CONFIG.COUNT }, (_, i) => {
      const xOffset = i * 5 * position;
      const yOffset = i * 6;
      
      return {
        id: i,
        d: `M ${-800 - xOffset} ${-200 + yOffset}
    C ${-500 - xOffset} ${-200 + yOffset},
      ${-312 - xOffset} ${216 - yOffset},
      ${152 - xOffset} ${343 - yOffset}
    S ${684 - xOffset} ${875 - yOffset},
      ${684 - xOffset} ${875 - yOffset}`,

        gradientId: `gradient-${position}-${i}`,
        width: PATH_CONFIG.BASE_WIDTH + i * PATH_CONFIG.WIDTH_INCREMENT,
        opacity: PATH_CONFIG.BASE_OPACITY + i * PATH_CONFIG.OPACITY_INCREMENT,
        duration: PATH_CONFIG.BASE_DURATION + Math.random() * PATH_CONFIG.DURATION_VARIANCE,
      };
    });
  }, [position]);

  const gradients = useMemo(() => {
    return paths.map((path) => (
      <linearGradient
        key={path.gradientId}
        id={path.gradientId}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="25%" stopColor="rgb(147, 51, 234)" />
        <stop offset="75%" stopColor="rgb(59, 130, 246)" />
      </linearGradient>
    ));
  }, [paths]);

  return (
    <div className="absolute inset-0 pointer-events-none will-change-transform">
      <svg 
        className="w-full h-full" 
        viewBox="-200 0 896 316" 
        fill="none"
        style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
      >
        <defs>{gradients}</defs>
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#${path.gradientId})`}
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            {...STATIC_ANIMATION_PROPS}
            transition={{
              ...STATIC_ANIMATION_PROPS.transition,
              duration: path.duration,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 min-h-screen w-full flex items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="absolute inset-0 transform-gpu">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
}