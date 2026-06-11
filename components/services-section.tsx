"use client";

import SectionHeader from "./section-header";
import ServiceCard from "./service-card";

const services = [
  {
    title: "custom software development",
    description:
      "bespoke web, mobile, and enterprise applications tailored to your unique business needs.",
    accent: "primary" as const,
  },
  {
    title: "software architecture & consulting",
    description:
      "expert guidance on system design, scalability, and technology strategy.",
    accent: "secondary" as const,
  },
  {
    title: "api development & integration",
    description:
      "robust, secure apis and seamless integration between platforms and third-party services.",
    accent: "primary" as const,
  },
  {
    title: "cloud infrastructure & devops",
    description:
      "cloud migration, infrastructure automation, ci/cd pipelines, and scalable deployments.",
    accent: "secondary" as const,
  },
  {
    title: "ai/ml solutions & automation",
    description:
      "intelligent features, workflow automation, and data-driven enhancements.",
    accent: "primary" as const,
  },
  {
    title: "support & maintenance",
    description:
      "long-term managed services, security monitoring, performance optimization, and iterative improvements.",
    accent: "secondary" as const,
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <SectionHeader
        command="ls"
        arg="services/"
        comment="what we deliver"
      />

      <h2
        className="text-xl md:text-[23px] font-bold mb-7"
        style={{ color: "var(--color-text-primary)" }}
      >
        services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            index={i}
            title={s.title}
            description={s.description}
            accentColor={s.accent}
          />
        ))}
      </div>
    </section>
  );
}