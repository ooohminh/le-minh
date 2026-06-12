"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";
import { themes } from "@/lib/theme-config";
import { useTheme } from "@/app/providers/theme-provider";

export default function MacOSMenuBar() {
  const [time, setTime] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function tick() {
      const d = new Date();
      setTime(
        String(d.getHours()).padStart(2, "0") +
          ":" +
          String(d.getMinutes()).padStart(2, "0")
      );
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-7 select-none"
        style={{
          background: "var(--color-bg-menubar)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="h-full max-w-5xl mx-auto px-4 flex items-center justify-between">
          <span
            className="tracking-tight text-[13px] transition-theme"
            style={{ color: "var(--color-text-primary)" }}
          >
            le minh
          </span>

          <div className="flex items-center gap-2.5">
            <ThemeSwitcher />
            <span
              className="transition-theme text-[13px] min-w-[3.5rem] text-right"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {time}
            </span>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-0.5 transition-theme"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label="menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 md:hidden"
            style={{ background: "var(--color-bg-base)" }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-4 p-2 transition-theme"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label="close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {[
              { href: "#services", label: "services" },
              { href: "#case-studies", label: "case studies" },
              { href: "#contact", label: "contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg transition-theme"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold rounded-lg px-6 py-3 cta-btn"
            >
              hire us
            </a>

            <div
              className="mt-4 pt-4 border-t transition-theme"
              style={{ borderColor: "var(--color-border)", width: 200, textAlign: "center" }}
            >
              <p className="text-xs mb-3" style={{ color: "var(--color-text-tertiary)" }}>
                // switch theme
              </p>
              <MobileThemeButtons onSwitch={() => setMobileOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileThemeButtons({ onSwitch }: { onSwitch: () => void }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => {
            setTheme(t.value);
            onSwitch();
          }}
          className="text-[11px] px-3 py-1.5 rounded transition-theme"
          style={{
            border: `1px solid ${theme === t.value ? "var(--color-accent)" : "var(--color-border)"}`,
            color: theme === t.value ? "var(--color-accent)" : "var(--color-text-secondary)",
          }}
        >
          {t.label.split(" ")[0]}
        </button>
      ))}
    </div>
  );
}