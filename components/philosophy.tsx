"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="label"
            >
              philosophy
            </motion.div>
          </div>

          <div className="md:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-balance"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: 1.35,
                color: "var(--color-bone)",
              }}
            >
              le minh is a software consultancy based in vietnam. we take on a
              small number of engagements at a time, giving each project the
              full weight of our expertise in architecture, systems design, and
              engineering excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-x-12 gap-y-4"
            >
              {[
                { num: "10+", label: "years of experience" },
                { num: "40+", label: "projects delivered" },
                { num: "6", label: "engagements per year" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-serif text-3xl md:text-4xl font-light"
                    style={{ color: "var(--color-champagne)" }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-sm mt-1"
                    style={{ color: "var(--color-stone)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}