"use client";

import { motion } from "framer-motion";
import { Map, Banknote, Clock, ShieldCheck } from "lucide-react";

const features = [
  { icon: Map,         title: "Customized Plans",   desc: "Every itinerary shaped around your interests, pace, and people." },
  { icon: Banknote,    title: "Budget Friendly",     desc: "Transparent pricing and deals that fit every kind of traveler." },
  { icon: Clock,       title: "24/7 Support",        desc: "Real humans on call before, during, and after your trip." },
  { icon: ShieldCheck, title: "Trusted Experience",  desc: "Thousands of journeys delivered with care and precision." },
];

const badges = ["12k+ Happy Travelers", "60+ Destinations", "4.9★ Rated"];

export default function WhyUs() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="max-w-[1220px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
            ▸ Why Choose Us
          </span>
          <div className="w-8 h-[2px] bg-sky/50 rounded-full mt-3 mb-4" />
          <h2 className="font-display font-extrabold text-navy tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">
            Travel planned with care,<br className="hidden sm:block" /> run with precision.
          </h2>
          <p className="text-muted text-[14.5px] sm:text-[15.5px] leading-relaxed mt-4 mb-5">
            Founded by{" "}
            <strong className="text-navy font-bold">Nisarg Patel</strong> &amp;{" "}
            <strong className="text-navy font-bold">Aryan Patel</strong>, Global Tours &amp; Travels
            turns destinations into experiences. We sweat the details so you don&apos;t have to.
          </p>

          {/* Trust badges */}
          <div className="flex gap-2.5 flex-wrap mb-7">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 bg-mist border border-accent/15 text-navy font-semibold text-[11.5px] sm:text-[12.5px] px-3 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky inline-block" />
                {b}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-accent text-white font-bold text-[14.5px] sm:text-[15px] px-7 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto text-center"
            style={{ boxShadow: "0 8px 24px rgba(21,88,208,0.30)" }}
          >
            Start Planning →
          </a>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative bg-white border border-navy/[0.08] rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 4px 16px rgba(11,37,71,0.06)" }}
              >
                {/* Large decorative number in background */}
                <span className="absolute bottom-1 right-2 text-[52px] font-display font-black text-navy/[0.04] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-mist flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent" strokeWidth={2} />
                </div>
                <h4 className="font-display font-bold text-[14px] sm:text-[16px] text-navy mb-1">{f.title}</h4>
                <p className="text-card-text text-[12px] sm:text-[13px] leading-snug relative z-10">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
