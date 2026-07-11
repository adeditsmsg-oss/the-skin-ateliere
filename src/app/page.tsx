import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedServices from "@/components/FeaturedServices";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceFilter from "@/components/ServiceFilter";
import BridalMakeup from "@/components/services/BridalMakeup";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import GoogleReviewManager from "@/components/GoogleReviewManager";
import FAQ from "@/components/FAQ";
import BookAppointment from "@/components/BookAppointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <FeaturedServices />
        <About />
        <WhyChooseUs />
        <ServiceFilter />
        <BridalMakeup />
        <Gallery />
        <Testimonials />
        <GoogleReviewManager />
        <FAQ />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
