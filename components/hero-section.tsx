"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINE1 = "Initializing LE MINH Services...";
const LINE2 =
  "Specialized in Software Architecture, API Integration, and Cloud Infrastructure.";

export default function HeroSection() {
  const [phase, setPhase] = useState<"line1" | "pause" | "line2" | "done">(
    "line1"
  );
  const [charIndex1, setCharIndex1] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);

  // Line 1 typing
  useEffect(() => {
    if (phase !== "line1") return;
    if (charIndex1 < LINE1.length) {
      const id = setTimeout(() => setCharIndex1((i) => i + 1), 50);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setPhase("pause"), 600);
      return () => clearTimeout(id);
    }
  }, [phase, charIndex1]);

  // Pause -> line2
  useEffect(() => {
    if (phase !== "pause") return;
    setPhase("line2");
  }, [phase]);

  // Line 2 typing
  useEffect(() => {
    if (phase !== "line2") return;
    if (charIndex2 < LINE2.length) {
      const id = setTimeout(() => setCharIndex2((i) => i + 1), 35);
      return () => clearTimeout(id);
    } else {
      setPhase("done");
    }
  }, [phase, charIndex2]);

  return (
    <section
      id="home"
      className="relative min-h-[45vh] md:min-h-[50vh] flex flex-col justify-center"
    >
      {/* Glow */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 space-y-1 text-[15px] md:text-base leading-relaxed">
        {/* Line 1 */}
        <p style={{ color: "var(--color-prompt)" }}>
          <span style={{ color: "var(--color-prompt)" }}>$</span>{" "}
          <span>
            {LINE1.slice(0, charIndex1)}
            {phase === "line1" && charIndex1 < LINE1.length && (
              <span className="cursor-blink" />
            )}
          </span>
        </p>

        {/* Line 2 */}
        {(phase === "line2" || phase === "done") && (
          <p>
            <span style={{ color: "var(--color-prompt)" }}>$</span>{" "}
            <span style={{ color: "var(--color-text-primary)" }}>
              {LINE2.slice(0, charIndex2)}
              {phase === "line2" && charIndex2 < LINE2.length ? (
                <span className="cursor-blink" />
              ) : null}
            </span>
          </p>
        )}

        {/* Cursor line after done */}
        {phase === "done" && (
          <p style={{ color: "var(--color-prompt)" }}>
            <span style={{ color: "var(--color-prompt)" }}>$</span>
            <span className="cursor-blink">&nbsp;</span>
          </p>
        )}
      </div>

      {/* CTA */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mt-8 md:mt-10"
          >
            <a
              href="#services"
              className="inline-block font-semibold text-sm rounded-lg px-6 py-3 md:px-8 md:py-3.5 cta-btn"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg-base)",
              }}
            >
              explore our services
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}