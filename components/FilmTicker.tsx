"use client";

import React from "react";
import { motion } from "framer-motion";
import { FILMS } from "../lib/constants";
import { ArrowRight, Clapperboard } from "lucide-react";

const FilmTicker: React.FC = () => {
  const scrollContent = [...FILMS, ...FILMS, ...FILMS];

  return (
    <div className="relative w-full bg-brand-white border-y border-brand-blue/10 overflow-hidden py-16 md:py-24 lg:py-32 z-20">
      {/* Speaks Style Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,86,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,86,158,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-0">
        {/* Section Label */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 mb-12 md:mb-16 flex items-end justify-between relative z-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-brand-blue-dark text-brand-yellow text-[0.6rem] md:text-xs font-extrabold uppercase tracking-widest rounded-sm mb-4 md:mb-6 shadow-[3px_3px_0px_0px_#fccd18] md:shadow-[4px_4px_0px_0px_#fccd18]"
            >
              <Clapperboard size={12} className="md:hidden" />
              <Clapperboard size={14} className="hidden md:block" />
              <span>Featured Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-brand-blue-dark leading-[0.85] tracking-tight"
            >
              BLOCKBUSTER <br />
              <span
                className="text-transparent stroke-text"
                style={{ WebkitTextStroke: "1.5px #01569e" }}
              >
                IMPACT.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Infinite Scroll Track */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-10 w-max px-4 sm:px-6 pb-8 md:pb-12 pt-4"
            animate={{ x: "-33.33%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {scrollContent.map((film, index) => (
              <motion.div
                key={`${film.id}-${index}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[2/3] group cursor-pointer overflow-hidden rounded-sm bg-brand-blue-dark border-2 border-brand-blue-dark hover:-translate-y-2 md:hover:-translate-y-3 transition-transform duration-300 shadow-[6px_6px_0px_0px_#fccd18] md:shadow-[8px_8px_0px_0px_#fccd18]"
              >
                {/* Poster Image */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700  opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/20 to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-brand-yellow text-brand-blue-dark text-[0.55rem] md:text-[0.6rem] font-bold uppercase tracking-widest rounded-sm">
                        {film.year}
                      </span>
                      <span className="text-white/80 text-[0.55rem] md:text-[0.6rem] font-bold uppercase tracking-widest line-clamp-1">
                        {film.role}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-1 group-hover:text-brand-yellow transition-colors duration-300 uppercase italic line-clamp-2">
                      {film.title}
                    </h3>

                    <div className="w-full h-[2px] bg-brand-yellow mt-3 md:mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Top Right ID */}
                <div className="absolute top-0 right-0 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-3xl md:text-4xl font-extrabold text-transparent stroke-text"
                    style={{ WebkitTextStroke: "1px #fff" }}
                  >
                    {film.id < 10 ? `0${film.id}` : film.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FilmTicker;
