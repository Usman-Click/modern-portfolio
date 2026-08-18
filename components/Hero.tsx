"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { GitBranch, X } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiX } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative py-16 px-8 overflow-hidden">
      {/* --- GRID BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #777 3px, transparent 3px),
            linear-gradient(to bottom, #777 3px, transparent 3px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start md:items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <SectionTitle title="Usman Adamu Haruna" />

              {/* Tagline */}
              <p className="text-lg text-white/60 mt-4 leading-relaxed">
                Full-stack Software Engineer & Product Designer crafting
                beautiful, scalable digital experiences
              </p>
            </div>

            {/* Stats/Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "5+", value: "Projects Shipped" },
                { label: "3+", value: "Years Experience" },
                { label: "Nigeria", value: "Based" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="text-white font-semibold">{stat.label}</span>
                  <span className="text-white/50 text-sm">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/docs/cv.pdf"
                target="_blank"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                Download Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              {[
              //  { icon: FiInstagram, href: "https://twitter.com" },
                { icon: FiGithub, href: "https://github.com/Usman-Click" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/usman-click/" },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-white/60 hover:text-white transition-colors text-lg"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Profile & Details */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="relative">
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
              <div className="relative w-48 h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-white/10 transition-shadow duration-500">
                <img
                  src="/images/me.png"
                  alt="Usman Adamu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Info Card */}
            <div className="w-full max-w-md space-y-6">
              {/* Skills Preview */}
              <div className="space-y-3">
                <p className="text-white/80 font-semibold text-sm uppercase tracking-wide">
                  About
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  When I'm not coding, I'm building startup ideas, exploring AI
                  systems, or working on minimalist UI experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
