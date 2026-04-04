"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const contactLinks = [
  { name: "Mail", href: "mailto:usman@veyrixtech.com" },
  { name: "GitHub", href: "https://github.com/Usman-Click" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/usman-click/" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-8 pb-40 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Sticky Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Contact" />
        </motion.div>

        {/* Right: Minimalist Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Intro Text */}
          <p className="text-white/50 leading-relaxed  max-w-md">
            If you want to collaborate, hire me, or discuss a project idea, feel
            free to reach out.
          </p>

          {/* Social/Action Links */}
          <div className="flex flex-col gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300  font-medium w-fit"
              >
                {link.name}
                <span className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Location & Phone - Grouped Footer Style */}
           {/* Copyright Footer */}
      <div className="max-w-6xl mx-auto mt-32 text-white/50 text-[10px] uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Usman Click. All rights reserved.
      </div>
          {/* <div className="pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
            <div>
              <p className="text-white/20 uppercase tracking-[0.2em] text-[10px] mb-2">
                Location
              </p>
              <p className="text-white/40 text-sm">Abuja, Nigeria</p>
            </div>
            <div>
              <p className="text-white/20 uppercase tracking-[0.2em] text-[10px] mb-2">
                Phone
              </p>
              <p className="text-white/40 text-sm">+234 902 451 4595</p>
            </div>
          </div> */}
        </motion.div>
      </div>

     
    </section>
  );
}