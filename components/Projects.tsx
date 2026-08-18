"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import Link from "next/link";
import { projects, portfolios } from "@/lib/data";

const CATEGORIES = ["Web Apps", "Product Design"] as const;

type Category = (typeof CATEGORIES)[number];

export default function Projects() {
  const [active, setActive] = useState<Category>("Web Apps");

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12">
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

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-transparent p-1 rounded-xl">
                {CATEGORIES.map((cat) => {
                  const isActive = cat === active;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`relative px-3 py-1 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-black" : "text-white/60"}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeFilterPill"
                          className="absolute inset-0 bg-white rounded-lg"
                          style={{ zIndex: -1 }}
                        />
                      )}
                      <span className="relative">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {active === "Product Design" ? (
                portfolios.map((portfolio) => (
                  <motion.div key={portfolio.id} layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <ProjectCard p={portfolio as any} idx={0} />
                  </motion.div>
                ))
              ) : (
                projects
                  .filter((p) => p.category === active)
                  .map((p, idx) => (
                    <motion.div key={p.id} layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                      <ProjectCard p={p} idx={idx} />
                    </motion.div>
                  ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, idx }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = "url" in p;
  const href = isExternal ? p.url : `/projects/${p.id}`;

  const CardContent = (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-6 py-4 px-6 rounded-2xl bg-[#141414] border border-white/6 transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      <img className="w-12 h-12 rounded-xl flex-shrink-0" src={p.icon} alt={p.name} />

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
        <p className="text-white/50 text-sm mt-1 line-clamp-2">{p.desc}</p>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 18, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="flex items-center gap-2 py-2 px-4 bg-[#141414] border border-white/10 rounded-xl text-white text-sm whitespace-nowrap"
          >
            View <span>→</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      {CardContent}
    </Link>
  );
}