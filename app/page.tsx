"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";

import Packages from "@/components/Packages";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <WhyUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatButtons />
    </>
  );
}
