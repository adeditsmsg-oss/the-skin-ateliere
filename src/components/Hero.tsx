"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Star } from "lucide-react";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 md:px-8 bg-secondary overflow-hidden"
    >
      {/* Background Salon Front Image with 30% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/salon-front.jpeg"
          alt="The Skin Ateliere Storefront"
          fill
          priority
          className="object-cover opacity-30"
        />
        {/* Soft dark overlay to ensure high text contrast and readability */}
        <div className="absolute inset-0 bg-secondary/20" />
      </div>

      {/* Background soft glowing circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start text-left text-white">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary-light mb-4"
          >
            Welcome to Medinipur&apos;s Ultimate Glow Destination
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 italic"
          >
            Your Skin. <br />
            <span className="text-primary-light">Your Hair.</span> <br />
            Your Sanctuary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-poppins text-sm md:text-base text-bg-cream/90 font-light max-w-lg mb-8 leading-relaxed"
          >
            Experience luxury grooming &amp; transformation at <span className="font-semibold text-primary-light">The Skin Ateliere</span>. From flawless Bengali bridal makeup to premium hair makeovers and clinical facials, we pamper you like royalty.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#booking"
              className="bg-primary hover:bg-primary-dark text-text-dark font-poppins text-sm font-semibold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white font-poppins text-sm font-semibold py-3.5 px-8 rounded-full flex items-center justify-center transition-colors"
            >
              Explore Services
            </a>
          </motion.div>


        </div>

        {/* Right Model Image Column */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Spotlight Circle Shape */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-primary to-primary-light/40 rounded-full z-0 glow-gold"
          />

          {/* Model Image wrapper */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] h-[350px] md:w-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white/20"
          >
            <Image
              src="/images/hero-bg.jpeg"
              alt="Premium Hair & Skin Transformation"
              fill
              priority
              sizes="(max-width: 768px) 280px, 380px"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>


        </div>

      </div>
    </section>
  );
}
