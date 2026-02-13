"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FileText } from "lucide-react";

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

export default function Terms() {
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
                <FileText size={14} />
                LEGAL
              </div>
              <div className="h-[1px] w-12 bg-brand-blue-dark/20"></div>
            </div>

            {/* Headline */}
            <div className="max-w-4xl">
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-extrabold text-brand-blue-dark tracking-tighter">
                TERMS & <br />
                <span className="text-brand-blue">CONDITIONS.</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg md:text-xl font-medium text-brand-blue-dark/60 leading-relaxed mt-4">
              Please read these terms carefully before using our website or
              engaging our services.
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
              <Section title="1. Introduction">
                <p>
                  Welcome to Meravanige ("we," "our," or "us"). By accessing or
                  using our website, services, and creative works, you agree to
                  be bound by these Terms and Conditions. If you differ with any
                  part of these terms, you may not access the service.
                </p>
              </Section>

              <Section title="2. Intellectual Property">
                <p>
                  The content, organization, graphics, design, compilation,
                  magnetic translation, digital conversion, and other matters
                  related to the Site are protected under applicable copyrights,
                  trademarks, and other proprietary (including but not limited
                  to intellectual property) rights.
                </p>
                <p>
                  The creative works displayed in our portfolio remain the
                  intellectual property of their respective owners or
                  Meravanige, as applicable by contract. You deemed strictly
                  prohibited from copying, redistributing, using or publishing
                  any such matters or any part of the Site.
                </p>
              </Section>

              <Section title="3. Services">
                <p>
                  Meravanige provides movie marketing, digital strategy,
                  specific campaign designs, and PR services. The specific
                  deliverables, timelines, and costs for any project will be
                  governed by a separate Service Agreement or Statement of Work
                  signed by both parties.
                </p>
              </Section>

              <Section title="4. User Conduct">
                <p>
                  You agree to use our website only for lawful purposes. You are
                  prohibited from posting on or transmitting through the Site
                  any material that is unlawful, harmful, threatening, abusive,
                  harassing, defamatory, vulgar, obscene, sexually explicit,
                  profane, hateful, racially, ethnically, or otherwise
                  objectionable.
                </p>
              </Section>

              <Section title="5. Limitation of Liability">
                <p>
                  In no event shall Meravanige be liable for any direct,
                  indirect, incidental, special, consequential, or exemplary
                  damages, including but not limited to, damages for loss of
                  profits, goodwill, use, data, or other intangible losses
                  resulting from the use of or inability to use the service.
                </p>
              </Section>

              <Section title="6. Changes to Terms">
                <p>
                  We reserve the right to modify these terms at any time. We
                  will always post the most current version on our website. By
                  continuing to use the website after changes are made, you
                  agree to be bound by the revised terms.
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
