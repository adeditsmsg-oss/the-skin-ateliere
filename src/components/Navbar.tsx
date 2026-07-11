"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal Special", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass shadow-md mx-4 mt-4 rounded-2xl max-w-7xl lg:mx-auto"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with script typography */}
        <Link href="#home" className="flex flex-col">
          <span className="font-vibes text-3xl md:text-4xl text-secondary leading-none">
            The Skin Ateliere
          </span>
          <span className="font-poppins text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mt-0.5 leading-none">
            Premium Salon & Spa
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-dark hover:text-primary font-poppins text-sm font-medium transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919134161165"
            className="flex items-center gap-2 text-text-dark hover:text-primary transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 91341 61165</span>
          </a>
          <Link
            href="#booking"
            className="bg-secondary hover:bg-secondary/95 text-white font-poppins text-xs font-semibold uppercase tracking-wider py-2.5 px-6 rounded-full transition-transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-dark hover:text-primary focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[280px] bg-bg-cream shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-primary-light">
          <div className="flex flex-col">
            <span className="font-vibes text-2xl text-secondary">
              The Skin Ateliere
            </span>
            <span className="font-poppins text-[9px] tracking-wider uppercase text-primary font-semibold">
              Premium Salon
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-dark hover:text-primary p-1 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-dark hover:text-primary font-poppins text-base font-medium transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-primary-light my-2" />
          <a
            href="tel:+919134161165"
            className="flex items-center gap-3 text-text-dark hover:text-primary transition-colors text-sm font-medium py-1"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 91341 61165</span>
          </a>
          <a
            href="https://wa.me/919134161165"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-dark hover:text-green-600 transition-colors text-sm font-medium py-1"
          >
            <MessageSquare className="w-4 h-4 text-green-500" />
            <span>WhatsApp Chat</span>
          </a>
          <Link
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-white font-poppins text-xs font-semibold uppercase tracking-wider text-center py-3 rounded-xl shadow-md mt-2"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
