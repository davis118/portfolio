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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    sizes[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {buttonContent}
    </button>
  );
};

export default Button;
