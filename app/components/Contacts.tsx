"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="relative py-28 px-8 pb-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-28 h-fit"
        >
          <SectionTitle title="Contact" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-white/50 leading-7 max-w-md">
            If you want to collaborate, hire me, or discuss a project idea, feel
            free to reach out.
          </p>

          <div className="space-y-3 text-white/60">
            <p>
              Email:{" "}
              <span className="text-white/90 font-medium">
                yourmail@gmail.com
              </span>
            </p>
            <p>
              Phone:{" "}
              <span className="text-white/90 font-medium">
                +234 902 451 4595
              </span>
            </p>
            <p>
              Location:{" "}
              <span className="text-white/90 font-medium">
                Abuja, Nigeria
              </span>
            </p>
          </div>

          <div className="flex gap-4 pt-3">
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-20 text-white/30 text-sm">
        © {new Date().getFullYear()} Usman Click. All rights reserved.
      </div>
    </section>
  );
}