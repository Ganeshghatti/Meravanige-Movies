"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <div className="relative group">
    <input
      {...props}
      className="w-full bg-brand-white border-2 border-brand-blue/10 p-3 md:p-4 outline-none text-brand-blue-dark placeholder:text-brand-blue-dark/30 font-medium transition-all duration-300 focus:border-brand-blue focus:shadow-[2px_2px_0px_0px_#fccd18] md:focus:shadow-[4px_4px_0px_0px_#fccd18] hover:border-brand-blue/30"
    />
  </div>
);

const ContactTextarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = (props) => (
  <div className="relative group">
    <textarea
      {...props}
      className="w-full bg-brand-white border-2 border-brand-blue/10 p-3 md:p-4 outline-none text-brand-blue-dark placeholder:text-brand-blue-dark/30 font-medium transition-all duration-300 focus:border-brand-blue focus:shadow-[2px_2px_0px_0px_#fccd18] md:focus:shadow-[4px_4px_0px_0px_#fccd18] hover:border-brand-blue/30 min-h-[150px] resize-none"
    />
  </div>
);

const ContactInfoCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay?: number;
}> = ({ icon, label, value, href, delay = 0 }) => {
  const CardContent = (
    <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-brand-white border border-brand-blue/10 hover:border-brand-blue transition-colors group cursor-default h-full shadow-sm hover:shadow-md overflow-hidden">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-yellow group-hover:text-brand-blue-dark transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-xs md:text-sm font-bold text-brand-blue-dark/50 uppercase tracking-widest mb-1">
          {label}
        </h4>
        <p className="text-sm md:text-lg lg:text-xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors break-all overflow-wrap-anywhere">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "6px 6px 0px 0px #fccd18" }}
      className="transition-all duration-300 h-full"
    >
      {href ? (
        <a href={href} className="block h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-brand-white text-brand-blue-dark flex flex-col overflow-x-hidden max-w-[100vw]"
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
              <div className="px-3 py-1.5 bg-brand-blue-dark text-white text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-[3px_3px_0px_0px_#fccd18]">
                Get In Touch
              </div>
              <div className="h-[1px] w-12 bg-brand-blue-dark/20"></div>
            </div>

            {/* Headline */}
            <div className="max-w-4xl overflow-hidden">
              <h1 className="text-[10vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-extrabold text-brand-blue-dark tracking-tighter break-words">
                START A <br />
                <span className="text-brand-blue">CONVERSATION.</span>
              </h1>
            </div>

            <p className="max-w-xl text-base md:text-lg lg:text-xl font-medium text-brand-blue-dark/60 leading-relaxed mt-4">
              Have a project in mind? We'd love to hear about it. Let's discuss
              how we can help your story travel further and speak louder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="flex-grow py-12 md:py-20 bg-brand-white relative overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 overflow-x-hidden">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 order-2 lg:order-1 overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                <ContactInfoCard
                  icon={<Mail size={20} />}
                  label="Email Us"
                  value="meravanigeenterprises@gmail.com"
                  href="mailto:meravanigeenterprises@gmail.com"
                  delay={0.1}
                />
                <ContactInfoCard
                  icon={<Phone size={20} />}
                  label="Call Us"
                  value="+91 99165 62166"
                  href="tel:+919916562166"
                  delay={0.2}
                />
                <ContactInfoCard
                  icon={<MapPin size={20} />}
                  label="Visit Us"
                  value="Bengaluru, Karnataka"
                  delay={0.3}
                />
              </div>

              {/* Social Proof / Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 md:mt-8 p-4 md:p-6 lg:p-8 bg-brand-blue text-white relative overflow-hidden rounded-sm shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 lg:mb-4 relative z-10">
                  We reply fast.
                </h4>
                <p className="text-white/80 leading-relaxed relative z-10 text-sm">
                  Our team typically responds within 24 hours. For urgent
                  inquiries, please give us a call.
                </p>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden min-w-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 border border-brand-blue/10 shadow-lg rounded-sm relative overflow-hidden"
              >
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 md:gap-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark/60">
                          Your Name
                        </label>
                        <ContactInput
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark/60">
                          Your Email
                        </label>
                        <ContactInput
                          type="email"
                          name="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark/60">
                        Subject
                      </label>
                      <ContactInput
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry..."
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark/60">
                        Message
                      </label>
                      <ContactTextarea
                        name="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="mt-2 py-4 px-6 md:px-8 bg-brand-blue-dark text-white font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-brand-blue hover:shadow-[6px_6px_0px_0px_#fccd18] transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed group w-full md:w-auto self-start text-xs md:text-sm"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message{" "}
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-green-500/20 bg-green-500/5 rounded-sm"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-brand-blue-dark mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-brand-blue-dark/70 text-lg max-w-md mx-auto mb-8">
                      Thank you for reaching out. We've received your message
                      and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-blue font-bold tracking-wider hover:text-brand-blue-dark underline decoration-2 underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
