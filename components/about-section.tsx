"use client";

import SectionHeader from "./section-header";

export default function AboutSection() {
  return (
    <section id="about">
      <SectionHeader command="cat" arg="about.md" comment="about" />

      <h2
        className="text-xl md:text-[23px] font-bold mb-5"
        style={{ color: "var(--color-text-primary)" }}
      >
        about
      </h2>

      <div className="space-y-4 text-sm md:text-[15px] leading-relaxed max-w-3xl">
        <p>
          le minh is a registered IT service firm based in Ho Chi Minh City,
          providing high-end technical solutions for global clients. we bridge
          the gap between complex business requirements and scalable, future-proof
          code.
        </p>
        <p className="transition-theme" style={{ color: "var(--color-string)" }}>
          our team brings deep expertise across the full software delivery
          lifecycle -- from initial architecture design through deployment and
          ongoing managed operations. we work as a true extension of your
          engineering team, not just an external vendor.
        </p>
      </div>
    </section>
  );
}