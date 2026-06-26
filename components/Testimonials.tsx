"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    stars: "★★★★★",
    initial: "R",
    name: "Riya Shah",
    trip: "Family trip to Kerala",
    quote: "They planned everything down to the smallest detail. Our kids had the time of their lives and we never felt rushed.",
    gradient: "from-sky to-navy",
  },
  {
    stars: "★★★★★",
    initial: "K",
    name: "Karan Mehta",
    trip: "Friends group, Manali",
    quote: "Best squad trip ever. Great deals, packed itinerary, and a coordinator who handled everything for us.",
    gradient: "from-navy to-sky",
  },
  {
    stars: "★★★★★",
    initial: "A",
    name: "Ananya Desai",
    trip: "Couple getaway, Dubai",
    quote: "Felt completely safe and pampered. The boutique stays and private experiences were absolutely perfect.",
    gradient: "from-sky to-navy",
  },
];

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
          <span className="text-gold font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
            Traveler Stories
          </span>
          <h2 className="font-display font-extrabold text-white mt-2.5 tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">
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
              className="snap-start shrink-0 w-[80vw] max-w-[300px] bg-white rounded-[18px] p-5 m-0 flex flex-col gap-3"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.16)" }}
            >
              <div className="text-gold text-[16px] tracking-widest">{t.stars}</div>
              <blockquote className="m-0 text-ink text-[13.5px] leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-2.5 border-t border-navy/[0.08] pt-3">
                <span className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} text-white font-display font-bold flex items-center justify-center text-[14px] shrink-0`}>
                  {t.initial}
                </span>
                <span>
                  <span className="block font-display font-bold text-[13.5px] text-navy">{t.name}</span>
                  <span className="text-[11.5px] text-[#8493aa]">{t.trip}</span>
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
              className="bg-white rounded-[20px] p-6 m-0 flex flex-col gap-3.5 hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: "0 14px 34px rgba(0,0,0,0.18)" }}
            >
              <div className="text-gold text-[17px] tracking-widest">{t.stars}</div>
              <blockquote className="m-0 text-ink text-[14.5px] leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-navy/[0.08] pt-4">
                <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} text-white font-display font-bold flex items-center justify-center text-[15px] shrink-0`}>
                  {t.initial}
                </span>
                <span>
                  <span className="block font-display font-bold text-[14.5px] text-navy">{t.name}</span>
                  <span className="text-[12px] text-[#8493aa]">{t.trip}</span>
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
          className="text-center text-white/45 text-[12px] sm:text-[13px] mt-10 tracking-wide"
        >
          ✦ &nbsp; Join 12,000+ happy travelers who trusted Global Tours & Travels
        </motion.p>
      </div>
    </section>
  );
}
