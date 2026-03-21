"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section className="py-36 border-t border-border bg-bg-elevated scroll-mt-24" id="experience">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          tag={experienceData.tag}
          title={experienceData.title}
          titleItalic={experienceData.titleItalic}
        />

        <div className="relative max-w-[800px]">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          {experienceData.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-12 pb-14 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-accent z-10 ${
                  i === 0
                    ? "bg-accent shadow-[0_0_12px_rgba(200,255,0,0.15)]"
                    : "bg-bg"
                }`}
              />

              <p className="font-mono text-[0.72rem] text-accent tracking-[0.08em] mb-2">
                {item.date}
              </p>
              <h3 className="font-display text-xl font-bold tracking-tight mb-1">
                {item.role}
              </h3>
              <p className="text-text-muted text-[0.9rem] mb-3.5">{item.company}</p>
              <p className="text-text-secondary text-[0.92rem] leading-relaxed max-w-[560px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
