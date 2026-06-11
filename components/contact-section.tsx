"use client";

import SectionHeader from "./section-header";

export default function ContactSection() {
  return (
    <section id="contact">
      <SectionHeader
        command="cat"
        arg="contact.md"
        comment="get in touch"
      />

      <h2
        className="text-xl md:text-[23px] font-bold mb-7"
        style={{ color: "var(--color-text-primary)" }}
      >
        contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
        {/* Details */}
        <div className="lg:col-span-3 space-y-5">
          {/* Address */}
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p
                className="text-[12px] mb-0.5"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                // address
              </p>
              <p
                className="text-sm md:text-[15px] leading-relaxed"
                style={{ color: "var(--color-text-primary)" }}
              >
                129/5a hoang van thu, phuong phu nhuan
                <br />
                thanh pho ho chi minh, viet nam
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p
                className="text-[12px] mb-0.5"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                // email
              </p>
              <a
                href="mailto:leanhminh5@gmail.com"
                className="text-sm md:text-[15px] transition-colors break-all"
                style={{ color: "var(--color-accent)" }}
              >
                leanhminh5@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p
                className="text-[12px] mb-0.5"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                // phone
              </p>
              <a
                href="tel:+84786599687"
                className="text-sm md:text-[15px] transition-colors"
                style={{ color: "var(--color-text-primary)" }}
              >
                +84 786 599 687
              </a>
            </div>
          </div>

          <div className="pt-2">
            <p
              className="text-[12px]"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              <span style={{ color: "var(--color-accent)" }}>//</span> we
              respond within 24 hours on business days
            </p>
          </div>
        </div>

        {/* CTA Callout */}
        <div
          className="lg:col-span-2 rounded-xl p-5 md:p-7 flex flex-col justify-center"
          style={{
            border:
              "1px dashed color-mix(in srgb, var(--color-accent) 40%, transparent)",
            background:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          <p
            className="text-[12px] mb-2"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            [call-to-action]
          </p>
          <h3
            className="font-semibold text-base md:text-lg mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            ready to build something?
          </h3>
          <p
            className="text-[13px] leading-relaxed mb-5 transition-theme"
            style={{ color: "var(--color-text-secondary)" }}
          >
            we are actively taking on new clients. send us a message and we will
            get back to you within one business day.
          </p>
          <a
            href="mailto:leanhminh5@gmail.com"
            className="font-semibold text-sm rounded-lg px-5 py-3 text-center cta-btn"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg-base)",
            }}
          >
            leanhminh5@gmail.com
          </a>
          <p
            className="text-[11px] mt-3 text-center"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            or call{" "}
            <a href="tel:+84786599687" style={{ color: "var(--color-accent)" }}>
              +84 786 599 687
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}