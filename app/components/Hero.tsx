"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Hero() {
  return (
    <section id="hero" className="relative mt-24 sm:mt-0 min-h-screen flex items-center justify-center px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Large Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="Usman Adamu"/>
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
            <div className="absolute inset-0 border border-white/5 grid grid-cols-4 grid-rows-4 opacity-20">
                {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-white/10" />)}
            </div>
            
            <div className="relative w-40 h-52 rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img src="/me.webp" alt="Profile" className="w-full h-full object-cover  transition-all duration-700" />
            </div>
          </div>

          {/* Details Table-style Layout */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-[100px_1fr] gap-x-12 gap-y-2 pb-8 border-b border-white/5">
              <p className="text-white font-semibold text-lg">About</p>
              <div className="space-y-1 text-white/50 text-lg leading-tight">
                <p>Software Engineer</p>
                <p>Based in Berlin</p>
                <p>5+ Years Experience</p>
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}