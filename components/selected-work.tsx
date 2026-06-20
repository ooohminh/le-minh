"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "transaction layer redesign",
    subtitle: "fintech infrastructure",
    desc: "designed and built a high-throughput payment api with clearer fault boundaries, improved observability, and sub-50ms response targets.",
    tags: ["go", "postgresql", "kubernetes", "redis"],
    align: "left" as const,
  },
  {
    title: "release system transformation",
    subtitle: "commerce operations",
    desc: "moved a legacy monolith into a cloud delivery model, reducing deployment time from 2 hours to 8 minutes.",
    tags: ["aws", "docker", "terraform", "github actions"],
    align: "right" as const,
  },
  {
    title: "operational command system",
    subtitle: "logistics platform",
    desc: "built real-time inventory and fleet coordination software with predictive routing across 500+ drivers in 3 countries.",
    tags: ["next.js", "python", "postgres", "mapbox"],
    align: "left" as const,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="label mb-20"
        >
          selected work
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-surface grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:gap-12 md:p-10 ${
                project.align === "right" ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  project.align === "right" ? "md:col-start-5" : ""
                }`}
              >
                <div
                  className="text-sm mb-4"
                  style={{ color: "var(--color-champagne)" }}
                >
                  {project.subtitle}
                </div>
                <h3
                  className="font-serif font-light text-balance"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    lineHeight: 1.15,
                    color: "var(--color-bone)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mt-6 max-w-lg text-balance"
                  style={{
                    color: "var(--color-stone)",
                    lineHeight: 1.7,
                    marginLeft:
                      project.align === "right" ? "auto" : undefined,
                  }}
                >
                  {project.desc}
                </p>
                <div
                  className={`mt-8 flex flex-wrap gap-3 ${
                    project.align === "right" ? "md:justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        color: "var(--color-stone)",
                        border: "1px solid var(--color-smoke)",
                        background: "var(--color-graphite)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`hidden md:block md:col-span-4 ${
                  project.align === "right" ? "md:col-start-1 md:row-start-1" : "md:col-start-9"
                }`}
                aria-hidden="true"
              >
                <div className="relative h-full min-h-56 overflow-hidden border border-[rgba(237,234,227,0.08)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(191,161,112,0.22),transparent_38%),linear-gradient(135deg,rgba(237,234,227,0.07),rgba(143,154,155,0.03))]" />
                  <div className="absolute inset-x-6 top-8 h-px bg-[rgba(237,234,227,0.18)]" />
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                    <span className="h-10 border border-[rgba(237,234,227,0.12)]" />
                    <span className="h-10 border border-[rgba(191,161,112,0.18)]" />
                    <span className="h-10 border border-[rgba(237,234,227,0.12)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
