"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Skills() {
  return (
    <section className="py-36 border-t border-border bg-bg-elevated scroll-mt-24" id="skills">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          tag={skillsData.tag}
          title={skillsData.title}
          titleItalic={skillsData.titleItalic}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative p-9 bg-bg-card border border-border rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-bg-card-hover hover:border-border-hover"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="w-12 h-12 rounded-[10px] bg-accent-dim border border-accent/10 flex items-center justify-center text-xl mb-5">
                {cat.icon}
              </div>

              <h3 className="font-display text-lg font-bold tracking-tight mb-2.5">
                {cat.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/[0.04] border border-border rounded-full font-mono text-[0.65rem] text-text-secondary tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
