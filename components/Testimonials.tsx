"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initial: "R",
    name: "Riya Shah",
    trip: "Family trip to Kerala",
    quote: "They planned everything down to the smallest detail. Our kids had the time of their lives and we never felt rushed.",
    gradient: "from-sky to-navy",
  },
  {
    initial: "K",
    name: "Karan Mehta",
    trip: "Friends group, Manali",
    quote: "Best squad trip ever. Great deals, packed itinerary, and a coordinator who handled everything for us.",
    gradient: "from-navy to-sky",
  },
  {
    initial: "A",
    name: "Ananya Desai",
    trip: "Couple getaway, Dubai",
    quote: "Felt completely safe and pampered. The boutique stays and private experiences were absolutely perfect.",
    gradient: "from-sky to-navy",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-sky fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy py-14 sm:py-20 lg:py-28">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[560px] mx-auto mb-10 sm:mb-14"
        >
          <span className="text-sky font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
            ▸ Traveler Stories
          </span>
          <div className="w-8 h-[2px] bg-sky/40 rounded-full mx-auto mt-3 mb-3" />
          <h2 className="font-display font-extrabold text-white tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">
            Loved by thousands of explorers
          </h2>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative snap-start shrink-0 w-[80vw] max-w-[300px] bg-white rounded-[18px] p-5 m-0 flex flex-col gap-3 overflow-hidden"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
            >
              {/* Decorative quote */}
              <span className="absolute -top-2 left-3 text-[80px] leading-none font-display font-black text-navy/[0.06] select-none pointer-events-none">
                &#x201C;
              </span>
              <div className="relative z-10">
                <Stars />
              </div>
              <blockquote className="relative z-10 m-0 text-ink text-[13.5px] leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-2.5 border-t border-navy/[0.08] pt-3">
                <span className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} text-white font-display font-bold flex items-center justify-center text-[14px] shrink-0`}>
                  {t.initial}
                </span>
                <span>
                  <span className="block font-display font-bold text-[13.5px] text-navy">{t.name}</span>
                  <span className="text-[11.5px] text-muted">{t.trip}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-[20px] p-6 m-0 flex flex-col gap-3.5 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: "0 14px 34px rgba(0,0,0,0.16)" }}
            >
              {/* Decorative quote mark */}
              <span className="absolute -top-3 left-4 text-[96px] leading-none font-display font-black text-navy/[0.05] select-none pointer-events-none">
                &#x201C;
              </span>
              <div className="relative z-10">
                <Stars />
              </div>
              <blockquote className="relative z-10 m-0 text-ink text-[14.5px] leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-navy/[0.08] pt-4">
                <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} text-white font-display font-bold flex items-center justify-center text-[15px] shrink-0`}>
                  {t.initial}
                </span>
                <span>
                  <span className="block font-display font-bold text-[14.5px] text-navy">{t.name}</span>
                  <span className="text-[12px] text-muted">{t.trip}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/40 text-[12px] sm:text-[13px] mt-10 tracking-wide"
        >
          ▸ &nbsp; Join 12,000+ happy travelers who trusted Global Tours & Travels
        </motion.p>
      </div>
    </section>
  );
}
