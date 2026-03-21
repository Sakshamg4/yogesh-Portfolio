"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function MockScreen() {
  return (
    <div className="w-4/5 h-3/4 rounded-lg border border-border bg-bg flex flex-col overflow-hidden">
      <div className="h-7 bg-bg-card border-b border-border flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-text-muted/40" />
        <span className="w-2 h-2 rounded-full bg-text-muted/40" />
        <span className="w-2 h-2 rounded-full bg-text-muted/40" />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2">
        <div className="h-1.5 rounded-full bg-accent-dim w-[30%]" />
        <div className="h-1.5 rounded-full bg-border w-[85%]" />
        <div className="h-1.5 rounded-full bg-border w-[65%]" />
        <div className="h-1.5 rounded-full bg-border w-[40%]" />
        <div className="h-1.5 rounded-full bg-border w-[75%]" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-36 border-t border-border scroll-mt-24" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          tag={projectsData.tag}
          title={projectsData.title}
          titleItalic={projectsData.titleItalic}
        />

        <div className="flex flex-col gap-6">
          {projectsData.items.map((project, i) => (
            <motion.a
              key={project.number}
              href={project.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 cursor-pointer no-underline text-inherit"
            >
              {/* Info */}
              <div className="p-10 md:p-11 flex flex-col justify-center">
                <span className="font-mono text-[0.7rem] text-accent tracking-[0.1em] mb-4">
                  {project.number}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-[0.92rem] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1 bg-accent-dim border border-accent/[0.08] rounded-full font-mono text-[0.68rem] text-accent tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 font-display font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>

              {/* Preview */}
              <div className="aspect-video md:aspect-auto bg-bg-elevated relative overflow-hidden flex items-center justify-center">
                <div className="group-hover:scale-105 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center w-full h-full">
                  <MockScreen />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
