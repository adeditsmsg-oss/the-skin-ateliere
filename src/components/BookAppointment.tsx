"use client";

import React, { useState } from "react";
import { Calendar, Phone, MessageSquare, Send, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ownerWhatsApp = "919134161165";

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format Booking message
    const bookingText = `*New Appointment Booking Request*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service Required:* ${service}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Preferred Time:* ${time}\n` +
      `*Special Message:* ${message || "None"}`;

    const encodedText = encodeURIComponent(bookingText);
    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const servicesList = [
    "Premium Bengali Bridal Makeup",
    "Airbrush HD Bridal Makeup",
    "Reception & Party Makeup",
    "Designer Haircut & Styling",
    "Deep Nourishing Hair Spa",
    "Luxury Hair Wash & Blow-dry",
    "Global Hair Coloring",
    "Highlights / Balayage",
    "O3+ Bridal Glow Facial",
    "De-Tan Treatment",
    "Bridal Extension & Gel Nail Art",
    "Manicure & Pedicure Spa",
    "Full Body Rica Waxing",
    "Eyebrows & Upper Lip Threading",
    "Other Beauty Services"
  ];

  return (
    <section id="booking" className="py-20 px-6 md:px-8 bg-bg-cream relative">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-bg-blush border border-primary-light/45 rounded-3xl overflow-hidden shadow-xl shadow-primary-light/20 relative">
          
          {/* Decorative Spotlight halo */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl pointer-events-none" />

          {/* Left Column Information */}
          <div className="lg:col-span-5 bg-secondary p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Background design */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

            <div className="z-10">
              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                Appointment
              </span>
              <h3 className="font-playfair text-3xl font-bold mt-2 mb-4 leading-tight">
                Secure Your Spot Today
              </h3>
              <p className="font-poppins text-xs md:text-sm text-bg-cream/80 font-light leading-relaxed mb-6">
                Fill out the booking form to reserve your luxury beauty session. Direct text formatted message with date/time will open on WhatsApp.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl text-primary-light">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary-light uppercase tracking-wider">Call Directly</span>
                    <span className="font-poppins text-xs font-medium">+91 91341 61165</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl text-primary-light">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary-light uppercase tracking-wider">Business Hours</span>
                    <span className="font-poppins text-xs font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl text-primary-light">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins text-[10px] text-primary-light uppercase tracking-wider">Response Time</span>
                    <span className="font-poppins text-xs font-medium">Instant reply on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-left z-10">
              <p className="font-poppins text-[11px] text-primary-light/95 italic">
                * Note: Your slot selection is subject to final verification from salon manager.
              </p>
            </div>
          </div>

          {/* Right Column Booking Form */}
          <div className="lg:col-span-7 p-8 md:p-10 text-left">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col justify-center items-center py-10"
              >
                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                  <Calendar className="w-10 h-10" />
                </div>
                <h4 className="font-playfair text-2xl font-bold text-text-dark mb-3">
                  Request Initiated!
                </h4>
                <p className="font-poppins text-sm text-text-muted text-center max-w-sm mb-6 leading-relaxed">
                  We have generated your booking template and opened WhatsApp to finalize your slot.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-secondary hover:bg-secondary/95 text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer"
                >
                  New Booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="book-name" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Your Name
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="book-phone" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Phone Number
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="book-service" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                    Select Service (সেবা নির্বাচন করুন)
                  </label>
                  <select
                    id="book-service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service...</option>
                    {servicesList.map((ser, index) => (
                      <option key={index} value={ser}>{ser}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="book-date" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="book-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="book-time" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Preferred Time Slot
                    </label>
                    <input
                      id="book-time"
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="book-message" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                    Special Message / Requirements
                  </label>
                  <textarea
                    id="book-message"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter details (optional)..."
                    className="bg-white border border-primary-light/45 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/95 text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 w-full shadow-md hover:shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Booking Request</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
