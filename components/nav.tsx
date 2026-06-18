"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "services", href: "#services" },
  { label: "work", href: "#work" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="transition-all duration-500"
          style={{
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            background: scrolled ? "rgba(10, 10, 12, 0.7)" : "transparent",
            borderBottom: scrolled
              ? "1px solid rgba(26, 26, 30, 0.8)"
              : "1px solid transparent",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a
                href="#"
                className="font-serif text-lg tracking-tight"
                style={{ color: "var(--color-bone)" }}
              >
                le minh
              </a>

              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--color-stone)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-bone)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-stone)")
                    }
                  >
                    {link.label}
                  </a>
                ))}
                <span
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    color: "var(--color-champagne)",
                    border: "1px solid rgba(191, 161, 112, 0.25)",
                    background: "rgba(191, 161, 112, 0.05)",
                  }}
                >
                  available for select engagements
                </span>
              </div>

              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="menu"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                  className="block w-5 h-px"
                  style={{ background: "var(--color-bone)" }}
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  className="block w-5 h-px"
                  style={{ background: "var(--color-bone)" }}
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                  className="block w-5 h-px"
                  style={{ background: "var(--color-bone)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "var(--color-onyx)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl"
                  style={{ color: "var(--color-bone)" }}
                >
                  {link.label}
                </a>
              ))}
              <span
                className="text-xs px-4 py-2 rounded-full mt-4"
                style={{
                  color: "var(--color-champagne)",
                  border: "1px solid rgba(191, 161, 112, 0.25)",
                }}
              >
                available for select engagements
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}