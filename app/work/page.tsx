"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ZEEK_CREATIVES_SERVICES,
  ZEEK_CREATIVES_PROCESS,
  ZEEK_REALITIES_OFFERINGS,
  ZEEK_REALITIES_PROCESS,
  ZEEK_CREATIVES_CASES,
  ZEEK_REALITIES_CASES,
} from "../../lib/constants";
import { ProcessStep, CaseStudy, ServiceItem } from "../../lib/types";
import {
  ArrowUpRight,
  Building2,
  CornerDownRight,
  Disc,
  Briefcase,
  BriefcaseBusiness,
  Palette,
} from "lucide-react";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
};

const ServiceCard: React.FC<{ item: ServiceItem; idx: number }> = ({
  item,
  idx,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.05 }}
    className="group relative bg-white border border-brand-blue/10 p-6 md:p-8 h-full flex flex-col hover:-translate-y-1 md:hover:-translate-y-2 hover:-translate-x-1 md:hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_#fccd18] md:hover:shadow-[8px_8px_0px_0px_#fccd18] transition-all duration-300 rounded-sm"
  >
    <div className="absolute inset-0 bg-dot-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>

    <div className="mb-4 md:mb-6 flex justify-between items-start">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue/5 flex items-center justify-center rounded-sm group-hover:bg-brand-yellow group-hover:text-brand-blue-dark transition-colors duration-300">
        <Palette
          size={20}
          className="text-brand-blue group-hover:text-brand-blue-dark md:hidden"
          strokeWidth={1.5}
        />
        <Palette
          size={24}
          className="text-brand-blue group-hover:text-brand-blue-dark hidden md:block"
          strokeWidth={1.5}
        />
      </div>
      <span className="text-3xl md:text-4xl font-extrabold text-brand-blue/10 group-hover:text-brand-blue transition-colors">
        0{idx + 1}
      </span>
    </div>

    <h4 className="text-xl md:text-2xl font-extrabold text-brand-blue-dark mb-3 md:mb-4 group-hover:text-brand-blue transition-colors uppercase tracking-tight">
      {item.title}
    </h4>
    <p className="text-brand-blue-dark/70 text-sm leading-relaxed font-medium flex-grow">
      {item.description}
    </p>

    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-brand-blue/5 flex items-center justify-between group-hover:border-brand-blue/20 transition-colors">
      <span className="text-[0.6rem] font-bold uppercase tracking-widest text-brand-blue-dark/40 group-hover:text-brand-blue-dark transition-colors">
        Learn More
      </span>
      <ArrowUpRight
        size={14}
        className="text-brand-blue-dark/40 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all md:hidden"
      />
      <ArrowUpRight
        size={16}
        className="text-brand-blue-dark/40 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden md:block"
      />
    </div>
  </motion.div>
);

const RealityCard: React.FC<{ item: ServiceItem; idx: number }> = ({
  item,
  idx,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.05 }}
    className="relative group bg-brand-blue-dark border border-white/10 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:-translate-x-1 md:hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_#fccd18] md:hover:shadow-[8px_8px_0px_0px_#fccd18] hover:border-brand-yellow hover:bg-brand-blue"
  >
    <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-bl-full group-hover:bg-brand-yellow/20 transition-colors pointer-events-none"></div>
    <Building2
      className="text-brand-yellow mb-4 md:mb-6 group-hover:text-white transition-colors md:hidden"
      size={28}
      strokeWidth={1.5}
    />
    <Building2
      className="text-brand-yellow mb-4 md:mb-6 group-hover:text-white transition-colors hidden md:block"
      size={32}
      strokeWidth={1.5}
    />
    <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2 md:mb-3 tracking-wide">
      {item.title}
    </h4>
    <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white/80">
      {item.description}
    </p>
  </motion.div>
);

