"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, Clock, Sparkles } from "lucide-react";
import { serviceCategories, Service } from "@/data/services";

export default function ServiceFilter() {
  const [activeTab, setActiveTab] = useState("all");

  // Gather all services if 'all' is selected, otherwise filter by category
  const allServices: (Service & { categoryId: string })[] = [];
  serviceCategories.forEach((cat) => {
    cat.services.forEach((ser) => {
      allServices.push({ ...ser, categoryId: cat.id });
    });
  });

  const displayedServices =
    activeTab === "all"
      ? allServices
      : allServices.filter((s) => s.categoryId === activeTab);

  // Tabs navigation
  const tabs = [
    { id: "all", name: "All Services" },
    ...serviceCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Menu
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Luxury Services Catalog
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Choose a category to browse services and packages. Book instantly online.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-3 justify-start md:justify-center no-scrollbar mb-12 scroll-smooth border-b border-primary-light/35">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-poppins text-xs md:text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md active-ring"
                  : "bg-white text-text-dark hover:bg-bg-blush border border-primary-light/40"
              }`}
            >
              {tab.id === "all" && <Sparkles className="w-3.5 h-3.5" />}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="group flex flex-col h-full items-center w-full"
              >
                {/* Image and Badges - Rounded Square Image Card */}
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-bg-blush border border-primary-light/20">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Soft Warm Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Hot/New Badge */}
                  {service.popular && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm z-10 flex items-center gap-1 animate-pulse">
                      Popular
                    </span>
                  )}

                  {/* Wishlist Heart Icon */}
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-text-muted hover:text-secondary transition-colors shadow-md z-10 hover:scale-110 cursor-pointer">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content Details */}
                <div className="mt-5 flex flex-col flex-grow items-center text-center w-full">
                  <div className="flex items-center gap-3 justify-center mb-1">
                    <span className="font-poppins text-[9px] uppercase tracking-[0.15em] text-primary font-bold">
                      {service.bengaliName}
                    </span>
                    <span className="text-text-muted/30 text-xs">|</span>
                    <span className="font-poppins text-[10px] text-text-muted flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-primary" />
                      <span>{service.duration}</span>
                    </span>
                  </div>
                  
                  <h3 className="font-poppins text-sm md:text-base font-bold text-text-dark uppercase tracking-wider mb-2">
                    {service.name}
                  </h3>

                  <p className="font-poppins text-xs md:text-sm text-text-muted font-light leading-relaxed text-center max-w-sm mx-auto mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Price & Action Link */}
                  <div className="flex flex-col items-center mt-auto pt-3 border-t border-primary-light/35 w-full">
                    <div className="flex flex-col items-center mb-2">
                      <span className="font-poppins text-[9px] text-text-muted uppercase tracking-wider">
                        Starting Price
                      </span>
                      <span className="font-poppins text-base font-bold text-primary">
                        {service.price}
                      </span>
                    </div>

                    <a
                      href="#booking"
                      className="font-poppins text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
