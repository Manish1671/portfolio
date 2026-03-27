import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import { profile } from "../data/portfolioData";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 75);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.07] blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-600/[0.06] blur-[100px]" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300" />
    <div className="relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shortened to 2.5s — snappier, respects user's time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 900);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.06,
      filter: "blur(10px)",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -16,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative min-h-screen flex flex-col items-center justify-center px-4 gap-10">
            {/* Icon row */}
            <motion.div
              className="flex justify-center gap-6 md:gap-10"
              variants={childVariants}
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
            >
              {[Code2, User, Github].map((Icon, i) => (
                <div key={i} style={{ transitionDelay: `${i * 120}ms` }}>
                  <IconButton Icon={Icon} />
                </div>
              ))}
            </motion.div>

            {/* Name + tagline */}
            <motion.div
              className="text-center space-y-4"
              variants={childVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } }}
            >
              <p className="text-[0.72rem] uppercase tracking-[0.36em] text-violet-300/70">
                Full-Stack Developer · Data Analytics · LPU
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.9] tracking-[-0.05em]">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                <span className="mt-4 block text-2xl sm:text-3xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Building things that matter.
                </span>
              </h1>
            </motion.div>

            {/* GitHub link typewriter */}
            <motion.div
              className="text-center"
              variants={childVariants}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.6 } }}
            >
              <a
                href={profile.github}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                <div className="relative flex items-center gap-2 text-lg sm:text-xl">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">
                    <TypewriterEffect text="github.com/Manish1671" />
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] rounded-full overflow-hidden bg-white/8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { duration: 2.4, ease: "easeInOut", delay: 0.1 } }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
