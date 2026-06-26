"use client";

import { motion } from "framer-motion";
import { Map, Banknote, Clock, ShieldCheck } from "lucide-react";

const features = [
  { icon: Map,         title: "Customized Plans",   desc: "Every itinerary shaped around your interests, pace, and people.", color: "from-sky/15 to-gold/15" },
  { icon: Banknote,    title: "Budget Friendly",     desc: "Transparent pricing and deals that fit every kind of traveler.", color: "from-gold/15 to-sky/10" },
  { icon: Clock,       title: "24/7 Support",        desc: "Real humans on call before, during, and after your trip.", color: "from-sky/15 to-gold/15" },
  { icon: ShieldCheck, title: "Trusted Experience",  desc: "Thousands of journeys delivered with care and precision.", color: "from-gold/15 to-sky/10" },
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
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-navy mt-2.5 tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">
            Travel planned with care,<br className="hidden sm:block" /> run with precision.
          </h2>
          <p className="text-muted text-[14.5px] sm:text-[15.5px] leading-relaxed mt-3.5 mb-5">
            Founded by{" "}
            <strong className="text-navy font-bold">Nisarg Patel</strong> &amp;{" "}
            <strong className="text-navy font-bold">Aryan Patel</strong>, Global Tours &amp; Travels
            turns destinations into experiences. We sweat the details so you don&apos;t have to.
          </p>

          {/* Trust badges — scrollable on mobile */}
          <div className="flex gap-2.5 flex-wrap mb-6">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 bg-mist border border-sky/20 text-navy font-semibold text-[11.5px] sm:text-[12.5px] px-3 py-1.5 rounded-full"
              >
                ✦ {b}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-sky text-white font-bold text-[14.5px] sm:text-[15px] px-7 py-3.5 rounded-full hover:brightness-105 active:scale-95 transition-all w-full sm:w-auto text-center"
            style={{ boxShadow: "0 10px 24px rgba(0,174,239,0.32)" }}
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
                className="bg-white border border-navy/[0.08] rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 6px 18px rgba(27,58,107,0.06)" }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-navy" strokeWidth={2} />
                </div>
                <h4 className="font-display font-bold text-[14px] sm:text-[16px] text-navy mb-1">{f.title}</h4>
                <p className="text-card-text text-[12px] sm:text-[13px] leading-snug">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
