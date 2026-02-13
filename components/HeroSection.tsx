"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, 100]);

  const words = ["speak", "stay", "travel"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-end pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 relative overflow-hidden bg-brand-white border-b border-brand-blue/10"
    >
      {/* Abstract Background Geometry */}
      <div className="absolute top-0 right-0 w-[40vw] sm:w-[50vw] h-full bg-brand-blue/5 skew-x-12 origin-top-right"></div>
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-brand-blue/10 animate-blob mix-blend-multiply"></div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <motion.div
          style={{ y: yContent }}
          className="flex flex-col gap-6 md:gap-8"
        >
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-brand-blue-dark text-white text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-[3px_3px_0px_0px_#fccd18] md:shadow-[4px_4px_0px_0px_#fccd18]">
              Est. 2015
            </div>
            <div className="h-[1px] w-16 md:w-24 bg-brand-blue-dark"></div>
          </motion.div>

          {/* Main Typography */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] leading-[1.1] font-extrabold text-brand-blue-dark tracking-tight"
            >
              Stories don't shout.
              <br />
              <span className="inline-flex items-baseline">
                They{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-brand-blue ml-3"
                  >
                    {words[currentWordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Decorative Element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1.5 md:h-2 lg:h-4 bg-brand-yellow w-[40vw] sm:w-[35vw] md:w-[30vw] mt-3 md:mt-4 origin-left"
            ></motion.div>
          </div>

          {/* Subtext Grid */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-12 items-end">
            <div className="md:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl font-medium text-brand-blue-dark/80 leading-relaxed"
              >
                At Meravanige, everything we build is rooted in storytelling —
                for cinema, brands, spaces, and voices that matter.
              </motion.p>
            </div>

            <div className="md:col-span-5 flex justify-start md:justify-end">
              <motion.button
                whileHover={{ y: 5 }}
                className="flex flex-col items-center gap-2 md:gap-3 text-brand-blue-dark/40 hover:text-brand-blue transition-colors cursor-pointer"
              >
                <span className="text-[0.6rem] uppercase tracking-[0.3em] font-bold">
                  Scroll
                </span>
                <ArrowDown size={20} className="md:hidden" />
                <ArrowDown size={24} className="hidden md:block" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
