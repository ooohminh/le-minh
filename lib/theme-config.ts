export interface Theme {
  value: string;
  label: string;
  dotColor: string;
}

export const themes: Theme[] = [
  { value: "ayu-dark", label: "ayu dark", dotColor: "#9ece6a" },
  { value: "catppuccin-mocha", label: "catppuccin mocha", dotColor: "#cba6f7" },
  { value: "catppuccin-macchiato", label: "catppuccin macchiato", dotColor: "#c6a0f6" },
  { value: "github-dark", label: "github dark", dotColor: "#58a6ff" },
  { value: "tokyo-night", label: "tokyo night", dotColor: "#7aa2f7" },
];

export const DEFAULT_THEME = "ayu-dark";

export function getTheme(value: string): Theme | undefined {
  return themes.find((t) => t.value === value);
}

export function isValidTheme(value: string): boolean {
  return themes.some((t) => t.value === value);
}

export function getStoredTheme(): string {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem("le-minh-theme");
  if (stored && isValidTheme(stored)) return stored;
  return DEFAULT_THEME;
}

export function storeTheme(value: string): void {
  localStorage.setItem("le-minh-theme", value);
}

export function applyTheme(value: string): void {
  document.documentElement.dataset.theme = value;
  storeTheme(value);
}