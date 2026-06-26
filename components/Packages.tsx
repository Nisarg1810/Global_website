"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    id: "family",
    icon: "👨‍👩‍👧‍👦",
    label: "Family Tours",
    desc: "Comfortable, kid-friendly itineraries with the right mix of fun, rest, and discovery for all ages.",
    features: ["Private cabs & family rooms", "Curated kid-safe activities", "Flexible meal plans"],
    featured: false,
    iconBg: "bg-sky/10",
  },
  {
    id: "friends",
    icon: "🎒",
    label: "Friends Group Tours",
    desc: "High-energy trips packed with adventure, nightlife, and group deals that keep the squad together.",
    features: ["Group discounts & combos", "Adventure & nightlife add-ons", "Dedicated trip coordinator"],
    featured: true,
    iconBg: "bg-white/14",
  },
  {
    id: "solo",
    icon: "🧳",
    label: "Solo / Couple Tours",
    desc: "Intimate, flexible escapes — from romantic getaways to safe, well-planned solo adventures.",
    features: ["Handpicked boutique stays", "Private experiences & dining", "24/7 on-trip assistance"],
    featured: false,
    iconBg: "bg-accent/10",
  },
];

export default function Packages() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="bg-mist py-14 sm:py-20 lg:py-28">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[600px] mx-auto mb-10 sm:mb-14"
        >
          <span className="text-sky font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
            ▸ Tour Packages
          </span>
          <div className="w-8 h-[2px] bg-sky/50 rounded-full mx-auto mt-3 mb-3" />
          <h2 className="font-display font-extrabold text-navy tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[46px]">
            Built for how you travel
          </h2>
          <p className="text-muted text-[14.5px] sm:text-[16px] leading-relaxed mt-3">
            Pick a starting point — every itinerary shaped to your budget, dates, and pace.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-[20px] sm:rounded-[22px] overflow-hidden ${
                pkg.featured ? "text-white" : "bg-white border border-navy/[0.07]"
              }`}
              style={
                pkg.featured
                  ? { background: "linear-gradient(165deg,#0B2547,#0c4d77)", boxShadow: "0 20px 48px rgba(11,37,71,0.28)" }
                  : { boxShadow: "0 6px 22px rgba(11,37,71,0.08)" }
              }
            >
              {/* Top accent bar on non-featured cards */}
              {!pkg.featured && (
                <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right,#00AEEF,#1558D0)" }} />
              )}

              {/* Most Popular badge on featured */}
              {pkg.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-extrabold text-[10.5px] sm:text-[11px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ boxShadow: "0 6px 16px rgba(21,88,208,0.40)" }}
                >
                  ★ Most Popular
                </span>
              )}

              {/* Non-featured card content */}
              {!pkg.featured ? (
                <div className="p-5 sm:p-7">
                  <div className="flex items-start gap-4 sm:block">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shrink-0 flex items-center justify-center text-2xl sm:text-3xl ${pkg.iconBg} sm:mb-4`}>
                      {pkg.icon}
                    </div>
                    <div className="flex-1 sm:mt-0">
                      <h3 className="font-display font-bold text-[18px] sm:text-[22px] text-navy mb-1">{pkg.label}</h3>
                      <p className="text-card-text text-[13px] sm:text-[14px] leading-relaxed">{pkg.desc}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 mt-4 mb-5 sm:mt-5 sm:mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2 items-center text-[13px] text-ink">
                        <Check className="w-4 h-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="block text-center font-bold text-[14.5px] py-3 rounded-full bg-accent text-white hover:brightness-110 active:scale-95 transition-all"
                  >
                    Book Now
                  </a>
                </div>
              ) : (
                /* Featured card */
                <div className="p-6 sm:p-8 pt-8 sm:pt-10">
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-[26px] sm:text-3xl ${pkg.iconBg} mb-4`}>
                    {pkg.icon}
                  </div>
                  <h3 className="font-display font-bold text-[20px] sm:text-[22px] text-white mb-2">{pkg.label}</h3>
                  <p className="text-white/72 text-[13.5px] leading-relaxed mb-5">{pkg.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2.5 items-center text-[13.5px] text-[#d0e8ff]">
                        <Check className="w-4 h-4 shrink-0 text-sky-light" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="block text-center font-extrabold text-[15px] py-3.5 rounded-full bg-white text-navy hover:bg-sky hover:text-white active:scale-95 transition-all duration-200"
                  >
                    Book Now
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
