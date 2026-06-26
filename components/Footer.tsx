"use client";

const year = new Date().getFullYear();

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const popularTrips = ["Goa Beaches", "Manali & Himalayas", "Kerala Backwaters", "Dubai Luxury", "Rajasthan Heritage"];

const socials = [
  { label: "Facebook",   icon: "f",  href: "#" },
  { label: "Instagram",  icon: "◉", href: "#" },
  { label: "LinkedIn",   icon: "in", href: "#" },
  { label: "X",          icon: "𝕏",  href: "#" },
];

export default function Footer() {
  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0e2347" }} className="text-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">

        {/* Brand + WhatsApp — full width on mobile */}
        <div className="mb-8 sm:hidden">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-extrabold text-[14px]"
              style={{ background: "linear-gradient(135deg,#1B3A6B,#00AEEF)" }}>GT</span>
            <span className="font-display font-bold text-[15px]">Global Tours & Travels</span>
          </div>
          <p className="text-gold font-bold text-[12px] tracking-[0.1em] mb-2">Explore. Dream. Discover.</p>
          <p className="text-white/55 text-[12.5px] leading-relaxed mb-4">
            Customized tours for families, friends, and solo travelers.
            Crafted by Nisarg Patel & Aryan Patel.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20plan%20a%20trip!"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[14.5px] text-white w-full"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* 2-col grid on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

          {/* Brand — desktop only */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-extrabold text-base"
                style={{ background: "linear-gradient(135deg,#1B3A6B,#00AEEF)" }}>GT</span>
              <span className="font-display font-bold text-[16px]">Global Tours & Travels</span>
            </div>
            <p className="text-gold font-bold text-[13px] tracking-[0.1em] mb-3">Explore. Dream. Discover.</p>
            <p className="text-white/60 text-[13px] leading-relaxed">
              Customized tour packages for families, friends, and solo travelers. Crafted by Nisarg Patel & Aryan Patel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display font-bold text-[13px] tracking-wide text-white mb-4">Quick Links</h5>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <a key={l.name} href={l.href} onClick={(e) => scroll(e, l.href)}
                  className="text-white/65 text-[13px] hover:text-sky transition-colors py-0.5">
                  {l.name}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Trips */}
          <div>
            <h5 className="font-display font-bold text-[13px] tracking-wide text-white mb-4">Popular Trips</h5>
            <div className="flex flex-col gap-2.5">
              {popularTrips.map((t) => (
                <a key={t} href="#destinations" onClick={(e) => scroll(e, "#destinations")}
                  className="text-white/65 text-[13px] hover:text-sky transition-colors py-0.5">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Socials + WhatsApp — desktop */}
          <div className="hidden lg:block">
            <h5 className="font-display font-bold text-[13px] tracking-wide text-white mb-4">Get in Touch</h5>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-[13px] px-4 py-3 rounded-xl mb-5 hover:brightness-110 transition-all"
              style={{ background: "#25D366" }}>
              💬 WhatsApp Us
            </a>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[12.5px] font-bold hover:bg-sky transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: social row */}
        <div className="sm:hidden flex justify-center gap-3 mt-7">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[13px] font-bold">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] sm:text-[12.5px] text-white/45">
          <span>© {year} Global Tours & Travels. All rights reserved.</span>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Sitemap"].map((l) => (
              <a key={l} href="#" className="hover:text-sky transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
