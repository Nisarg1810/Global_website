"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-sm py-3" : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-[1220px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-2.5 shrink-0">
            <span
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white font-display font-extrabold text-[15px] shrink-0"
              style={{ background: "linear-gradient(135deg,#0B2547,#00AEEF)", boxShadow: "0 4px 14px rgba(0,174,239,0.28)" }}
            >
              GT
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-[14px] sm:text-[15px] tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
                Global Tours <span className="text-sky">& Travels</span>
              </span>
              <span className={`text-[8.5px] sm:text-[9.5px] tracking-[0.14em] uppercase font-bold transition-colors ${scrolled ? "text-sky" : "text-sky/80"}`}>
                Explore · Dream · Discover
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className={`text-[13.5px] font-semibold transition-colors hover:text-sky ${scrolled ? "text-ink" : "text-white/90"}`}
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="bg-accent text-white font-bold text-[13px] px-4 py-2.5 rounded-full hover:brightness-110 transition-all"
              style={{ boxShadow: "0 6px 16px rgba(21,88,208,0.32)" }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="bg-accent text-white font-bold text-[12px] px-3.5 py-2 rounded-full"
            >
              Quote
            </a>
            <button
              className="p-2 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen
                ? <X className={`w-6 h-6 ${scrolled ? "text-navy" : "text-white"}`} />
                : <Menu className={`w-6 h-6 ${scrolled ? "text-navy" : "text-white"}`} />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden glass-nav shadow-lg border-t border-navy/10 px-5 py-5 flex flex-col gap-4"
          >
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="text-[15px] font-semibold text-ink hover:text-sky transition-colors py-3 border-b border-navy/5 flex items-center justify-between"
                >
                  {l.name}
                  <span className="text-navy/30">›</span>
                </a>
              ))}
            </nav>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 text-[14px] font-semibold text-navy py-3.5 rounded-xl bg-mist border border-navy/10"
            >
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
