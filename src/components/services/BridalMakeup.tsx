"use client";

import React from "react";
import Image from "next/image";
import { Check, Calendar, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function BridalMakeup() {
  const points = [
    "Expert Bengali traditional styling (ধুতি/শাড়ি পরানো ও টিকলি সেটিং)",
    "Use of premium sweat-proof HD cosmetics (MAC, Kryolan, Huda)",
    "Hair extensions and fresh flower decoration included",
    "Complimentary pre-bridal consultation for trial look"
  ];

  return (
    <section id="bridal" className="py-20 px-6 md:px-8 bg-bg-blush relative overflow-hidden">
      {/* Decorative floral/accent element */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Specialist Services
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 mb-1 text-text-dark">
            The Signature Bridal Glow
          </h2>
          <span className="font-vibes text-xl text-secondary">
            কনে সাজানো স্পেশালিস্ট (Bridal Specialist)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Columns - Detailed Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 className="font-playfair text-2xl font-bold text-text-dark mb-4">
              Making Your Dream Wedding Look Come True
            </h3>
            
            <p className="font-poppins text-sm md:text-base text-text-muted font-light leading-relaxed mb-6">
              Amader salon-er bridal work is legendary in Medinipur. We specialize in creating high-definition (HD) and airbrush bridal makeups that highlight your natural beauty and look absolutely stunning in your wedding photographs. Saree pleating, standard hairstyle decoration with fresh flowers (ফুল সজ্জা), and heavy bridal jewelry setting (গয়না পরানো) are done with perfection.
            </p>

            <div className="space-y-4 mb-8 w-full">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-secondary/15 text-secondary p-1 rounded-full mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <span className="font-poppins text-sm text-text-dark font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Bridal Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-white p-4 rounded-2xl border border-primary-light/40 shadow-sm">
                <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider">
                  Traditional Package
                </span>
                <h4 className="font-playfair text-lg font-bold text-text-dark mt-1">
                  HD Bridal Styling
                </h4>
                <span className="font-poppins text-lg font-bold text-primary block mt-2">
                  ₹8,500
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-primary/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-bold uppercase tracking-widest py-0.5 px-2 rounded-bl-lg">
                  Best Sell
                </div>
                <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider">
                  Luxury Package
                </span>
                <h4 className="font-playfair text-lg font-bold text-text-dark mt-1">
                  Airbrush HD Bridal
                </h4>
                <span className="font-poppins text-lg font-bold text-primary block mt-2">
                  ₹12,000
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#booking"
                className="bg-primary hover:bg-primary-dark text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Bridal Call</span>
              </a>
              <a
                href="#gallery"
                className="border border-primary/30 hover:border-primary text-primary font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span>View Bridal Work</span>
              </a>
            </div>
          </div>

          {/* Right Column - Transparent Bridal Image */}
          <div className="lg:col-span-6 relative flex justify-center items-end self-end h-[350px] md:h-[480px] lg:h-[550px] w-full mt-8 lg:mt-0 overflow-hidden">
            {/* Spotlight backdrop circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-primary/10 rounded-full blur-2xl z-0" />

            {/* Model cutout */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full z-10 flex justify-center items-end"
            >
              <Image
                src="/images/bridal-model-transparent.png"
                alt="Signature Bridal Makeup Model"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain object-bottom scale-110 sm:scale-120 lg:scale-[1.40] origin-bottom"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
