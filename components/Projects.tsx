"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12 " >
      {/* --- GRID BACKGROUND PATTERN --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #777 3px, transparent 3px),
            linear-gradient(to bottom, #777 3px, transparent 3px)
          `,
          backgroundSize: '70px 70px', // Adjust size of grid squares
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle title="Projects" />
          </motion.div>

          <div className="flex flex-col gap-6">
            {projects.map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, idx }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${p.id}`} passHref>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-6 py-4 px-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 cursor-pointer overflow-hidden"
      >
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

      
          <img 
          className="w-12 h-12 rounded-xl"
            src={p.icon} 
            alt={p.name} />

        {!isHovered && (
          <motion.div  className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            <p className="text-white/40 text-sm mt-1 line-clamp-1">{p.desc}</p>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}