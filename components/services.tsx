"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "custom software development",
    desc: "bespoke web, mobile, and enterprise applications tailored to your unique business needs.",
  },
  {
    num: "02",
    title: "software architecture & technical consulting",
    desc: "expert guidance on system design, scalability, and technology strategy.",
  },
  {
    num: "03",
    title: "api development & system integration",
    desc: "robust, secure apis and seamless integration between platforms and third-party services.",
  },
  {
    num: "04",
    title: "cloud infrastructure & devops",
    desc: "cloud migration, infrastructure automation, ci/cd pipelines, and scalable deployments.",
  },
  {
    num: "05",
    title: "ai/ml solutions & automation",
    desc: "intelligent features, workflow automation, and data-driven enhancements.",
  },
  {
    num: "06",
    title: "ongoing support & maintenance",
    desc: "long-term managed services, security monitoring, performance optimization, and iterative improvements.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="label mb-16"
        >
          what we do
        </motion.div>

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
                className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 transition-colors duration-500"
                style={{
                  background:
                    hovered === i
                      ? "rgba(191, 161, 112, 0.02)"
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