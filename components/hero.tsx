"use client";

import { motion } from "framer-motion";

const headlineWords = ["we", "build", "software", "that", "endures."];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const wordVariant = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* gradient glow */}
      <div
        className="glow glow-champagne animate-drift"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          right: "10%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="label mb-8"
        >
          boutique software consultancy
        </motion.div>

        <motion.h1
          className="font-serif font-light leading-[0.95] tracking-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "var(--color-bone)",
          }}
        >
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "block" }}
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="word-mask">
                <motion.span
                  variants={wordVariant}
                  className="word-inner"
                  style={{
                    paddingRight:
                      i < headlineWords.length - 1 ? "0.25em" : "0",
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-balance"
          style={{
            color: "var(--color-stone)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
          }}
        >
          architecture, systems design, and engineering excellence for clients
          who expect more than just working code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a href="#services" className="magnetic-btn">
            explore our services
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs"
          style={{ color: "var(--color-stone)" }}
        >
          scroll
        </motion.div>
      </motion.div>
    </section>
  );
}