const CaseStudyStrip: React.FC<{
  study: CaseStudy;
  idx: number;
  theme: "light" | "dark";
}> = ({ study, idx, theme }) => {
  const isDark = theme === "dark";
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 md:gap-6 px-3 md:items-center justify-between py-6 md:py-10 border-t ${isDark ? "border-white/10" : "border-brand-blue/10"} group relative overflow-hidden transition-colors hover:bg-white/5`}
    >
      <div className="flex-1">
        <span
          className={`text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-1 md:mb-2 block ${isDark ? "text-brand-yellow" : "text-brand-blue"}`}
        >
          {study.category}
        </span>
        <h4
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-brand-blue-dark"}`}
        >
          {study.title}
        </h4>
      </div>
      <div className="flex items-center gap-6 md:gap-12">
        <div
          className={`text-left md:text-right ${isDark ? "text-white/40" : "text-brand-blue-dark/40"}`}
        >
          <div
            className={`text-2xl md:text-3xl font-extrabold ${isDark ? "text-white" : "text-brand-blue-dark"}`}
          >
            {study.metric}
          </div>
          <div className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-wider font-bold">
            Impact
          </div>
        </div>
        <div
          className={`w-12 h-12 md:w-16 md:h-16 border-2 ${isDark ? "border-white/20 text-white" : "border-brand-blue/20 text-brand-blue"} flex items-center justify-center group-hover:bg-brand-yellow group-hover:border-brand-yellow group-hover:text-brand-blue-dark transition-all shadow-none group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] md:group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex-shrink-0`}
        >
          <ArrowUpRight size={24} className="md:hidden" />
          <ArrowUpRight size={28} className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default function OurWork() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-brand-white text-brand-blue-dark overflow-x-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative bg-brand-yellow min-h-[80vh] md:min-h-[90vh] flex items-center pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 overflow-hidden border-b-4 border-brand-blue-dark">
        <div className="absolute top-0 right-5 md:right-10 w-24 md:w-32 h-full bg-black/5 skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/5 to-transparent"></div>

        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <div className="flex flex-col">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue-dark text-brand-yellow flex items-center justify-center rounded-sm shadow-[3px_3px_0px_0px_#002b4e] md:shadow-[4px_4px_0px_0px_#002b4e]">
                <BriefcaseBusiness size={20} className="md:hidden" />
                <BriefcaseBusiness size={24} className="hidden md:block" />
              </div>
              <span className="text-brand-blue-dark font-extrabold uppercase tracking-[0.25em] text-xs md:text-sm">
                Portfolio Active
              </span>
            </motion.div>

            <div className="relative mb-8 md:mb-10">
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[12vw] leading-[0.75] font-extrabold text-brand-blue-dark select-none tracking-tighter"
              >
                OUR WORK.
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1.5 md:h-2 lg:h-4 bg-brand-blue-dark mt-4 md:mt-5"
              ></motion.div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue-dark max-w-2xl leading-tight"
              >
                Two specialized wings. One unified vision. <br />
                <span className="opacity-60">
                  Precision in Strategy & Real Estate Narratives.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-1 md:gap-2"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue-dark">
                  150+
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-blue-dark/60">
                  Projects Delivered
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ZEEK CREATIVES */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-brand-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(1,86,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,86,158,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="h-px w-8 md:w-12 bg-brand-blue"></span>
                <span className="text-brand-blue font-bold uppercase tracking-[0.25em] text-xs">
                  Division 01
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-brand-blue-dark tracking-tighter">
                ZEEK <br />
                <span
                  className="text-transparent stroke-text"
                  style={{ WebkitTextStroke: "1.5px #01569e" }}
                >
                  CREATIVES
                </span>
              </h2>
              <p className="text-brand-blue-dark/60 font-bold uppercase tracking-widest text-xs mt-4 md:mt-6 ml-1">
                Creative Campaign Studio
              </p>
            </div>
            <div className="max-w-md">
              <p className="font-medium italic text-lg md:text-xl text-brand-blue-dark/80 border-l-4 border-brand-yellow pl-4 md:pl-6">
                We build visual stories that define brands and promote cinema.
                Zeekreatives blends design, digital culture, and storytelling to
                create campaigns that feel relevant, engaging, and memorable.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {ZEEK_CREATIVES_SERVICES.map((service, idx) => (
              <Link key={idx} href="/contact">
                <ServiceCard item={service} idx={idx} />
              </Link>
            ))}
          </div>

          <div className="border-t border-brand-blue/10 pt-12 md:pt-16">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-yellow rounded-sm"></div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-blue tracking-tight">
                RECENT WINS
              </h3>
            </div>
            <div className="grid gap-4 md:gap-6">
              {ZEEK_CREATIVES_CASES.map((study, idx) => (
                <CaseStudyStrip
                  key={idx}
                  study={study}
                  idx={idx}
                  theme="light"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <section className="py-12 bg-brand-yellow text-brand-blue-dark overflow-hidden whitespace-nowrap border-y-4 border-brand-blue-dark">
        <div className="flex items-center gap-16 animate-marquee">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-4xl font-bold tracking-wide uppercase"
            >
              <span className="opacity-100">
                DIGITAL • REALTY • STRATEGY • CINEMA
              </span>
              <Disc size={24} className="animate-spin-slow" />
            </div>
          ))}
        </div>
        <style>{`
            .animate-marquee { animation: marquee 30s linear infinite; }
            .animate-spin-slow { animation: spin 4s linear infinite; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
      </section>

      {/* ZEEK REALITIES */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="h-px w-8 md:w-12 bg-brand-yellow"></span>
                <span className="text-brand-yellow font-bold uppercase tracking-[0.25em] text-xs">
                  Division 02
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight">
                ZEEK <br />
                <span
                  className="text-transparent stroke-text"
                  style={{ WebkitTextStroke: "1.5px #fccd18" }}
                >
                  REALITIES
                </span>
              </h2>
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs mt-4 md:mt-6 ml-1">
                Real Estate Marketing & Visual Storytelling
              </p>
            </div>
            <div className="max-w-md">
              <p className="font-medium italic text-lg md:text-xl text-white/80 border-l-4 border-brand-yellow pl-4 md:pl-6">
                A dedicated wing focused on turning real estate projects into
                aspirational lifestyle stories. We help developers and builders
                present spaces not just as properties — but as experiences.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {ZEEK_REALITIES_OFFERINGS.map((offer, idx) => (
              <Link key={idx} href="/contact">
                <RealityCard item={offer} idx={idx} />
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-12 md:pt-16">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-yellow rounded-sm"></div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-yellow tracking-tight">
                LANDMARK PROJECTS
              </h3>
            </div>
            <div className="grid gap-4 md:gap-6">
              {ZEEK_REALITIES_CASES.map((study, idx) => (
                <CaseStudyStrip
                  key={idx}
                  study={study}
                  idx={idx}
                  theme="dark"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-brand-yellow text-brand-blue-dark text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block p-3 md:p-4 rounded-full bg-brand-blue-dark/5 mb-6 md:mb-8">
            <Briefcase className="text-brand-blue-dark" size={28} />
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-none">
            READY TO START?
          </h3>
          <p className="text-brand-blue-dark/80 mb-8 md:mb-10 text-lg md:text-xl font-medium leading-relaxed italic max-w-xl mx-auto">
            "Whether it's a blockbuster release or a luxury villa, we have the
            blueprint."
          </p>
          <Link href="/contact">
            <button className="px-8 md:px-12 py-4 md:py-5 bg-brand-blue-dark text-white text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] hover:bg-white hover:text-brand-blue-dark hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-sm flex items-center gap-2 md:gap-3 mx-auto shadow-[4px_4px_0px_0px_#ffffff]">
              Let's Collaborate{" "}
              <CornerDownRight size={14} className="md:hidden" />
              <CornerDownRight size={16} className="hidden md:block" />
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
