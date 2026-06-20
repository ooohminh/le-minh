"use client";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--color-smoke)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="font-serif text-base"
              style={{ color: "var(--color-bone)" }}
            >
              le minh
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--color-stone)" }}
            >
              © {new Date().getFullYear()}
            </span>
          </div>

          <a
            href="#"
            className="text-xs transition-colors duration-300"
            style={{ color: "var(--color-stone)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-bone)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-stone)")
            }
          >
            back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
