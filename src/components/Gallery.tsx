"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const beforeAfterPhotos = [
    {
      title: "Bridal Transformation",
      bengaliTitle: "ব্রাইডাল মেকওভার",
      image: "/images/work-before-after-3.jpeg"
    },
    {
      title: "Hair Coloring Magic",
      bengaliTitle: "চুলের হাইলাইটস ও কাট",
      image: "/images/work-before-after-4.jpeg"
    },
    {
      title: "Skin Rejuvenation Glow",
      bengaliTitle: "ত্বকের ডি-ট্যান ও গ্লো",
      image: "/images/work-before-after-1.jpeg"
    },
    {
      title: "Party Makeup Glow",
      bengaliTitle: "পার্টি মেকআপ গ্লো",
      image: "/images/work-before-after-2.jpeg"
    },
    {
      title: "Hairstyle Makeover",
      bengaliTitle: "নতুন হেয়ার কাট",
      image: "/images/work-before-after-5.jpeg"
    },
    {
      title: "Bridal Mehendi & Nails",
      bengaliTitle: "মেহেন্দি ও নেল আর্ট",
      image: "/images/work-before-after-6.jpeg"
    },
    {
      title: "Eye & Brow Grooming",
      bengaliTitle: "আইব্রো প্লাক ও ফিনিশ",
      image: "/images/work-before-after-7.jpeg"
    }
  ];

  const galleryItems = [
    { id: 1, category: "bridal", image: "/images/service-bridal-1.jpeg", alt: "Bengali Bridal Styling" },
    { id: 2, category: "hair", image: "/images/service-haircut.jpeg", alt: "Modern Hair Styling" },
    { id: 3, category: "skin", image: "/images/service-facial.jpeg", alt: "Brightening Skin Treatment" },
    { id: 4, category: "nails", image: "/images/service-nails.jpeg", alt: "Gel Nail Extensions" },
    { id: 5, category: "bridal", image: "/images/service-bridal-2.jpeg", alt: "Bridal Reception Look" },
    { id: 6, category: "interior", image: "/images/gallery-hospitality.jpeg", alt: "Salon Hospitality Lounge" },
    { id: 7, category: "skin", image: "/images/gallery-wo.jpeg", alt: "Skin Care Consultation" },
    { id: 8, category: "hair", image: "/images/service-hairwash.jpeg", alt: "Professional Head Massage & Wash" },
    { id: 9, category: "interior", image: "/images/salon-interior-1.jpeg", alt: "Modern Treatment Room" },
    { id: 10, category: "interior", image: "/images/salon-interior-2.jpeg", alt: "Pedicure & Styling Stations" },
    { id: 11, category: "interior", image: "/images/salon-front.jpeg", alt: "Salon Entrance View" },
    { id: 12, category: "bridal", image: "/images/bridal-apply.jpeg", alt: "Bridal Makeup Application" },
    { id: 13, category: "hair", image: "/images/service-hairspa.jpeg", alt: "Nourishing Hair Cream Spa" },
    { id: 14, category: "hair", image: "/images/team-stylist.jpeg", alt: "Professional Stylist Grooming" },
    { id: 15, category: "skin", image: "/images/gallery-enhance-1.jpeg", alt: "Skin Glow Session" },
    { id: 16, category: "skin", image: "/images/gallery-enhance-2.jpeg", alt: "Advanced Hydration Facial" },
    { id: 17, category: "skin", image: "/images/gallery-enhance-4.jpeg", alt: "Deep Cleansing Therapy" },
    { id: 18, category: "nails", image: "/images/service-manicure.jpeg", alt: "Rose Petal Manicure Soak" },
    { id: 19, category: "nails", image: "/images/gallery-enhance-3.jpeg", alt: "Spa Pedicure & Foot Scrub" },
    { id: 20, category: "nails", image: "/images/service-waxing.jpeg", alt: "Waxing & Threading Service" }
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "bridal", label: "Bridal Glow" },
    { id: "hair", label: "Hair Fashion" },
    { id: "skin", label: "Skin & Facial" },
    { id: "interior", label: "Our Salon" }
  ];

  return (
    <section id="gallery" className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        
        {/* Before & After Transformations sub-section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Real Results
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
              Before &amp; After Makeovers
            </h2>
            <p className="font-poppins text-sm text-text-muted mt-3">
              Witness the incredible beauty transformations done by our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {beforeAfterPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="bg-bg-blush border border-primary-light/45 p-4 rounded-3xl shadow-sm group"
              >
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden shadow-inner mb-4">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  
                  {/* Before After watermark tag */}
                  <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Real Work
                  </div>
                </div>

                <div className="text-left px-2">
                  <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider">
                    {photo.bengaliTitle}
                  </span>
                  <h4 className="font-playfair text-base font-bold text-text-dark mt-0.5">
                    {photo.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-px bg-primary-light/35 w-full mb-20" />

        {/* Gallery grid sub-section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
              Our Beauty Gallery
            </h2>
            <p className="font-poppins text-sm text-text-muted mt-3">
              Browse snapshots of salon styling, luxury lounge, and nail art.
            </p>
          </div>

          {/* Filter Categories navigation */}
          <div className="flex overflow-x-auto pb-4 gap-2 justify-start md:justify-center no-scrollbar mb-10 border-b border-primary-light/20">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-poppins text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-xl transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-secondary text-white shadow-sm"
                    : "bg-white text-text-dark hover:bg-bg-blush border border-primary-light/45"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="relative h-[200px] md:h-[260px] rounded-2xl overflow-hidden shadow-sm group border border-primary-light/30 bg-bg-blush"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-poppins text-xs text-white font-medium flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      <span>{item.alt}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
