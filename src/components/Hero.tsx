"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Package, User } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: <Package className="w-5 h-5 text-primary" />,
      title: "Premium Products",
      desc: "Top quality brands"
    },
    {
      icon: <User className="w-5 h-5 text-primary" />,
      title: "Expert Stylists",
      desc: "Trained professionals"
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Hygienic & Safe",
      desc: "Clean & comfortable"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-16 px-6 md:px-8 bg-bg-cream overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-bg-blush/20 rounded-l-[100px] z-0" />
      <div className="absolute top-1/4 left-[-10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10 py-12 md:py-20">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4 text-center"
          >
            Be Your Own Kind of Beautiful
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center"
          >
            <span className="text-secondary block">Enhance Your</span>
            <span className="text-primary italic">Beauty &amp; Shine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-poppins text-sm md:text-base text-text-muted font-light max-w-xl mb-8 leading-relaxed text-center mx-auto"
          >
            We offer premium salon &amp; spa services to help you look beautiful, feel confident and stay relaxed.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16"
          >
            <a
              href="#booking"
              className="bg-primary hover:bg-primary-dark text-white font-poppins text-xs md:text-sm font-semibold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all text-center"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="border border-primary/30 hover:border-primary text-primary font-poppins text-xs md:text-sm font-semibold py-3.5 px-8 rounded-full transition-colors text-center hover:bg-primary/5"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust badges at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-primary-light/45 justify-items-center"
          >
            {highlights.map((hl, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
                <div className="bg-primary-light text-primary p-2.5 rounded-full flex-shrink-0">
                  {hl.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins text-xs font-bold text-text-dark leading-tight">
                    {hl.title}
                  </span>
                  <span className="font-poppins text-[10px] text-text-muted mt-0.5">
                    {hl.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
