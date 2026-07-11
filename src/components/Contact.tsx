"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Clock, Navigation } from "lucide-react";

export default function Contact() {
  const directionsUrl = "https://www.google.com/maps/place/The+Skin+Ateliere/@22.4298541,87.3097561,10e5";

  return (
    <section id="contact" className="py-20 px-6 md:px-8 bg-bg-blush relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Find Us
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Get In Touch
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Visit our premium salon in Keranitola or get quick assistance over the phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left bg-white border border-primary-light/45 p-8 md:p-10 rounded-3xl shadow-md">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-text-dark mb-6">
                Salon Details
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-secondary p-2.5 rounded-2xl flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      Location Address
                    </span>
                    <span className="font-poppins text-sm text-text-dark leading-relaxed">
                      Midnapore Railway Station Road, Ashok Nagar, Keranitola, Medinipur, West Bengal 721101
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-secondary p-2.5 rounded-2xl flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      Phone Number
                    </span>
                    <a href="tel:+919134161165" className="font-poppins text-sm text-text-dark hover:text-primary transition-colors font-medium">
                      +91 91341 61165
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-secondary p-2.5 rounded-2xl flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      WhatsApp Support
                    </span>
                    <a
                      href="https://wa.me/919134161165"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins text-sm text-text-dark hover:text-green-600 transition-colors font-medium"
                    >
                      +91 91341 61165
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-secondary p-2.5 rounded-2xl flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      Opening Hours
                    </span>
                    <span className="font-poppins text-xs md:text-sm text-text-dark leading-relaxed">
                      Mon - Sat: 10:00 AM - 8:00 PM <br />
                      Sunday: 11:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div className="pt-6 border-t border-primary-light/40">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 w-full transition-transform hover:scale-105 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column Maps Iframe */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden shadow-md border border-primary-light/45">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.425515740417!2d87.30756747600813!3d22.429858979701146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b004d8dfbbd%3A0xa7e4176a007f7cbd!2sThe%20Skin%20Ateliere!5e0!3m2!1sen!2sin!4v1720695000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing The Skin Ateliere Salon Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
