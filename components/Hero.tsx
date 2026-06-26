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
      {/* Deep blue overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,rgba(7,26,58,0.97) 0%,rgba(11,37,71,0.90) 48%,rgba(0,80,140,0.82) 100%)" }} />
      {/* Subtle stripe texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(-38deg,transparent 0 22px,rgba(255,255,255,0.03) 22px 24px)" }} />
      {/* Blue glows — hidden on small screens for perf */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-[18%] right-[10%] w-96 h-96 rounded-full opacity-25" style={{ background: "radial-gradient(circle,rgba(0,174,239,0.45),transparent 65%)" }} />
        <div className="absolute bottom-[12%] left-[6%] w-80 h-80 rounded-full opacity-18" style={{ background: "radial-gradient(circle,rgba(21,88,208,0.4),transparent 65%)" }} />
      </div>

      <div className="relative max-w-[1220px] mx-auto px-5 sm:px-6 pt-28 pb-16 sm:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[660px]"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-[2px] rounded-full bg-sky/70" />
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.16em] uppercase text-sky/90">
              Tailor-made journeys crafted for you
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="font-display font-extrabold text-white mt-0 leading-[1.04] tracking-tight text-[40px] sm:text-[54px] lg:text-[70px]"
          >
            Your Journey,<br />
            <span className="text-[#5BBAFF]">Your Way</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.7 }}
            className="text-white/75 mt-5 leading-relaxed max-w-[480px] text-[15px] sm:text-[17px]"
          >
            Customized tour packages crafted around <em>you</em> — for families,
            friends, and solo wanderers. Tell us your dream, we&apos;ll map the route.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <a
              href="#packages"
              onClick={(e) => { e.preventDefault(); scrollTo("#packages"); }}
              className="flex-1 sm:flex-none text-center bg-accent text-white font-bold text-[15px] px-8 py-4 rounded-full hover:brightness-110 active:scale-95 transition-all"
              style={{ boxShadow: "0 10px 28px rgba(21,88,208,0.45)" }}
            >
              Explore Packages
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="flex-1 sm:flex-none text-center bg-white/10 border-[1.5px] border-white/30 text-white font-bold text-[15px] px-8 py-4 rounded-full hover:bg-white/18 active:scale-95 transition-all"
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
                <div className="text-[10.5px] sm:text-[12px] text-white/50 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
      >
        <span className="text-white/35 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-7 bg-gradient-to-b from-white/35 to-transparent" />
      </motion.div>
    </section>
  );
}
