"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const categories = [
    {
      title: "Bridal Makeup",
      bengaliTitle: "ব্রাইডাল মেকআপ",
      description: "Flawless Bengali and modern bridal makeovers crafted to make you look like royalty.",
      image: "/images/service-bridal-1.jpeg",
      link: "#bridal"
    },
    {
      title: "Hair Styling",
      bengaliTitle: "হেয়ার কাট ও স্পা",
      description: "Cut, style, blow-dry and more for a look that suits you.",
      image: "/images/service-haircut.jpeg",
      link: "#services"
    },
    {
      title: "Skin Care",
      bengaliTitle: "ত্বকের যত্ন ও ফেসিয়াল",
      description: "Rejuvenate your skin with our premium skin treatments.",
      image: "/images/service-facial.jpeg",
      link: "#services"
    },
    {
      title: "Nail Art",
      bengaliTitle: "নেল আর্ট ও এক্সটেনশন",
      description: "Beautiful nail designs and care for every occasion.",
      image: "/images/service-nails.jpeg",
      link: "#services"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Aesthetic Services
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Our Signature Specialties
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Click on any category to explore specialized services, starting pricing, and details.
          </p>
        </div>

        {/* Replicated card layout from user's image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary-light/30 flex flex-col h-full"
            >
              {/* Card Image - Rounded top corners, square bottom corners */}
              <div className="relative h-[200px] w-full overflow-hidden bg-bg-blush">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="font-poppins text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
                  {cat.bengaliTitle}
                </span>
                <h3 className="font-playfair text-lg font-bold text-text-dark mb-2">
                  {cat.title}
                </h3>
                <p className="font-poppins text-xs md:text-sm text-text-muted font-light leading-relaxed mb-5 flex-grow">
                  {cat.description}
                </p>
                <a
                  href={cat.link}
                  className="font-poppins text-xs font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 mt-auto"
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
