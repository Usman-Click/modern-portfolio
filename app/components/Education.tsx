"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    school: "University / Polytechnic",
    course: "Computer Science",
    year: "2019 - 2023",
    desc: "Focused on software engineering, algorithms, and system design.",
  },
];

export default function Education() {
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
          <SectionTitle title="Education" />
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {edu.school}
                </h3>
                <p className="text-sm text-white/40">{edu.year}</p>
              </div>

              <p className="text-white/60">{edu.course}</p>
              <p className="text-white/40 leading-7">{edu.desc}</p>

              <div className="h-px bg-white/10 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}