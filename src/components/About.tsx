"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "Premium quality original cosmetics (O3+, MAC, Huda Beauty)",
    "Fully sanitized & hygienic environment (জীবাণুমুক্ত পরিবেশ)",
    "Expert beauticians and bridal makeup specialists",
    "Reasonable pricing packages for everyone"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-bg-blush relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Images Grid */}
        <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full sm:w-[60%] h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-primary-light/30"
          >
            <Image
              src="/images/salon-interior-1.jpeg"
              alt="The Skin Ateliere Salon Interior"
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full sm:w-[50%] h-[240px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl sm:absolute sm:-bottom-8 sm:-right-4 border-4 border-white z-10"
          >
            <Image
              src="/images/salon-front.jpeg"
              alt="The Skin Ateliere Salon Store Front"
              fill
              sizes="(max-width: 640px) 100vw, 250px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Right Side Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            About Our Salon
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold mt-2 mb-1 text-text-dark"
          >
            Crafting Timeless Beauty
          </motion.h2>
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-vibes text-xl text-secondary mb-6"
          >
            আমাদের সৌন্দর্য সৃষ্টির গল্প (Our Story of Creating Beauty)
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-poppins text-sm md:text-base text-text-muted space-y-4 font-light leading-relaxed"
          >
            <p>
              At <span className="font-semibold text-text-dark">The Skin Ateliere</span>, we believe that beauty is an art form. Amader salon-e aponi paben premium treatment and professional care that brings out your inner radiance. Located in the heart of Keranitola, Midnapore, we have established ourselves as the go-to spot for women seeking unmatched style and relaxation.
            </p>
            <p>
              Whether you need traditional bridal makeup, a refreshing skin facial, or a deep nourishing hair spa, amader expert team handles it with ultimate care and premium brands. Hygiene is our top priority—protiti tool sanitized kora hoy protibar use korar age (all tools are sanitized before use) for your safety.
            </p>
          </motion.div>

          {/* Highlights checklist */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 w-full"
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-primary/20 text-secondary p-1 rounded-full mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <span className="font-poppins text-xs md:text-sm text-text-dark font-medium">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#booking"
            className="bg-primary hover:bg-primary-dark text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 mt-10"
          >
            Book Your Session
          </motion.a>
        </div>

      </div>
    </section>
  );
}
