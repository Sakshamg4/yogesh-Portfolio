"use client";

import { Mail, Linkedin, Phone } from "lucide-react";
import { siteConfig, contactData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="py-36 border-t border-border scroll-mt-24" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          tag={contactData.tag}
          title={contactData.title}
          titleItalic={contactData.titleItalic}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Info side */}
          <ScrollReveal>
            <h3 className="font-display text-[2.4rem] font-bold tracking-tight leading-[1.15] mb-6">
              {contactData.heading}{" "}
              <span className="text-accent">{contactData.headingAccent}</span>
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-[400px]">
              {contactData.description}
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: "+91-7999629403", href: "tel:+917999629403" },
                { icon: Linkedin, label: "linkedin.com/in/yogesh-gupta", href: siteConfig.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary font-mono text-[0.82rem] tracking-wide py-3 border-b border-border hover:text-accent hover:border-accent-glow hover:pl-2 transition-all duration-300"
                >
                  <Icon size={18} className="opacity-60" />
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Form side */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block font-mono text-[0.68rem] text-text-muted tracking-[0.1em] uppercase mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-5 py-4 bg-bg-card border border-border rounded-[10px] text-text-primary font-body text-[0.95rem] outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,255,0,0.08)] transition-all duration-300 placeholder:text-text-muted"
                  />
                </div>
              ))}

              <div>
                <label className="block font-mono text-[0.68rem] text-text-muted tracking-[0.1em] uppercase mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-5 py-4 bg-bg-card border border-border rounded-[10px] text-text-primary font-body text-[0.95rem] outline-none resize-y min-h-[140px] focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,255,0,0.08)] transition-all duration-300 placeholder:text-text-muted"
                />
              </div>

              <div>
                <button className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-bg font-display font-bold text-sm rounded-full hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(200,255,0,0.15)] transition-all duration-300 border-none cursor-pointer">
                  Send Message <span>→</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
