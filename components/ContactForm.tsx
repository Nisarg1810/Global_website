"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string; phone: string; destination: string;
  dates: string; travelers: string; tripType: string; message: string;
}
const initialForm: FormState = { name: "", phone: "", destination: "", dates: "", travelers: "", tripType: "Family", message: "" };

const contactInfo = [
  { icon: Phone,  label: "Call / WhatsApp", value: "+91 98765 43210",      href: "tel:+919876543210" },
  { icon: Mail,   label: "Email",           value: "hello@globaltours.com", href: "mailto:hello@globaltours.com" },
  { icon: MapPin, label: "Visit us",        value: "Ahmedabad, Gujarat",   href: "#" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("traveler");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmittedName(form.name.trim() || "traveler");
      setSubmitted(true);
      setLoading(false);
    }, 900);
  };

  const inputCls = "w-full px-4 py-3.5 border-[1.5px] border-navy/15 rounded-xl text-[14px] font-medium text-ink outline-none focus:border-sky focus:ring-2 focus:ring-sky/15 transition-all placeholder:text-[#b0bac9] bg-white";

  return (
    <section id="contact" className="max-w-[1220px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-sky font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.18em] uppercase">
            ▸ Get In Touch
          </span>
          <div className="w-8 h-[2px] bg-sky/50 rounded-full mt-3 mb-3" />
          <h2 className="font-display font-extrabold text-navy tracking-tight leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">
            Tell us your dream trip
          </h2>
          <p className="text-muted text-[14px] sm:text-[15.5px] leading-relaxed mt-3 mb-6">
            Share a few details and our travel experts will build a custom quote within
            24 hours — no obligation.
          </p>

          {/* Contact tiles — 3 columns on mobile for compactness */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-7">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-mist border border-navy/[0.06] hover:border-sky/40 active:scale-[0.98] transition-all group">
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-sky/15 group-hover:bg-sky group-hover:border-sky transition-all">
                    <Icon className="w-4.5 h-4.5 text-sky group-hover:text-white transition-colors" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-[10.5px] text-[#8493aa] font-semibold">{c.label}</span>
                    <span className="font-bold text-[14px] text-navy">{c.value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* WhatsApp quick action */}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20plan%20a%20trip!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[15px] text-white active:scale-95 transition-all"
            style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.3)" }}
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="bg-white border border-navy/[0.08] rounded-[20px] p-5 sm:p-8"
          style={{ boxShadow: "0 12px 36px rgba(27,58,107,0.1)" }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-sky/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-sky" />
                </div>
                <h3 className="font-display font-bold text-[20px] text-navy mb-2">
                  Thank you, {submittedName}!
                </h3>
                <p className="text-card-text text-[14px] leading-relaxed">
                  Your inquiry is in. We&apos;ll reach out within 24 hours with a custom itinerary.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-5 text-sky font-semibold text-[13.5px] underline underline-offset-2"
                >
                  Submit another inquiry →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3.5"
              >
                <h3 className="font-display font-bold text-[18px] sm:text-[20px] text-navy mb-0.5">
                  Get Your Custom Quote
                </h3>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Full Name *</label>
                    <input className={inputCls} name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Phone *</label>
                    <input className={inputCls} name="phone" required type="tel" placeholder="+91 ..." value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                {/* Destination + Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Destination</label>
                    <input className={inputCls} name="destination" placeholder="e.g. Manali, Dubai" value={form.destination} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Travel Dates</label>
                    <input className={inputCls} name="dates" placeholder="Approx. dates" value={form.dates} onChange={handleChange} />
                  </div>
                </div>

                {/* Travelers + Trip type */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">No. of Travelers</label>
                    <input className={inputCls} name="travelers" type="number" min="1" placeholder="e.g. 4" value={form.travelers} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Trip Type</label>
                    <select className={inputCls} name="tripType" value={form.tripType} onChange={handleChange}>
                      <option>Family</option>
                      <option>Friends</option>
                      <option>Solo</option>
                      <option>Couple</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-navy uppercase tracking-wider">Message</label>
                  <textarea
                    className={`${inputCls} resize-none`}
                    name="message" rows={3}
                    placeholder="Budget, interests, must-sees..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2.5 bg-accent text-white font-extrabold text-[15.5px] py-4 rounded-xl hover:brightness-110 active:scale-95 disabled:opacity-60 transition-all"
                  style={{ boxShadow: "0 10px 24px rgba(21,88,208,0.30)" }}
                >
                  {loading
                    ? <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    : <Send className="w-4 h-4" strokeWidth={2.5} />
                  }
                  {loading ? "Sending..." : "Send My Inquiry →"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
