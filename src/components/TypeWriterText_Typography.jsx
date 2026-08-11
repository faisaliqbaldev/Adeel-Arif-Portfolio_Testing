import React from "react";
import { motion } from "framer-motion";

export const TypeWriterText_Typography = ({text}) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Speed of typing (seconds per letter)
      },
    },
  };

  // Child variants for each individual letter
  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline-block",
    },
  };

  return (
    <div className="flex items-center text-display-mobile md:text-display font-display text-primary">
      <span style={{ display: "none" }}>{text}</span>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char} {/* Preserves white spaces properly */}
          </motion.span>
        ))}
      </motion.div>

      {/* Blinking Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "steps(2)" }}
        style={{ fontWeight: "bold", marginLeft: "2px" }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypeWriterText_Typography;
