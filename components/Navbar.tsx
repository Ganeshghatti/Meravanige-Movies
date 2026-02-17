"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop Navbar - Quote Style */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 md:px-8 lg:px-12 transition-all duration-500 ${
          scrolled
            ? "bg-brand-blue-dark shadow-[0_4px_0px_0px_#fccd18] md:shadow-[0_8px_0px_0px_#fccd18]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          {/* Left Side - Quote with Nav Links */}
          <div className="flex items-baseline gap-2 md:gap-3 flex-wrap">
            <Link
              href="/work"
              className={`text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold tracking-tight lowercase leading-none transition-all duration-500 ${
                scrolled
                  ? isActive("/work")
                    ? "text-brand-yellow"
                    : "text-white hover:text-brand-yellow"
                  : isActive("/work")
                    ? "text-brand-blue"
                    : "text-brand-blue-dark hover:text-brand-blue"
              }`}
            >
              ourwork
            </Link>
            <Link
              href="/speaks"
              className={`text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold tracking-tight lowercase leading-none transition-all duration-500 ${
                scrolled
                  ? isActive("/speaks")
                    ? "text-brand-yellow"
                    : "text-white/70 hover:text-brand-yellow"
                  : isActive("/speaks")
                    ? "text-brand-blue"
                    : "text-brand-blue-dark/70 hover:text-brand-blue"
              }`}
            >
              speaks
            </Link>
          </div>

          {/* Right Side - Signature Style Brand */}
          <Link
            href="/"
            className="flex flex-col items-end group cursor-pointer flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Meravanige"
              className="h-[2.5rem] md:h-[3rem] lg:h-[4rem] xl:h-[5rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 py-3 px-4 transition-all duration-500 ${
          scrolled
            ? "bg-brand-blue-dark shadow-[0_3px_0px_0px_#fccd18]"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Mobile Logo */}
          <Link href="/" className="flex flex-col flex-shrink-0">
            <img
              src="/logo.png"
              alt="Meravanige"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none transition-colors duration-500 flex-shrink-0 ${
              isOpen
                ? "text-white hover:text-brand-yellow"
                : scrolled
                  ? "text-white hover:text-brand-yellow"
                  : "text-brand-blue-dark hover:text-brand-blue"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-brand-blue-dark z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/work"
          className={`text-3xl sm:text-4xl font-semibold lowercase text-white hover:text-brand-yellow transition-colors ${isActive("/work") ? "text-brand-yellow" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          ourwork
        </Link>
        <Link
          href="/speaks"
          className={`text-3xl sm:text-4xl font-semibold lowercase text-white hover:text-brand-yellow transition-colors ${isActive("/speaks") ? "text-brand-yellow" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          speaks
        </Link>
        <Link
          href="/contact"
          className={`text-3xl sm:text-4xl font-semibold lowercase text-white hover:text-brand-yellow transition-colors ${isActive("/contact") ? "text-brand-yellow" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
