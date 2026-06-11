"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  accentColor: "primary" | "secondary";
}

export default function ServiceCard({
  index,
  title,
  description,
  accentColor,
}: ServiceCardProps) {
  const tag = `[service-${String(index + 1).padStart(2, "0")}]`;
  const colorVar =
    accentColor === "primary"
      ? "var(--color-accent)"
      : "var(--color-accent-secondary)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 80,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", damping: 10, stiffness: 200 },
      }}
      className="rounded-lg p-5 cursor-default"
      style={{
        border: "1px solid var(--color-border)",
        transition:
          "background-color 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.background = "var(--color-bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div
        className="text-[12px] mb-2"
        style={{ color: "var(--color-text-tertiary)" }}
      >
        {tag}
      </div>
      <h3
        className="font-semibold text-sm md:text-[15px] mb-2"
        style={{ color: colorVar }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] leading-relaxed transition-theme"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1.5">
        <span
          className="w-[6px] h-[6px] rounded-full"
          style={{ background: "var(--color-success)" }}
        />
        <span
          className="text-[11px]"
          style={{ color: "var(--color-success)" }}
        >
          // operational
        </span>
      </div>
    </motion.div>
  );
}