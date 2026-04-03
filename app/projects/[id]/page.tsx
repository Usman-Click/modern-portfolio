"use client";

import { motion, AnimatePresence } from "framer-motion";
import { notFound, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [isImageHovered, setIsImageHovered] = useState(false);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) return notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];

  const metadata = [
    { label: "Year", value: project.year },
    { label: "Type of Project", value: project.type },
    { label: "My Role", value: project.role },
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white px-8 md:px-24 pt-32 pb-40">
      {/* --- BACK BUTTON --- */}
      <section className="max-w-6xl mx-auto mb-12">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="text-sm font-medium">Back</span>
        </button>
      </section>

      {/* --- HEADER SECTION --- */}
      <section className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            {project.name}
          </h1>
          <p className="text-white/40 text-xl md:text-2xl mt-4 max-w-2xl">
            {project.desc}
          </p>
        </motion.div>

        {/* --- METADATA TABLE & VISIT LINK --- */}
        <div className="mt-20 border-t border-white/10">
          {metadata.map((item, i) => (
            <div
              key={i}
              className="flex justify-between py-6 border-b border-white/10 text-sm md:text-base"
            >
              <span className="text-white/40 uppercase tracking-widest">
                {item.label}
              </span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}

          {/* New 'Visit Project' Action Row */}
          {project.liveUrl && (
            <div className="flex justify-between items-center py-6 border-b border-white/10">
              <span className="text-white/40 uppercase tracking-widest text-sm md:text-base">
                Website
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-[#111] border border-white/5 rounded-full text-white/80 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-300"
              >
                Visit Project
                <span className="text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* --- HERO IMAGE (With Hover Effect) --- */}
      <section className="max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5 group cursor-pointer"
        >
          {/* The Actual Image */}
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover transition-all duration-700 ${isImageHovered ? "scale-105 blur-[2px]" : "scale-100 blur-0"}`}
          />

          {/* Absolute Hover Overlay */}
          <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white font-semibold text-lg"
                >
                  View Project
                  <span className="text-2xl">→</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- CASE STUDY CONTENT --- */}
      <section className="max-w-4xl mx-auto mt-32 space-y-24">
        <div>
          <h2 className="text-4xl font-bold mb-12">Case Study</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white/90">
                Objective
              </h3>
              <p className="text-white/50 text-lg leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white/90">
                Process
              </h3>
              <p className="text-white/50 text-lg leading-relaxed">
                {project.process}
              </p>
            </div>
          </div>
        </div>

        {/* --- STANDOUT FEATURES --- */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-white/90">
            Standout Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-white/50 text-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- NEXT PROJECT FOOTER --- */}
      <section className="max-w-6xl mx-auto mt-60 pt-20 border-t border-white/10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          More Projects
        </h2>

        <div className="flex justify-between items-center">
          {/* Previous Link */}
          <Link
            href={`/projects/${projects[(projectIndex - 1 + projects.length) % projects.length].id}`}
            className="group flex items-center gap-3 text-white/30 hover:text-white transition-all duration-300"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span className="text-lg font-medium">Previous</span>
          </Link>

          {/* Next Link */}
          <Link
            href={`/projects/${projects[(projectIndex + 1) % projects.length].id}`}
            className="group flex items-center gap-3 text-white/30 hover:text-white transition-all duration-300"
          >
            <span className="text-lg font-medium">Next</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
