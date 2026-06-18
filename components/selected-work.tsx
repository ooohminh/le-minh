"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "fintech api integration",
    subtitle: "for a european startup",
    desc: "designed and built a high-throughput payment processing api handling 10k+ transactions per second with sub-50ms latency.",
    tags: ["go", "postgresql", "kubernetes", "redis"],
    align: "left" as const,
  },
  {
    title: "cloud migration & devops",
    subtitle: "for an e-commerce platform",
    desc: "migrated a monolithic php application to a microservices architecture on aws, reducing deployment time from 2 hours to 8 minutes.",
    tags: ["aws", "docker", "terraform", "github actions"],
    align: "right" as const,
  },
  {
    title: "custom erp system",
    subtitle: "for a logistics provider",
    desc: "built a real-time inventory and fleet management system with predictive routing, serving 500+ drivers across 3 countries.",
    tags: ["next.js", "python", "postgres", "mapbox"],
    align: "left" as const,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-32 md:py-48">
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

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 ${
                project.align === "right" ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-8 ${
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}