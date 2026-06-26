"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

const EASE: Easing = "easeOut";

const destinations = [
  {
    name: "Goa",
    tag: "Beaches",
    price: "₹8,999",
    blurb: "Sun, sand, and nightlife on India's favourite coast.",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=600&auto=format&fit=crop",
    emoji: "🏖️",
  },
  {
    name: "Manali",
    tag: "Mountains",
    price: "₹11,499",
    blurb: "Snow peaks, river adventures, and cozy Himalayan stays.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop",
    emoji: "🏔️",
  },
  {
    name: "Kerala",
    tag: "Backwaters",
    price: "₹12,999",
    blurb: "Houseboats, lush greenery, and soul-soothing calm.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop",
    emoji: "🌿",
  },
  {
    name: "Rajasthan",
    tag: "Heritage",
    price: "₹10,499",
    blurb: "Royal palaces, desert dunes, and timeless culture.",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=600&auto=format&fit=crop",
    emoji: "🏯",
  },
  {
    name: "Andaman",
    tag: "Islands",
    price: "₹18,999",
    blurb: "Crystal waters, coral reefs, and untouched beaches.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    emoji: "🐠",
  },
  {
    name: "Dubai",
    tag: "Luxury",
    price: "₹34,999",
    blurb: "Skylines, desert safaris, and world-class luxury.",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=600&auto=format&fit=crop",
    emoji: "✨",
  },
];

export default function Destinations() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" className="px-4 sm:px-6 py-14 sm:py-20 lg:py-28 max-w-[1220px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-[600px] mx-auto mb-10 sm:mb-14"
      >
        <span className="text-sky font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
          ▸ Top Destinations
        </span>
        <div className="w-8 h-[2px] bg-sky/50 rounded-full mx-auto mt-3 mb-3" />
        <h2 className="font-display font-extrabold text-navy tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[46px]">
          Where will you go next?
        </h2>
        <p className="text-muted text-[14.5px] sm:text-[16px] leading-relaxed mt-3">
          Handpicked escapes loved by our travelers — every package fully customizable.
        </p>
      </motion.div>

      {/* Mobile: horizontal scroll strip */}
      <div className="sm:hidden -mx-4 px-4 overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: EASE }}
            className="snap-start shrink-0 w-[72vw] max-w-[280px] rounded-[18px] overflow-hidden bg-white border border-navy/[0.07] flex flex-col"
            style={{ boxShadow: "0 6px 22px rgba(11,37,71,0.09)" }}
          >
            <div className="relative h-44 overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <span className="absolute top-3 left-3 bg-white/92 text-navy font-extrabold text-[11px] px-3 py-1 rounded-full">
                {d.emoji} {d.tag}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-display font-bold text-[19px] text-navy">{d.name}</h3>
              <p className="text-card-text text-[12.5px] leading-snug mt-1.5 mb-4 flex-1">{d.blurb}</p>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10.5px] text-muted">From</span>
                  <div className="font-display font-extrabold text-[18px] text-navy">{d.price}</div>
                </div>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="bg-accent text-white font-bold text-[12.5px] px-4 py-2.5 rounded-full active:scale-95 transition-transform"
                >
                  Book →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator dots for mobile */}
      <div className="sm:hidden flex justify-center gap-1.5 mt-4">
        {destinations.map((d) => (
          <div key={d.name} className="w-1.5 h-1.5 rounded-full bg-navy/20" />
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
            className="group rounded-[20px] overflow-hidden bg-white border border-navy/[0.07] flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            style={{ boxShadow: "0 6px 22px rgba(11,37,71,0.08)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 18px 44px rgba(11,37,71,0.14)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 6px 22px rgba(11,37,71,0.08)")}
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
              <span className="absolute top-3.5 left-3.5 bg-white/92 text-navy font-extrabold text-[11.5px] px-3.5 py-1.5 rounded-full">
                {d.emoji} {d.tag}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display font-bold text-[22px] text-navy">{d.name}</h3>
              <p className="text-card-text text-[13.5px] leading-snug mt-2 mb-5 flex-1">{d.blurb}</p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11.5px] text-muted">Starting from</span>
                  <div className="font-display font-extrabold text-[20px] text-navy">{d.price}</div>
                </div>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="bg-mist text-accent font-bold text-[13.5px] px-5 py-2.5 rounded-full border border-accent/20 hover:bg-accent hover:text-white transition-all duration-200"
                >
                  Explore →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
