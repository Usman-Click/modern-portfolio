"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const projects = [
  {
    icon: "◆",
    name: "Shelf",
    desc: "Digital Library for Developers",
  },
  {
    icon: "✦",
    name: "Locale",
    desc: "Lightweight Content Localization",
  },
  {
    icon: "⬢",
    name: "Taskly",
    desc: "Minimal Task Manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle title="Projects" />
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-6">
            {projects.map((p, idx) => (
              <ProjectCard key={idx} p={p} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, idx }:any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      layout // This enables the "push" animation for children
      className="flex items-center gap-6 py-6 px-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hidden View Button - Animates width to push content right */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ width: 0, opacity: 0, marginRight: 0 }}
            animate={{ width: "auto", opacity: 1, marginRight: 24 }}
            exit={{ width: 0, opacity: 0, marginRight: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 py-2 px-4 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm whitespace-nowrap">
              View <span>→</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon - Wrapped in motion to slide smoothly */}
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex-shrink-0 text-3xl text-white/40 w-12 h-12 flex items-center justify-center bg-[#1a1a1a] rounded-xl border border-white/5"
      >
        {p.icon}
      </motion.div>

      {/* Text - Wrapped in motion to slide smoothly */}
      {!isHovered && (
        <motion.div 
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex-1 min-w-0"
      >
        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
        <p className="text-white/40 text-sm mt-1">{p.desc}</p>
      </motion.div>
      )}
    </motion.a>
  );
}