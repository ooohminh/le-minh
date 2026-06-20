"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AmbientShader = dynamic(() => import("./ambient-shader"), { ssr: false });

const headlineWords = ["software", "with", "lasting", "leverage."];

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
    <section className="relative min-h-screen overflow-hidden">
      <div className="ambient-fallback" aria-hidden="true" />
      <AmbientShader />
      <div className="architectural-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="label mb-8"
            >
              boutique software consultancy
            </motion.div>

            <motion.h1
              className="font-serif font-light leading-[0.9] tracking-tight"
              aria-label={headlineWords.join(" ")}
              style={{
                fontSize: "clamp(3.35rem, 9.4vw, 8.4rem)",
                color: "var(--color-bone)",
              }}
            >
              <motion.span
                variants={container}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
                style={{ display: "block" }}
              >
                {headlineWords.map((word, i) => (
                  <span key={i} className="word-mask">
                    <motion.span
                      variants={wordVariant}
                      className="word-inner"
                      style={{
                        paddingRight:
                          i < headlineWords.length - 1 ? "0.2em" : "0",
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
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl text-balance"
              style={{
                color: "var(--color-stone)",
                fontSize: "clamp(1.05rem, 1.6vw, 1.28rem)",
                lineHeight: 1.75,
              }}
            >
              architecture, systems design, and careful delivery for teams that
              need software to compound instead of age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#services" className="magnetic-btn" data-cursor>
                explore services
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
              <a href="#work" className="magnetic-btn-outline" data-cursor>
                view selected work
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-surface self-end p-5 md:p-6 lg:col-span-4"
          >
            <div className="eyebrow">practice notes</div>
            <div className="mt-8 space-y-6">
              {[
                ["01", "systems with clear ownership boundaries"],
                ["02", "product surfaces that stay fast under pressure"],
                ["03", "delivery paced for precision, not noise"],
              ].map(([num, text]) => (
                <div key={num} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span
                    className="font-serif text-lg"
                    style={{ color: "var(--color-champagne)" }}
                  >
                    {num}
                  </span>
                  <p className="text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

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
