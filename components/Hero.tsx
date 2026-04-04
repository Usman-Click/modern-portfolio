"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-24 sm:mt-0 min-h-screen flex items-center justify-center px-8  overflow-hidden"
    >
      {/* --- GLOBAL GRID BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 90%)",
        }}
      />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side: Large Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center sm:text-start"><SectionTitle title="Usman Adamu H." /></div>
        </motion.div>

        {/* Right Side: Profile & Details */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Image with its own Grid Overlay */}
          <div className="relative p-8 mb-12">
            {/* Decorative grid behind the image */}
            <div className="absolute inset-0  grid grid-cols-4 grid-rows-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/10" />
              ))}
            </div>

            {/* The "Blueprint" Grid behind the photo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #111 1px, transparent 1px),
                  linear-gradient(to bottom, #111 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative w-40 h-52 rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/me.webp"
                alt="Profile"
                className="w-full h-full object-cover  transition-all duration-700"
              />
            </div>
          </div>

          {/* Details Table-style Layout */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-[100px_1fr] gap-x-12 gap-y-2 pb-8 border-b border-white/5">
              <p className="text-white font-semibold text-lg">About</p>
              <div className="space-y-1 text-white/50 text-lg leading-tight">
                <p>Software Engineer</p>
                <p>Based in Nigeria</p>
                <p>3+ Years Experience</p>
                <p className="text-white/80">Open to Work</p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-white/40 text-lg leading-relaxed mt-8">
              When I’m not coding, I’m building startup ideas, exploring AI
              systems, or working on premium UI experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
