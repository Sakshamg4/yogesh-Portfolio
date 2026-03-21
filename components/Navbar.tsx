"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-10 py-5 flex justify-between items-center backdrop-blur-xl bg-bg/70 border-b border-border transition-transform duration-400 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <a href="#" className="font-display font-extrabold text-xl tracking-tight text-text-primary">
        {siteConfig.logoText}
        <span className="text-accent">.</span>
      </a>

      <ul className="hidden md:flex gap-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-text-secondary font-mono text-[0.72rem] tracking-[0.06em] uppercase px-4 py-2 rounded-full border border-transparent hover:text-accent hover:border-accent-glow hover:bg-accent-dim transition-all duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {siteConfig.status && (
        <span className="flex items-center gap-2 font-mono text-[0.7rem] text-accent tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
          {siteConfig.status}
        </span>
      )}
    </nav>
  );
}
