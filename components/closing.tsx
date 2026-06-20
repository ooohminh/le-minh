"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-40 md:py-64"
    >
      <div
        className="glow glow-champagne animate-drift"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          left: "30%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label mb-8">availability</div>

          <h2
            className="font-serif font-light text-balance"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              color: "var(--color-bone)",
            }}
          >
            based in vietnam.
            <br />
            available for select engagements.
          </h2>

          <p
            className="mt-8 max-w-md mx-auto"
            style={{ color: "var(--color-stone)" }}
          >
            we take on a limited number of projects each year, with a preference
            for ambitious systems and long-lived product work.
          </p>

          <div className="mt-12">
            <a
              href="#services"
              className="magnetic-btn"
              data-cursor
            >
              review services
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
