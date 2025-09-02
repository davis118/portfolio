"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface AnimatedCardBackgroundProps {
  children?: ReactNode;
  className?: string;
}

const AnimatedCardBackground = ({
  children,
  className = "",
}: AnimatedCardBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl p-0.5 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated fill background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-400 to-highlight-400"
        style={{
          transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="bg-white/80 rounded-xl p-6 h-full">{children}</div>
      </div>
    </div>
  );
};

export default AnimatedCardBackground;
