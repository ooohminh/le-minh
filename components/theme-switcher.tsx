"use client";

import { useState, useEffect } from "react";
import { themes } from "@/lib/theme-config";
import { useTheme } from "@/app/providers/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClick() {
      setOpen(false);
    }
    if (open) {
      // Delayed listener to avoid immediate close from button click
      const id = setTimeout(() => {
        document.addEventListener("click", handleClick);
      }, 0);
      return () => {
        clearTimeout(id);
        document.removeEventListener("click", handleClick);
      };
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="flex items-center justify-center p-0.5 transition-theme"
        style={{ color: "var(--color-text-secondary)" }}
        aria-label="switch theme"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-1 rounded-lg p-1 min-w-[190px] shadow-xl z-50"
            style={{
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-border)",
              backdropFilter: "blur(16px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value);
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md text-left transition-colors"
                style={{
                  color: "var(--color-text-primary)",
                  fontWeight: theme === t.value ? 600 : 400,
                  backgroundColor: theme === t.value ? "var(--color-bg-hover)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (theme !== t.value) {
                    e.currentTarget.style.backgroundColor = "var(--color-bg-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme !== t.value) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span
                  className="w-[10px] h-[10px] rounded-full flex-shrink-0"
                  style={{ background: t.dotColor }}
                />
                <span className="flex-1 text-[13px]">{t.label}</span>
                {theme === t.value && (
                  <span style={{ color: "var(--color-accent)" }} className="text-[13px]">
                    &#10003;
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}