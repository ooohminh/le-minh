"use client";

export default function Footer() {
  return (
    <footer
      className="border-t mt-8"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-bg-surface)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 text-center">
        <p
          className="text-sm mb-2"
          style={{ color: "var(--color-accent)" }}
        >
          [exit 0]
        </p>
        <p
          className="text-[12px]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          &copy; 2026 le minh. all rights reserved.
        </p>
      </div>
    </footer>
  );
}