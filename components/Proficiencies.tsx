"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Proficiencies() {
  return (
    <section id="proficiencies" className="relative py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Proficiencies" />
        </motion.h2>

        <div className="space-y-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <p className="text-white/80 font-medium">Skills</p>
            <div className="text-white/50 leading-7">
              <p>API Design</p>
              <p>Frontend Architecture</p>
              <p>Backend Logic</p>
              <p>UX and Layout</p>
            </div>
          </motion.div>

          <div className="h-px bg-white/10" />

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <p className="text-white/80 font-medium">Tools</p>
            <div className="text-white/50 leading-7">
              <p>VS Code</p>
              <p>Figma</p>
              <p>Android Studio</p>
              <p>Adobe Illustrator</p>
              <p>Postman</p>
            </div>
          </motion.div>

          <div className="h-px bg-white/10" />

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <p className="text-white/80 font-medium">Tech Stack</p>
            <div className="text-white/50 leading-7">
              <p>React</p>
              <p>Next.js</p>
              <p>TypeScript</p>
              <p>TailwindCSS</p>
              <p>Laravel</p>
              <p>Flutter</p>
              <p>Java</p>
              <p>XML</p>
              <p>Kotlin</p>
              <p>Jetpack compose</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
