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
                <span className="font-poppins text-lg font-bold text-secondary block mt-2">
                  ₹8,500
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-secondary/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-white text-[8px] font-bold uppercase tracking-widest py-0.5 px-2 rounded-bl-lg">
                  Best Sell
                </div>
                <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider">
                  Luxury Package
                </span>
                <h4 className="font-playfair text-lg font-bold text-text-dark mt-1">
                  Airbrush HD Bridal
                </h4>
                <span className="font-poppins text-lg font-bold text-secondary block mt-2">
                  ₹12,000
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#booking"
                className="bg-secondary hover:bg-secondary/95 text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Bridal Call</span>
              </a>
              <a
                href="#gallery"
                className="border border-secondary/30 hover:border-secondary text-secondary font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span>View Bridal Work</span>
              </a>
            </div>
          </div>

          {/* Right Columns - Side-by-Side Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-primary-light/35"
            >
              <Image
                src="/images/service-bridal-1.jpeg"
                alt="Traditional Bengali Bride Makeup"
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-primary-light/35 mt-6"
            >
              <Image
                src="/images/service-bridal-2.jpeg"
                alt="Modern Bridal Style Look"
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
