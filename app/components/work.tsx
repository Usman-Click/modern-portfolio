"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const work = [
  {
    role: "Software Engineer",
    company: "Promptto",
    year: "2024 - Present",
    desc: "Building AI-powered software solutions, mobile applications, and automation systems.",
  },
  {
    role: "Freelance Mobile Developer",
    company: "Independent",
    year: "2022 - 2024",
    desc: "Delivered Android apps, APIs integration, and UI/UX-driven product development.",
  },
];

export default function Work() {
  return (
    <section className="relative py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Work" />
        </motion.div>

        <div className="space-y-12">
          {work.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <p className="text-sm text-white/40">{job.year}</p>
              </div>

              <p className="text-white/60">{job.company}</p>
              <p className="text-white/40 leading-7">{job.desc}</p>

              <div className="h-px bg-white/10 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}