"use client";

import React from "react";
import { Sparkles, HeartHandshake, ShieldAlert, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      title: "High-End Products Only",
      bengaliTitle: "অরিজিনাল ব্র্যান্ড প্রোডাক্টস",
      description: "We use only professional grade, skin-friendly original brands like L'Oreal, Matrix, O3+, Kryolan, MAC, and Huda Beauty."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-secondary" />,
      title: "Expert & Caring Artists",
      bengaliTitle: "অভিজ্ঞ বিউটিশিয়ান",
      description: "Amader certified team has years of beauty experience. We listen carefully and shape the exact look you desire."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
      title: "Strict Safety & Hygiene",
      bengaliTitle: "সর্বোচ্চ হাইজিন ও পরিচ্ছন্নতা",
      description: "Hygienic setup details: all tools are sterilized before use, disposable sheets are active, and salon surfaces are sanitized regularly."
    },
    {
      icon: <BadgePercent className="w-6 h-6 text-secondary" />,
      title: "Affordable Luxury Pricing",
      bengaliTitle: "বাজেট-বান্ধব লাক্সারি প্যাক",
      description: "Get premium high-end salon treatments without breaking the bank. Complete value for money in Medinipur."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Our Quality Standards
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Why we are considered the best beauty parlour &amp; salon in Keranitola, Midnapore town.
          </p>
        </div>

        {/* 4-column feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-blush border border-primary-light/40 p-6 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-primary-light/30 mb-5 flex items-center justify-center">
                {pt.icon}
              </div>
              <span className="font-poppins text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
                {pt.bengaliTitle}
              </span>
              <h3 className="font-playfair text-lg font-bold text-text-dark mb-3">
                {pt.title}
              </h3>
              <p className="font-poppins text-xs md:text-sm text-text-muted font-light leading-relaxed">
                {pt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
