"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "PGDBF (Banking Foundation)",
    institution: "Manipal Academy of Higher Education",
    year: "2018",
  },
  {
    degree: "B.Tech (Civil Engineering)",
    institution: "RGPV University, Bhopal",
    year: "2014",
  },
];

const certifications = [
  { name: "Professional Scrum Master I", icon: "🏅" },
  { name: "CBAP Trained", icon: "📜" },
];

export default function Education() {
  return (
    <section className="py-36 border-t border-border scroll-mt-24" id="education">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          tag="// Education & Certifications"
          title="Academic background"
          titleItalic="& credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-mono text-[0.72rem] text-text-muted tracking-[0.1em] uppercase mb-6">
              Education
            </h3>
            <div className="flex flex-col gap-5">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 bg-bg-card border border-border rounded-2xl hover:border-border-hover transition-colors duration-300"
                >
                  <p className="font-mono text-[0.7rem] text-accent tracking-wide mb-2">
                    {item.year}
                  </p>
                  <h4 className="font-display text-lg font-bold tracking-tight mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-text-secondary text-sm">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-[0.72rem] text-text-muted tracking-[0.1em] uppercase mb-6">
              Certifications
            </h3>
            <div className="flex flex-col gap-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-5 p-6 bg-bg-card border border-border rounded-2xl hover:border-border-hover transition-colors duration-300"
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <h4 className="font-display text-lg font-bold tracking-tight">
                    {cert.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
