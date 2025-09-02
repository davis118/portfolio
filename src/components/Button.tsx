"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  href,
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 box-border cursor-pointer";

  const variants = {
    primary: "bg-primary-600 text-white focus:ring-primary-500 shadow-lg",
    secondary: "bg-secondary-600 text-white focus:ring-secondary-500 shadow-lg",
    outline:
      "border-2 border-primary-600 text-primary-600 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const outlineSizes = {
    sm: "px-4 py-[6px] text-sm",
    md: "px-6 py-[10px] text-base",
    lg: "px-8 py-[14px] text-lg",
  };

  const hoverEffects = disabled
    ? ""
    : variant === "primary"
    ? " hover:bg-primary-700 hover:shadow-xl"
    : variant === "secondary"
    ? " hover:bg-secondary-700 hover:shadow-xl"
    : " hover:bg-primary-600 hover:text-white";

  const classes = `${baseClasses} ${variants[variant]} ${
    variant === "outline" ? outlineSizes[size] : sizes[size]
  } ${hoverEffects} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href && !disabled) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
        className="inline-block h-full"
      >
        <a href={href} className={classes}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.85 }}
      className="inline-block h-full"
    >
      <button onClick={onClick} className={classes} disabled={disabled}>
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
