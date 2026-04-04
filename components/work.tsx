"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Calendar, Briefcase, MapPin } from "lucide-react"; // Or use your own icon set

const work = [
  {
    role: "Software Engineer",
    company: "Promptto",
    location: "Abuja",
    year: "2024 - Present",
    current: true,
    desc: "Building AI-powered software solutions, mobile applications, and automation systems.",
  },
  {
    role: "Freelance Mobile Developer",
    company: "Independent",
    location: "Remote",
    year: "2022 - 2024",
    current: false,
    desc: "Delivered Android apps, APIs integration, and UI/UX-driven product development.",
  },
];

export default function Work() {
  return (
    <section className="relative py-28 px-8 " id="work">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Sticky Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Work" />
        </motion.div>

        {/* Right: Work List */}
        <div className="space-y-16">
          {work.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
            >
              {/* Role & Badge */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {job.role}
                </h3>
                {job.current && (
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#a38b7e] text-xs font-medium">
                    Current
                  </span>
                )}
              </div>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="opacity-50" />
                  <span>{job.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="opacity-50" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="opacity-50" />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed text-[15px] max-w-lg">
                {job.desc}
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