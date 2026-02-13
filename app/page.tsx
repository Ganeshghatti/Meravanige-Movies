"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FilmTicker from "@/components/FilmTicker";
import { MERAVANIGE_SERVICES } from "../lib/constants";
import { MoveRight, TrendingUp, ArrowRight, Activity, Zap } from "lucide-react";
import Link from "next/link";

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServiceCard: React.FC<{ service: any; idx: number }> = ({
  service,
  idx,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="group relative bg-white border border-brand-blue/10 p-6 md:p-8 hover:-translate-y-1 md:hover:-translate-y-2 hover:-translate-x-1 md:hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_#fccd18] md:hover:shadow-[8px_8px_0px_0px_#fccd18] transition-all duration-300 rounded-sm h-full flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <span className="text-3xl md:text-4xl font-extrabold text-brand-blue/10 group-hover:text-brand-blue transition-colors">
          0{idx + 1}
        </span>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue/5 rounded-full flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-blue-dark transition-colors">
          <ArrowRight
            size={16}
            className="md:hidden transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
          <ArrowRight
            size={18}
            className="hidden md:block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
      <h4 className="text-xl md:text-2xl font-bold text-brand-blue-dark mb-3 md:mb-4 group-hover:text-brand-blue transition-colors">
        {service.title}
      </h4>
      <p className="text-brand-blue-dark/60 leading-relaxed text-sm font-medium">
        {service.description}
      </p>
    </div>
    <div className="mt-6 md:mt-8 h-1 w-full bg-brand-blue/5 group-hover:bg-brand-yellow transition-colors duration-300"></div>
  </motion.div>
);

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col min-h-screen bg-brand-white"
    >
      <HeroSection />

      {/* Philosophy / Intro Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-white relative border-t border-brand-blue/5 overflow-hidden">
        {/* Decorative Grid from Speaks */}
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[linear-gradient(rgba(1,86,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,86,158,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeInUp}
            className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center"
          >
            {/* Visual / Graphic Side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-brand-blue transform translate-x-3 md:translate-x-4 translate-y-3 md:translate-y-4 rounded-sm"></div>
              <div className="relative bg-brand-white border-2 border-brand-blue-dark p-8 md:p-10 lg:p-14 rounded-sm flex flex-col justify-between aspect-[4/5] shadow-xl">
                <div>
                  <Activity
                    size={40}
                    className="text-brand-blue mb-4 md:mb-6 md:hidden"
                  />
                  <Activity
                    size={48}
                    className="text-brand-blue mb-4 md:mb-6 hidden md:block"
                  />
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue-dark leading-[0.9] tracking-tight">
                    CULTURE <br /> IS NOT <br /> CREATED.
                  </h3>
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-base md:text-lg mb-2">
                    It is captured.
                  </p>
                  <div className="h-1.5 md:h-2 w-20 md:w-24 bg-brand-yellow"></div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
              <div>
                <span className="flex items-center gap-2 md:gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue mb-4 md:mb-6">
                  <span className="w-6 md:w-8 h-[2px] bg-brand-yellow"></span>
                  FILM MARKETING & DIGITAL PR
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-brand-blue-dark leading-[0.85] tracking-tighter">
                  CINEMA & <br />
                  <span
                    className="text-transparent stroke-text"
                    style={{ WebkitTextStroke: "1.5px #01569e" }}
                  >
                    STRATEGY.
                  </span>
                </h2>
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl text-brand-blue-dark/90 font-medium leading-relaxed border-l-4 border-brand-blue pl-4 md:pl-8">
                Nearly a decade of shaping stories for the big screen and
                beyond.{" "}
                <span className="font-bold text-brand-blue">
                  Meravanige Movies
                </span>{" "}
                is where cinema meets strategy, creativity meets reach, and
                stories find their audience.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 md:gap-10 pt-6 md:pt-8">
                <div className="group">
                  <h4 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-bold tracking-wider text-brand-blue mb-2 md:mb-3">
                    <TrendingUp size={18} className="sm:hidden" />
                    <TrendingUp size={20} className="hidden sm:block" />
                    Precision Targeting
                  </h4>
                  <p className="text-brand-blue-dark/70 leading-relaxed text-sm font-medium">
                    We don't rely on guesswork. We analyze trends, study
                    demographics, and position your narrative exactly where it
                    needs to be.
                  </p>
                </div>
                <div className="group">
                  <h4 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-bold tracking-wider text-brand-blue mb-2 md:mb-3">
                    <Zap size={18} className="sm:hidden" />
                    <Zap size={20} className="hidden sm:block" />
                    Creative Disruption
                  </h4>
                  <p className="text-brand-blue-dark/70 leading-relaxed text-sm font-medium">
                    In a noisy digital world, safe is dangerous. We create
                    campaigns that disrupt feeds and spark conversations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-blue relative overflow-hidden">
        {/* Speaks Hero Grid Pattern (White/Transparent) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 md:pb-10 border-b border-white/10 gap-6">
            <div>
              <span className="inline-block px-2.5 md:px-3 py-1 bg-brand-yellow text-brand-blue-dark font-extrabold uppercase tracking-[0.25em] text-[0.65rem] md:text-xs mb-4 md:mb-6 rounded-sm">
                Our Expertise
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-none tracking-tight">
                WHAT{" "}
                <span
                  className="text-transparent stroke-text"
                  style={{ WebkitTextStroke: "1.5px #ffffff" }}
                >
                  WE DO
                </span>
              </h3>
            </div>
            <p className="text-white/70 max-w-sm text-base md:text-lg font-medium md:text-right">
              Comprehensive media solutions tailored for the entertainment and
              lifestyle industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MERAVANIGE_SERVICES.map((service, idx) => (
              <ServiceCard key={idx} service={service} idx={idx} />
            ))}

            {/* CTA Block */}
            <Link
              href="/work"
              className="block sm:col-span-2 lg:col-span-1 h-full"
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="bg-brand-yellow text-brand-blue-dark h-full min-h-[250px] md:min-h-[300px] p-8 md:p-10 flex flex-col justify-between items-start text-left cursor-pointer relative overflow-hidden group rounded-sm shadow-[6px_6px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000]"
              >
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.22, 1, 0.36, 1] z-0"></div>
                <div className="relative z-10 flex justify-between w-full">
                  <div className="bg-brand-blue-dark text-white p-2.5 md:p-3 rounded-full group-hover:bg-brand-blue transition-colors">
                    <MoveRight size={20} className="md:hidden" />
                    <MoveRight size={24} className="hidden md:block" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
                    VIEW ALL WORK
                  </h4>
                  <p className="text-[0.65rem] md:text-xs font-bold uppercase tracking-widest opacity-70">
                    Discover our portfolio
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="bg-brand-blue-dark overflow-hidden border-t-4 border-brand-yellow">
        <FilmTicker />
      </section>
    </motion.div>
  );
}
