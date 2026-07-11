"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      title: "Hair Makeovers",
      bengaliTitle: "হেয়ার কাট ও স্পা",
      image: "/images/service-haircut.jpeg",
      link: "#services"
    },
    {
      title: "Skin & Facial",
      bengaliTitle: "ত্বকের যত্ন ও ফেসিয়াল",
      image: "/images/service-facial.jpeg",
      link: "#services"
    },
    {
      title: "Nail Extensions",
      bengaliTitle: "নেল আর্ট ও এক্সটেনশন",
      image: "/images/service-nails.jpeg",
      link: "#services"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Aesthetic Services
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Our Signature Specialities
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Click on any category to explore specialized services, starting pricing, and details.
          </p>
        </div>

        {/* 4-column rounded capsule layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.a
              key={index}
              href={cat.link}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[220px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer block"
            >
              {/* Background image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Burgundy/Rose Gold Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Text content inside banner */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-white">
                <div className="flex flex-col">
                  <span className="font-poppins text-[10px] uppercase tracking-wider text-primary-light font-semibold mb-0.5">
                    {cat.bengaliTitle}
                  </span>
                  <span className="font-playfair text-xl font-bold">
                    {cat.title}
                  </span>
                </div>
                <div className="bg-primary group-hover:bg-primary-dark text-text-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
