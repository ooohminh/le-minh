"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudyProps {
  index: number;
  tag: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: { label: string; value: string }[];
}

export default function CaseStudyCard({
  index,
  tag,
  title,
  subtitle,
  challenge,
  solution,
  technologies,
  results,
}: CaseStudyProps) {
  const [open, setOpen] = useState(false);
  const id = `cs-${index}`;

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: "1px solid var(--color-border)" }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full p-4 md:p-5 text-left transition-colors"
        style={{ color: "var(--color-text-primary)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--color-bg-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className="text-[12px] flex-shrink-0"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            [{tag}]
          </span>
          <h3 className="font-semibold text-sm md:text-[15px] truncate">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="hidden sm:inline-block text-[11px]"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            // {subtitle}
          </span>
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 150 }}
            className="w-4 h-4"
            style={{ color: "var(--color-text-secondary)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 120 }}
            className="overflow-hidden"
          >
            <div
              className="px-4 md:px-5 pb-5 md:pb-6 pt-4 space-y-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* Challenge */}
              <div>
                <p className="text-[11px] mb-1.5" style={{ color: "var(--color-text-tertiary)" }}>
                  // challenge
                </p>
                <p
                  className="text-[13px] leading-relaxed transition-theme"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-[11px] mb-1.5" style={{ color: "var(--color-text-tertiary)" }}>
                  // solution
                </p>
                <p
                  className="text-[13px] leading-relaxed transition-theme"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {solution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-[11px] mb-1.5" style={{ color: "var(--color-text-tertiary)" }}>
                  // technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded"
                      style={{
                        background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                        color: "var(--color-accent)",
                        border: "1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <p className="text-[11px] mb-1.5" style={{ color: "var(--color-text-tertiary)" }}>
                  // results
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-lg p-3 text-center"
                      style={{
                        background: "var(--color-bg-base)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {r.value}
                      </p>
                      <p
                        className="text-[11px] transition-theme"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}