"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const certificates = [
  {
    name: "3MTT Program",
    org: "Federal Government of Nigeria",
    year: "2024",
  },
  {
    name: "Bridge for Billions Program",
    org: "Bridge for Billions",
    year: "2026",
  },
];

export default function Certificates() {
  return (
    <section className="relative py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Certificates" />
        </motion.div>

        <div className="space-y-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5"
            >
              <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
              <p className="text-white/50 mt-2">{cert.org}</p>
              <p className="text-white/40 text-sm mt-3">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}