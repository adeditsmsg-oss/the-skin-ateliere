"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/services";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-8 bg-bg-blush relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="max-w-xl mx-auto mb-12">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            What Our Clients Say
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Real feedback from our happy clients about their experiences at The Skin Ateliere.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white border border-primary-light/40 p-8 md:p-12 rounded-3xl shadow-lg glow-gold">
          
          {/* Quote Icon Background decoration */}
          <div className="absolute top-6 left-6 text-primary-light opacity-30 select-none">
            <MessageSquare className="w-16 h-16" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-star text-gold-star" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-poppins text-base md:text-lg text-text-dark font-light italic leading-relaxed mb-8">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>

              {/* User Meta */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-md bg-bg-blush">
                  <Image
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-poppins text-sm font-bold text-text-dark">
                    {reviews[currentIndex].name}
                  </span>
                  <span className="font-poppins text-[10px] text-text-muted uppercase tracking-wider">
                    Verified Customer • {reviews[currentIndex].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-bg-cream hover:bg-primary-light/40 border border-primary-light/40 text-text-dark p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-bg-cream hover:bg-primary-light/40 border border-primary-light/40 text-text-dark p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel indicators dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-secondary" : "w-2 bg-primary-light"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
