"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, decimals]);

  return (
    <div ref={ref} className="font-display font-extrabold text-2xl sm:text-3xl text-white">
      {count.toFixed(decimals)}{suffix}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[88vh] sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(14,35,71,0.95) 0%,rgba(27,58,107,0.85) 50%,rgba(10,77,117,0.78) 100%)" }} />
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(-38deg,transparent 0 22px,rgba(255,255,255,0.04) 22px 24px)" }} />
      {/* Glows — hidden on small screens for perf */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-[20%] right-[12%] w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle,rgba(0,174,239,0.4),transparent 65%)" }} />
        <div className="absolute bottom-[15%] left-[8%] w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle,rgba(245,166,35,0.3),transparent 65%)" }} />
      </div>

      <div className="relative max-w-[1220px] mx-auto px-5 sm:px-6 pt-28 pb-16 sm:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[660px]"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#cfe9ff]"
          >
            ✦ Tailor-made journeys since day one
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-display font-extrabold text-white mt-4 sm:mt-5 leading-[1.04] tracking-tight text-[38px] sm:text-[52px] lg:text-[68px]"
          >
            Your Journey,<br />
            <span className="text-gold">Your Way</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="text-white/82 mt-4 leading-relaxed max-w-[480px] text-[14.5px] sm:text-[17px]"
          >
            Customized tour packages crafted around <em>you</em> — for families,
            friends, and solo wanderers. Tell us your dream, we&apos;ll map the route.
          </motion.p>

          {/* CTAs — full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <a
              href="#packages"
              onClick={(e) => { e.preventDefault(); scrollTo("#packages"); }}
              className="flex-1 sm:flex-none text-center bg-sky text-white font-bold text-[15px] px-7 py-4 rounded-full hover:brightness-110 active:scale-95 transition-all"
              style={{ boxShadow: "0 12px 26px rgba(0,174,239,0.4)" }}
            >
              Explore Packages
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="flex-1 sm:flex-none text-center bg-white/10 border-[1.5px] border-white/35 text-white font-bold text-[15px] px-7 py-4 rounded-full hover:bg-white/18 active:scale-95 transition-all"
            >
              Plan My Trip
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex gap-0 mt-10 border border-white/10 rounded-2xl overflow-hidden divide-x divide-white/10 bg-white/5 backdrop-blur-sm"
          >
            {[
              { end: 12, suffix: "k+", label: "Happy travelers" },
              { end: 60, suffix: "+", label: "Destinations" },
              { end: 4.9, suffix: "★", label: "Avg. rating", decimals: 1 },
            ].map((s) => (
              <div key={s.label} className="flex-1 text-center py-4 px-2">
                <AnimatedCounter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                <div className="text-[10.5px] sm:text-[12px] text-white/55 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint — hide on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-7 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
