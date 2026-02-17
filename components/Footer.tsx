"use client";

import React from "react";
import {
  Instagram,
  Linkedin,
  X,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-brand-white pt-16 md:pt-24 pb-8 relative overflow-hidden border-t-4 md:border-t-8 border-brand-yellow">
      {/* Background Grid Pattern (Speaks Style) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Main CTA Section */}
        <div className="flex flex-col items-start mb-16 md:mb-24 border-b border-white/10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-blue-dark font-extrabold uppercase tracking-[0.25em] text-xs rounded-sm shadow-[4px_4px_0px_0px_#002b4e]">
              Start A Project
            </span>
          </motion.div>

          <a
            href="mailto:meravanigeenterprises@gmail.com"
            className="group relative block w-full mb-8 md:mb-12"
          >
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[5.5vw] leading-[1.1] font-extrabold text-white transition-colors duration-500 tracking-tight break-words py-2 md:py-4">
              LET'S CREATE{" "}
              <span
                className="text-transparent stroke-text group-hover:text-brand-yellow transition-colors duration-300"
                style={{ WebkitTextStroke: "2px #fff" }}
              >
                IMPACT
              </span>
            </h2>
            <div className="absolute top-1/2 right-0 md:right-4 lg:right-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
              <div className="w-28 h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-brand-yellow rounded-full flex items-center justify-center shadow-[8px_8px_0px_0px_#002b4e] animate-blob">
                <ArrowUpRight size={56} className="text-brand-blue-dark" />
              </div>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-2">
              If you're building something meaningful —
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-2">
              a film, a brand, or a movement —
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
              we're ready to take it forward.
            </p>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-16 md:pb-24">
          {/* Brand Block */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="group cursor-pointer inline-block">
                <img
                  src="/logo.png"
                  alt="Meravanige"
                  className="h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[5rem] w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105 mb-4"
                />
              </Link>
              <div className="h-1 w-16 md:w-20 bg-brand-yellow mb-4 md:mb-6"></div>
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest font-bold mb-6 md:mb-8">
                Movies • Marketing • Magic
              </p>

              {/* Brands */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-xs mb-4">
                  Our Brands
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white/70 font-medium text-sm hover:text-brand-yellow transition-colors cursor-pointer"
                    >
                      Meravanige
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work#zeek-creatives"
                      className="text-white/70 font-medium text-sm hover:text-brand-yellow transition-colors cursor-pointer"
                    >
                      Zeekreatives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work#zeek-realities"
                      className="text-white/70 font-medium text-sm hover:text-brand-yellow transition-colors cursor-pointer"
                    >
                      ZeekRealities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/speaks"
                      className="text-white/70 font-medium text-sm hover:text-brand-yellow transition-colors cursor-pointer"
                    >
                      Kadakk Talks
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Tagline */}
              <p className="text-white font-bold text-sm tracking-wide">
                Creating digital culture.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <h4 className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-xs mb-6 md:mb-8">
              Directory
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-brand-yellow hover:translate-x-2 transition-all duration-300  flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-6"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-brand-yellow hover:translate-x-2 transition-all duration-300  flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-6"></span>
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/speaks"
                  className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-brand-yellow hover:translate-x-2 transition-all duration-300  flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-6"></span>
                  Speaks
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-brand-yellow hover:translate-x-2 transition-all duration-300  flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-6"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-xs mb-6 md:mb-8">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              {SOCIAL_LINKS.map((social, i) => {
                const iconMap = {
                  Instagram,
                  Twitter,
                  Youtube,
                  Mail,
                };
                const Icon = iconMap[social.icon as keyof typeof iconMap];

                if (!Icon) return null;

                return (
                  <a
                    key={i}
                    href={social.url}
                    target={social.icon !== "Mail" ? "_blank" : undefined}
                    rel={
                      social.icon !== "Mail" ? "noopener noreferrer" : undefined
                    }
                    className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue-dark border border-white/10 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-blue-dark hover:shadow-[4px_4px_0px_0px_#fff] transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0"
                    aria-label={social.ariaLabel}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            <div className="flex items-start gap-3 md:gap-4 mb-6">
              <MapPin
                className="text-brand-yellow mt-1 flex-shrink-0"
                size={18}
              />
              <address className="text-white/80 not-italic font-medium leading-relaxed text-sm md:text-base">
                #42, 2nd Floor, Indiranagar 100ft Road,
                <br />
                Bangalore, Karnataka - 560038
              </address>
            </div>

            <a
              href="tel:+919916562166"
              className="flex items-start gap-3 md:gap-4 group hover:text-brand-yellow transition-colors"
            >
              <Phone
                className="text-brand-yellow mt-1 flex-shrink-0"
                size={18}
              />
              <span className="text-white/80 font-medium text-sm md:text-base group-hover:text-brand-yellow transition-colors">
                +91 99165 62166
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6 md:pt-8 text-[0.6rem] md:text-[0.65rem] text-white/40 font-bold uppercase tracking-[0.15em] text-center md:text-left">
          <div className="order-2 md:order-1">
            © {new Date().getFullYear()} Meravanige Movies LLP. All Rights
            Reserved.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 order-1 md:order-2 justify-center">
            <Link
              href="/privacy"
              className="hover:text-brand-yellow transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-yellow transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
