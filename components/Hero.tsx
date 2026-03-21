"use client";

import { motion } from "framer-motion";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 md:pt-24 relative overflow-hidden" id="hero">
      {/* Grid background */}
      <div
        className="absolute inset-0 mask-radial-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.78rem] text-accent tracking-[0.15em] uppercase mb-6"
        >
          {heroData.eyebrow}
        </motion.p>

        {/* Title */}
        <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] font-extrabold leading-[0.95] tracking-tighter mb-8">
          {heroData.titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${i === heroData.accentLineIndex ? "text-accent" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[480px] text-text-secondary text-[1.05rem] leading-relaxed mb-12"
        >
          {heroData.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <a
            href={heroData.primaryCTA.href}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-bg font-display font-bold text-sm rounded-full hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(200,255,0,0.15)] transition-all duration-300"
          >
            {heroData.primaryCTA.label} <span>↓</span>
          </a>
          <a
            href={heroData.secondaryCTA.href}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-text-primary font-display font-semibold text-sm rounded-full border border-border-hover hover:border-text-muted hover:bg-bg-card transition-all duration-300"
          >
            {heroData.secondaryCTA.label}
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  );
}
