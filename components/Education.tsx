"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science",
    school: "University / Polytechnic",
    location: "Nigeria",
    year: "2019 - 2023",
    highest: true,
    desc: "Focused on software engineering, algorithms, and system design. Graduated with a strong foundation in building scalable applications.",
  },
];

export default function Education() {
  return (
    <section className="relative py-28 px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Sticky Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Education" />
        </motion.div>

        {/* Right: Education List */}
        <div className="space-y-16">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              {/* Degree & Badge */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                {edu.highest && (
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#a38b7e] text-xs font-medium uppercase tracking-wider">
                    Highest
                  </span>
                )}
              </div>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="opacity-50" />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={14} className="opacity-50" />
                  <span>{edu.school}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="opacity-50" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed text-[15px] max-w-lg">
                {edu.desc}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/5 mt-12 w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}