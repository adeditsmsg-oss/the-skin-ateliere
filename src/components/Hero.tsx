"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Star } from "lucide-react";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 md:px-8 bg-zinc-950 overflow-hidden"
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
        {/* Neutral dark overlay for text contrast without pink/burgundy coloring */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Background soft glowing circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10 py-12 md:py-24">
        
        {/* Centered Text Content */}
        <div className="flex flex-col items-center text-center text-white max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary-light mb-6 text-center"
          >
            Welcome to Medinipur&apos;s Ultimate Glow Destination
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 italic text-center"
          >
            Your Skin. <br className="sm:hidden" /> Your Hair. <br className="sm:hidden" /> Your Sanctuary.
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
