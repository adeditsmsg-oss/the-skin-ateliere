"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-24 lg:pb-8 px-6 md:px-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-12">
        
        {/* Brand Info */}
        <div className="flex flex-col items-start">
          <Link href="#home" className="flex flex-col mb-4">
            <span className="font-vibes text-3xl text-primary-light leading-none">
              The Skin Ateliere
            </span>
            <span className="font-poppins text-[9px] tracking-[0.25em] uppercase text-white/70 font-semibold mt-1 leading-none">
              Premium Salon &amp; Spa
            </span>
          </Link>
          <p className="font-poppins text-xs text-white/70 font-light leading-relaxed mb-6">
            Midnapore&apos;s leading beauty destination. We deliver professional bridal makeovers, clinical facials, custom hair styling, and safe hygiene practices for an unparalleled luxury experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-playfair text-lg font-bold text-primary-light mb-5">
            Quick Navigation
          </h4>
          <ul className="space-y-3 font-poppins text-xs font-light text-white/80">
            <li>
              <Link href="#home" className="hover:text-primary-light transition-colors">
                Home Page
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary-light transition-colors">
                About Our Salon
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Services Menu
              </Link>
            </li>
            <li>
              <Link href="#bridal" className="hover:text-primary-light transition-colors">
                Bridal Packages
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-primary-light transition-colors">
                Transformation Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-playfair text-lg font-bold text-primary-light mb-5">
            Salon Services
          </h4>
          <ul className="space-y-3 font-poppins text-xs font-light text-white/80">
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Bengali Bridal Makeup
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Hair Wash &amp; Styling
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Nourishing Hair Spa
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Skin Brightening Facial
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary-light transition-colors">
                Nail Gel Extensions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-playfair text-lg font-bold text-primary-light mb-5">
            Store Info
          </h4>
          <ul className="space-y-4 font-poppins text-xs font-light text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" />
              <span>
                Ashok Nagar, Keranitola, Medinipur Railway Station Road, West Bengal 721101
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary-light" />
              <a href="tel:+919134161165" className="hover:text-primary-light transition-colors">
                +91 91341 61165
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-primary-light" />
              <a
                href="https://wa.me/919134161165"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
        <span>
          &copy; {currentYear} The Skin Ateliere. All Rights Reserved.
        </span>
        <span className="flex items-center gap-1 font-light">
          Created with <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> for Medinipur&apos;s finest.
        </span>
      </div>
    </footer>
  );
}
