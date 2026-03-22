"use client";

import { aboutData, siteConfig } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="py-36 border-t border-border scroll-mt-24" id="about">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image placeholder */}
          <ScrollReveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bg-card border border-border">
              {aboutData.profileImage ? (
                <img
                  src={aboutData.profileImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center font-mono text-sm text-text-muted"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 40%, rgba(200,255,0,0.05) 0%, transparent 60%), #161618",
                  }}
                >
                  [ your photo here ]
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-dim to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <SectionHeader
              tag={aboutData.tag}
              title={aboutData.title}
              titleItalic={aboutData.titleItalic}
            />

            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-text-secondary text-[1.05rem] leading-relaxed mb-5"
                dangerouslySetInnerHTML={{
                  __html: p.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-text-primary font-medium">$1</strong>'
                  ),
                }}
              />
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              {aboutData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-4xl font-extrabold text-accent tracking-tight">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[0.68rem] text-text-muted tracking-[0.08em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
