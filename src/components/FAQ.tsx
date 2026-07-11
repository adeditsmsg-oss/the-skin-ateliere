"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/services";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-8 bg-bg-blush relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ Section
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Got questions? We have answers. If you don&apos;t find your answer here, feel free to call or WhatsApp us.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-primary-light/45 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors hover:bg-bg-cream/40 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm md:text-base font-semibold text-text-dark leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-primary-light/20">
                        <p className="font-poppins text-xs md:text-sm text-text-muted font-light leading-relaxed pl-9">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
