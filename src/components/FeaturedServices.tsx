"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const categories = [
    {
      title: "Bridal Makeup",
      bengaliTitle: "ব্রাইডাল মেকআপ",
      image: "/images/service-bridal-1.jpeg",
      link: "#bridal"
    },
    {
      title: "Hair Styling",
      bengaliTitle: "হেয়ার কাট ও স্পা",
      image: "/images/service-haircut.jpeg",
      link: "#services"
    },
    {
      title: "Skin Care",
      bengaliTitle: "ত্বকের যত্ন ও ফেসিয়াল",
      image: "/images/service-facial.jpeg",
      link: "#services"
    },
    {
      title: "Nail Art",
      bengaliTitle: "নেল আর্ট ও এক্সটেনশন",
      image: "/images/service-nails.jpeg",
      link: "#services"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Aesthetic Services
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Our Signature Specialties
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Explore our specialized categories, customized bridal packages, and skin-hair therapies.
          </p>
        </div>

        {/* Replicated card layout: rounded image card with centered text underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center w-full"
            >
              {/* Card Image - Beautiful rounded square image card */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-bg-blush border border-primary-light/20">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Centered card content placed directly underneath */}
              <div className="mt-5 flex flex-col items-center text-center">
                <span className="font-poppins text-[9px] uppercase tracking-[0.15em] text-primary font-bold mb-1">
                  {cat.bengaliTitle}
                </span>
                <h3 className="font-poppins text-sm md:text-base font-bold text-text-dark uppercase tracking-wider mb-2">
                  {cat.title}
                </h3>
                <a
                  href={cat.link}
                  className="font-poppins text-[10px] md:text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
