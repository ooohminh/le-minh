"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function MacOSWindow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 1,
      }}
      className="rounded-xl md:rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
        backdropFilter: "blur(12px)",
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px var(--color-accent-glow)",
      }}
    >
      {/* Titlebar */}
      <div
        className="h-9 flex items-center border-b px-4 select-none"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex items-center gap-[8px]">
          <span className="traffic-dot" style={{ background: "var(--color-traffic-red)" }} />
          <span className="traffic-dot" style={{ background: "var(--color-traffic-yellow)" }} />
          <span className="traffic-dot" style={{ background: "var(--color-traffic-green)" }} />
        </div>
        <div className="flex-1 text-center">
          <span
            className="text-[13px] transition-theme"
            style={{ color: "var(--color-text-secondary)" }}
          >
            le-minh@consulting:~
          </span>
        </div>
        <div className="w-[60px]" />
      </div>

      {/* Body */}
      <div
        className="px-5 sm:px-8 md:px-10 py-6 md:py-9"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}