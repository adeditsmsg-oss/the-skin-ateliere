"use client";

import React from "react";
import { Phone, MessageSquare, Calendar, MapPin } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-primary-light/50 px-4 py-2 flex justify-around items-center shadow-lg">
      {/* Call Now */}
      <a
        href="tel:+919134161165"
        className="flex flex-col items-center gap-0.5 text-text-dark hover:text-primary transition-colors py-1 px-2"
      >
        <Phone className="w-5 h-5 text-secondary" />
        <span className="font-poppins text-[10px] font-medium uppercase tracking-wider">
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919134161165"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-text-dark hover:text-green-600 transition-colors py-1 px-2"
      >
        <MessageSquare className="w-5 h-5 text-green-500" />
        <span className="font-poppins text-[10px] font-medium uppercase tracking-wider">
          WhatsApp
        </span>
      </a>

      {/* Book */}
      <a
        href="#booking"
        className="flex flex-col items-center gap-0.5 text-text-dark hover:text-primary transition-colors py-1 px-2"
      >
        <Calendar className="w-5 h-5 text-primary" />
        <span className="font-poppins text-[10px] font-medium uppercase tracking-wider">
          Book
        </span>
      </a>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/place/The+Skin+Ateliere/@22.4298541,87.3097561,10e5"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-text-dark hover:text-primary transition-colors py-1 px-2"
      >
        <MapPin className="w-5 h-5 text-secondary" />
        <span className="font-poppins text-[10px] font-medium uppercase tracking-wider">
          Directions
        </span>
      </a>
    </div>
  );
}
