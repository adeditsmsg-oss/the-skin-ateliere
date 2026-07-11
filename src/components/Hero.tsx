"use client";

import React from "react";
import Image from "next/image";
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
      className="relative min-h-[95vh] flex items-center pt-32 pb-16 lg:pb-0 px-6 md:px-8 bg-bg-cream overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-bg-blush/40 rounded-l-[100px] z-0" />
      <div className="absolute top-1/4 left-[-10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:items-end relative z-10">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pb-12 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4"
          >
            Be Your Own Kind of Beautiful
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-secondary block">Enhance Your</span>
            <span className="text-primary italic">Beauty &amp; Shine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-poppins text-sm md:text-base text-text-muted font-light max-w-lg mb-8 leading-relaxed"
          >
            We offer premium salon &amp; spa services to help you look beautiful, feel confident and stay relaxed.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-primary-light/45"
          >
            {highlights.map((hl, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary-light text-primary p-2.5 rounded-full flex-shrink-0">
                  {hl.icon}
                </div>
                <div className="flex flex-col text-left">
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

        {/* Right Column Transparent Model Image */}
        <div className="lg:col-span-5 relative flex justify-center items-end self-end h-[320px] sm:h-[400px] md:h-[500px] w-full">
          {/* Spotlight Circle Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[350px] md:h-[350px] bg-primary/10 rounded-full blur-2xl z-0" />
          
          {/* Model cutout */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full z-10 flex justify-center items-end"
          >
            <Image
              src="/images/hero-model-transparent.png"
              alt="Premium Hair & Skin Transformation"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain object-bottom scale-105 sm:scale-110 lg:scale-[1.15] origin-bottom"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
