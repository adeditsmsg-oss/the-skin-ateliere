"use client";

import React from "react";
import { Award, ShieldCheck, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBar() {
  const stats = [
    {
      icon: <Star className="w-5 h-5 text-secondary fill-secondary" />,
      value: "4.9 ★ Rating",
      label: "On Google Business Profile"
    },
    {
      icon: <Users className="w-5 h-5 text-secondary" />,
      value: "2,000+ Clients",
      label: "Groomed & Transformed"
    },
    {
      icon: <Award className="w-5 h-5 text-secondary" />,
      value: "5+ Years",
      label: "Of Industry Excellence"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
      value: "100% Safe",
      label: "Hygienic & Sterilized Tools"
    }
  ];

  return (
    <section className="bg-bg-blush border-y border-primary-light/50 py-8 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 justify-center"
            >
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-primary-light/30">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-base font-bold text-text-dark">
                  {stat.value}
                </span>
                <span className="font-poppins text-xs text-text-muted">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
