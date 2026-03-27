import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 64,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SectionTransition = ({ id, className = "", children, glow = true }) => {
  return (
    <motion.section
      id={id}
      className={`section-transition relative ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {glow && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 h-24 w-[72%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#7c3aed]/18 to-transparent blur-3xl"
          variants={glowVariants}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

export default SectionTransition;
