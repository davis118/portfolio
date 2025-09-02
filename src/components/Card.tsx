"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedCardBackground from "./AnimatedCardBackground";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className = "", onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="h-full w-full"
    >
      <AnimatedCardBackground className={className}>
        {children}
      </AnimatedCardBackground>
    </motion.div>
  );
};

export default Card;
