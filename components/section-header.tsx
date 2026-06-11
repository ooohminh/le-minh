"use client";

import type { ReactNode } from "react";

interface SectionHeaderProps {
  command: string;
  arg: string;
  comment: string;
  children?: ReactNode;
}

export default function SectionHeader({
  command,
  arg,
  comment,
  children,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span style={{ color: "var(--color-accent)" }}>$</span>
      <span style={{ color: "var(--color-accent-secondary)" }}>{command}</span>
      <span style={{ color: "var(--color-accent-secondary)" }}>{arg}</span>
      <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
        |
      </span>
      <span style={{ color: "var(--color-text-tertiary)" }}>// {comment}</span>
      {children}
    </div>
  );
}