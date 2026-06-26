"use client";
import { motion } from "framer-motion";

export function MotionButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`inline-flex${className ? ` ${className}` : ""}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
