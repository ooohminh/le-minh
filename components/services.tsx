"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "product engineering",
    desc: "bespoke web, mobile, and internal platforms shaped around real operating constraints.",
  },
  {
    num: "02",
    title: "architecture advisory",
    desc: "system design, scalability decisions, and technical strategy for teams approaching consequential build moments.",
  },
  {
    num: "03",
    title: "api and integration systems",
    desc: "robust interfaces, secure data movement, and clean integration between fragmented platforms.",
  },
  {
    num: "04",
    title: "cloud and delivery infrastructure",
    desc: "migration, automation, ci/cd, and deployment foundations that keep teams moving calmly.",
  },
  {
    num: "05",
    title: "ai workflow systems",
    desc: "practical automation, intelligent interfaces, and data workflows built into existing operations.",
  },
  {
    num: "06",
    title: "continuity and optimization",
    desc: "long-term stewardship, performance tuning, security posture, and deliberate iteration.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="label md:col-span-4"
          >
            what we do
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-balance md:col-span-8"
            style={{ color: "var(--color-stone)" }}
          >
            senior technical judgment for the moments where code quality,
            system design, and delivery culture start to matter at the same
            time.
          </motion.p>
        </div>

        <div className="divider-line" />

        {services.map((service, i) => (
          <div key={service.num}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
              className="group relative"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="grid grid-cols-12 gap-4 px-0 py-8 transition-colors duration-500 md:gap-8 md:py-10"
                style={{
                  background:
                    hovered === i
                      ? "linear-gradient(90deg, rgba(191, 161, 112, 0.055), transparent)"
                      : "transparent",
                }}
              >
                <div
                  className="col-span-2 md:col-span-1 font-serif text-lg md:text-xl font-light"
                  style={{
                    color:
                      hovered === i
                        ? "var(--color-champagne)"
                        : "var(--color-stone)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {service.num}
                </div>

                <div className="col-span-10 md:col-span-5">
                  <h3
                    className="font-serif text-xl md:text-2xl font-light"
                    style={{
                      color:
                        hovered === i
                          ? "var(--color-bone)"
                          : "var(--color-bone)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p
                    className="text-sm md:text-base transition-all duration-500"
                    style={{
                      color: "var(--color-stone)",
                      opacity: hovered === i ? 1 : 0.5,
                      transform:
                        hovered === i ? "translateY(0)" : "translateY(2px)",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="divider-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
