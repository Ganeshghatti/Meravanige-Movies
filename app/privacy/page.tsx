"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-10 last:mb-0">
    <h3 className="text-xl md:text-2xl font-bold text-brand-blue-dark mb-4 sticky top-24 bg-brand-white/95 backdrop-blur-sm py-2 z-10 inline-block border-b-2 border-brand-yellow">
      {title}
    </h3>
    <div className="text-brand-blue-dark/80 text-base md:text-lg leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export default function Privacy() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-brand-white text-brand-blue-dark flex flex-col"
    >
      {/* HEADER SECTION */}
      <section className="relative pt-10 md:pt-16 pb-12 md:pb-20 border-b border-brand-blue/10 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[linear-gradient(rgba(1,86,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,86,158,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>

        {/* Abstract Blob Element */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 bg-brand-blue-dark text-white text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-[3px_3px_0px_0px_#fccd18] flex items-center gap-2">
                <ShieldCheck size={14} />
                LEGAL
              </div>
              <div className="h-[1px] w-12 bg-brand-blue-dark/20"></div>
            </div>

            {/* Headline */}
            <div className="max-w-4xl">
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-extrabold text-brand-blue-dark tracking-tighter">
                PRIVACY <br />
                <span className="text-brand-blue">POLICY.</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg md:text-xl font-medium text-brand-blue-dark/60 leading-relaxed mt-4">
              We value your privacy. This policy outlines how we handle your
              data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="flex-grow py-12 md:py-20 bg-brand-white relative">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-12 border border-brand-blue/10 shadow-lg rounded-sm relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-brand-blue-dark prose-p:text-brand-blue-dark/80 prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline">
              <Section title="1. Information Collection">
                <p>
                  We collect information that you voluntarily provide to us when
                  you fill out contact forms on our website. This may include
                  your name, email address, phone number, and project details.
                </p>
                <p>
                  We also automatically collect certain information when you
                  visit our website, such as your IP address, browser type, and
                  device information, for analytics purposes to improve our user
                  experience.
                </p>
              </Section>

              <Section title="2. Use of Information">
                <p>The information we collect is used to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to your inquiries and support needs.</li>
                  <li>Provide quotes and project proposals.</li>
                  <li>Improve our website and services.</li>
                  <li>
                    Send periodic emails regarding your order or other products
                    and services (if opted in).
                  </li>
                </ul>
              </Section>

              <Section title="3. Information Sharing">
                <p>
                  We do not sell, trade, or rent your personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners and trusted affiliates.
                </p>
              </Section>

              <Section title="4. Cookies">
                <p>
                  Our site may use "cookies" to enhance user experience. A
                  user's web browser places cookies on their hard drive for
                  record-keeping purposes and sometimes to track information
                  about them. You may choose to set your web browser to refuse
                  cookies or to alert you when cookies are being sent.
                </p>
              </Section>

              <Section title="5. Security">
                <p>
                  We adopt appropriate data collection, storage, and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure, or destruction of
                  your personal information.
                </p>
              </Section>

              <Section title="6. Contact Us">
                <p>
                  If you have any questions about this Privacy Policy, the
                  practices of this site, or your dealings with this site,
                  please contact us at:
                  <br />
                  <a
                    href="mailto:meravanigeenterprises@gmail.com"
                    className="font-bold"
                  >
                    meravanigeenterprises@gmail.com
                  </a>
                </p>
              </Section>

              <div className="mt-12 pt-8 border-t border-brand-blue/10 text-sm text-brand-blue-dark/50 font-medium">
                Last Updated: February 2026
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
