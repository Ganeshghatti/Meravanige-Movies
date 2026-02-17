"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  KADAKK_VOICES,
  KADAKK_STATS,
  KADAKK_TOPICS,
  SPEAKS_QUOTES,
} from "../../lib/constants";
import {
  Play,
  Share2,
  Radio,
  Quote,
  ArrowRight,
  Mic,
  Disc,
  BarChart3,
  CornerDownRight,
  ArrowUpRight,
} from "lucide-react";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
};

export default function Speaks() {
  const [activeVoice, setActiveVoice] = useState<number | null>(null);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-brand-white text-brand-blue-dark overflow-x-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative bg-brand-blue min-h-[80vh] md:min-h-[90vh] flex items-center pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>

        <div className="max-w-[1440px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-brand-yellow text-brand-blue-dark text-[0.65rem] md:text-xs font-extrabold uppercase tracking-widest rounded-sm mb-6 md:mb-8 shadow-[3px_3px_0px_0px_#002b4e] md:shadow-[4px_4px_0px_0px_#002b4e]"
            >
              <Radio size={12} className="animate-pulse md:hidden" />
              <Radio size={14} className="animate-pulse hidden md:block" />
              <span>Live on Air</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[11vw] leading-[0.8] font-extrabold text-white tracking-tighter mb-6 md:mb-8"
            >
              KADAKK
              <br />
              <span
                className="text-transparent stroke-text"
                style={{ WebkitTextStroke: "1.5px #fccd18" }}
              >
                TALKS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-md sm:text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed"
            >
              Kadakk Talks is a long-form podcast platform where truth takes the
              mic. Backed by Meravanige Movies and Kadakk Cinemas, we go beyond
              cinema and headlines to bring conversations that matter. <br />
              <span className="mt-6 block">
                {" "}
                With strong storytelling roots, Kadakk Cinemas has featured
                legends and leaders including: Rishabh Shetty, Prithviraj
                Sukumaran, Shivarajkumar, Yuva Rajkumar, and more
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* TOPICS MARQUEE */}
      <section className="py-12 bg-brand-yellow text-brand-blue-dark overflow-hidden whitespace-nowrap border-y-4 border-brand-blue-dark">
        <div className="flex items-center gap-16 animate-marquee">
          {[...KADAKK_TOPICS, ...KADAKK_TOPICS, ...KADAKK_TOPICS].map(
            (topic, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-4xl font-bold tracking-wide uppercase"
              >
                <span className="opacity-100">{topic.name}</span>
                <Disc size={24} className="animate-spin-slow" />
              </div>
            ),
          )}
        </div>
        <style>{`
            .animate-marquee { animation: marquee 30s linear infinite; }
            .animate-spin-slow { animation: spin 4s linear infinite; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
      </section>

      {/* THE ARCHIVE (GUEST LIST) */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-brand-blue-dark opacity-10 absolute left-4 sm:left-6 -top-8 md:-top-10 -z-10 select-none">
                ARCHIVE
              </h3>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue">
                THE VOICES
              </h3>
              <p className="text-brand-blue-dark/60 font-bold uppercase tracking-widest text-xs mt-2 md:mt-3">
                Curated Conversations
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {KADAKK_VOICES.map((voice, idx) => (
              <motion.a
                key={idx}
                href={voice.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveVoice(idx)}
                onMouseLeave={() => setActiveVoice(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white border border-brand-blue/10 p-0 h-full flex flex-col hover:-translate-y-1 md:hover:-translate-y-2 hover:-translate-x-1 md:hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_#fccd18] md:hover:shadow-[8px_8px_0px_0px_#fccd18] transition-all duration-300 rounded-sm overflow-hidden cursor-pointer"
              >
                <div className="p-6 md:p-8 border-t border-brand-blue/10 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold text-brand-blue-dark mb-2 md:mb-3 uppercase leading-tight group-hover:text-brand-blue transition-colors">
                      {voice.name}
                    </h4>
                    <div className="h-1 w-10 md:w-12 bg-brand-blue/10 mb-3 md:mb-4 group-hover:bg-brand-yellow transition-colors duration-300"></div>
                    <p className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest text-brand-blue-dark/60">
                      {voice.role}
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t border-brand-blue/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 md:gap-2 text-brand-blue-dark/40 text-[0.65rem] md:text-xs font-bold uppercase tracking-wider">
                      <BarChart3 size={12} className="md:hidden" />
                      <BarChart3 size={14} className="hidden md:block" />
                      <span>1.2k Listens</span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-brand-blue-dark/20 group-hover:text-brand-blue transition-colors md:hidden"
                    />
                    <ArrowUpRight
                      size={18}
                      className="text-brand-blue-dark/20 group-hover:text-brand-blue transition-colors hidden md:block"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE STATISTICS */}
      <section className="py-20 md:py-32 bg-brand-blue-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-brand-yellow/30 rounded-full bg-brand-yellow/10">
                <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                  Impact Metrics
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
                AUDIENCE THAT <br />
                <span className="text-brand-yellow">LISTENS, LEARNS</span>{" "}
                <br />& LEADS.
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-md border-l-4 border-brand-blue pl-6 leading-relaxed">
                Your story reaches the people shaping culture and decisions.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {/* Stat 1 */}
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white group-hover:text-brand-yellow transition-colors font-mono tracking-tighter">
                    196,852
                  </h3>
                  <ArrowUpRight className="text-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs md:text-sm">
                  Views in the last 28 days
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white group-hover:text-brand-yellow transition-colors font-mono tracking-tighter">
                    83,569
                  </h3>
                  <ArrowUpRight className="text-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs md:text-sm">
                  Unique Monthly Viewers
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white group-hover:text-brand-yellow transition-colors font-mono tracking-tighter">
                    65%
                    <span className="text-2xl md:text-3xl align-top ml-1">
                      +
                    </span>
                  </h3>
                  <ArrowUpRight className="text-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs md:text-sm">
                  Audience Aged 18-34
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KADAKK TALKS */}
      <section className="py-20 md:py-32 bg-brand-yellow text-brand-blue-dark relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block p-4 rounded-full bg-brand-blue-dark/5 mb-8">
            <Radio className="text-brand-blue-dark w-8 h-8 md:w-12 md:h-12" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-8 md:mb-12">
            WHY KADAKK <br />
            TALKS?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight">
              Because every episode is built on purpose — not popularity.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80 max-w-2xl mx-auto">
              We highlight thinkers, changemakers, and real voices that leave an
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / PITCH - REVAMPED */}
      <section className="relative bg-brand-blue-dark text-brand-yellow py-20 md:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(252,205,24,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(252,205,24,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-brand-yellow rounded-full blur-[100px] md:blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-brand-yellow"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 border border-brand-yellow/30 rounded-full bg-brand-yellow/5 text-brand-yellow text-[0.6rem] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 hover:bg-brand-yellow hover:text-brand-blue-dark transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current animate-pulse"></span>
                Open Call for Guests
              </motion.div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6 md:mb-8">
                BE FEATURED ON
                <br />
                <span className="text-brand-yellow">KADAKK</span>
                <br />
                <span
                  className="text-transparent stroke-text"
                  style={{ WebkitTextStroke: "1px #fccd18" }}
                >
                  TALKS.
                </span>
              </h2>

              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-8 md:mb-12 border-l-4 border-brand-yellow pl-6">
                Not every story belongs in headlines — some deserve a
                conversation. If your story can move people, we want to hear it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="px-8 md:px-10 py-4 bg-brand-yellow text-brand-blue-dark font-extrabold text-sm uppercase tracking-widest hover:bg-white hover:shadow-[4px_4px_0px_0px_#ffffff] transition-all transform hover:-translate-y-1 rounded-sm flex items-center justify-center gap-3">
                    BE KADAKK <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Visual Blocks */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Block 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-white p-6 md:p-8 rounded-sm shadow-[8px_8px_0px_0px_#fccd18] transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-300 border-2 border-brand-blue-dark"
                >
                  <Quote
                    size={32}
                    className="text-brand-blue mb-4"
                    fill="currentColor"
                  />
                  <h4 className="text-xl font-extrabold text-brand-blue-dark uppercase mb-2">
                    IF YOU HAVE
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-brand-blue-dark/80 text-sm font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-blue mt-1.5 rounded-full flex-shrink-0"></span>
                      An inspiring journey
                    </li>
                    <li className="text-brand-blue-dark/80 text-sm font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-blue mt-1.5 rounded-full flex-shrink-0"></span>
                      An untold experience
                    </li>
                    <li className="text-brand-blue-dark/80 text-sm font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-blue mt-1.5 rounded-full flex-shrink-0"></span>
                      A perspective that can spark change
                    </li>
                  </ul>
                </motion.div>

                {/* Block 2 - Hidden on mobile to save space or keep visual balance? actually let's use it for the "Who we are looking for" part split */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-brand-yellow p-6 md:p-8 rounded-sm shadow-[8px_8px_0px_0px_#ffffff] transform -rotate-1 md:-rotate-1 hover:rotate-0 transition-transform duration-300 mt-0 sm:mt-12 border-2 border-brand-blue-dark flex flex-col justify-center"
                >
                  <Mic
                    size={32}
                    className="text-brand-blue-dark mb-4"
                    strokeWidth={2}
                  />
                  <h4 className="text-xl font-extrabold text-brand-blue-dark uppercase mb-2 leading-tight">
                    STORIES THAT MOVE PEOPLE
                  </h4>
                  <p className="text-brand-blue-dark/80 text-sm font-medium">
                    We're looking for voices that challenge the norm and inspire
                    action.
                  </p>
                </motion.div>

                {/* Block 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-brand-blue p-6 md:p-8 rounded-sm shadow-[8px_8px_0px_0px_#002b4e] transform rotate-1 hover:rotate-0 transition-transform duration-300 col-span-1 sm:col-span-2 max-w-md mx-auto border-2 border-brand-yellow"
                >
                  <h4 className="text-xl font-extrabold text-white uppercase mb-4 text-center">
                    Who We Are Looking For
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Creators",
                      "Professionals",
                      "Artists",
                      "Athletes",
                      "Changemakers",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-brand-blue-dark/30 text-brand-yellow text-[0.65rem] font-bold uppercase tracking-wider rounded-full border border-brand-yellow/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
