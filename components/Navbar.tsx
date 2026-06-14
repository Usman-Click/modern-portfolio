"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { name: "About", href: "#hero" },
  { name: "Proficiencies", href: "#proficiencies" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / height) * 100);

      // detect active section
      const sections = links.map((l) => document.querySelector(l.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i] as HTMLElement | null;
        if (!sec) continue;
        if (scrollTop >= sec.offsetTop - 200) {
          setActive(links[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50  bg-black  max-w-5xl mx-auto ">
        {/* scroll progress */}
        <div
          className="h-[2px] bg-gradient-to-r from-black via-white to-black transition-all"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <a
            href="/docs/cv.pdf"
            target="_blank"
            className="text-sm text-white/60 tracking-wide"
          >
            Usman's Resume
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
          >
            <Menu size={16} />
            Menu
          </button>
        </div>
      </div>

      {/* Full Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl"
          >
            <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
              <p className="text-white/50 text-sm tracking-wide">
                Navigation Menu
              </p>

              <button
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 25, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto px-8 pt-10 flex flex-col gap-6"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "text-4xl font-semibold tracking-tight transition",
                    active === link.href
                      ? "text-white"
                      : "text-white/30 hover:text-white/80",
                  )}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
