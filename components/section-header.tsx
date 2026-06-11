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
      <span style={{ color: "var(--color-prompt)" }}>$</span>
      <span style={{ color: "var(--color-accent)" }}>{command}</span>
      <span style={{ color: "var(--color-variable)" }}>{arg}</span>
      <span className="text-xs" style={{ color: "var(--color-comment)" }}>
        |
      </span>
      <span style={{ color: "var(--color-comment)" }}>// {comment}</span>
      {children}
    </div>
  );
}