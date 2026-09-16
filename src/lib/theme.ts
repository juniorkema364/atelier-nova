import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export interface ThemePalette {
  bg: string;
  surface: string;
  ink: string;
  dim: string;
  line: string;
  accent: string;
  accent2: string;
}

export const THEMES: Record<"dark" | "light", ThemePalette> = {
  dark: {
    bg: "#0e0b14",
    surface: "#171220",
    ink: "#f5f0ee",
    dim: "#a79db0",
    line: "rgba(255,255,255,0.12)",
    accent: "#ff4d6d",
    accent2: "#ffd166",
  },
  light: {
    bg: "#f7f3f1",
    surface: "#ffffff",
    ink: "#1a1420",
    dim: "#6b6072",
    line: "rgba(26,20,32,0.12)",
    accent: "#e0335a",
    accent2: "#1a1420",
  },
};

/**
 * Watches every [data-theme] section and smoothly tweens the shared CSS
 * custom properties on :root to that section's palette as it crosses the
 * viewport centre — this is what makes the whole page recolor on scroll.
 */
function paletteToCssVars(palette: ThemePalette): Record<string, string> {
  return {
    "--bg": palette.bg,
    "--surface": palette.surface,
    "--ink": palette.ink,
    "--dim": palette.dim,
    "--line": palette.line,
    "--accent": palette.accent,
    "--accent2": palette.accent2,
  };
}

export function useScrollTheme() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("[data-theme]");
    const root = document.documentElement;

    const triggers = sections.map((section) => {
      const theme = section.dataset.theme as "dark" | "light" | undefined;
      if (!theme) return null;
      const vars = paletteToCssVars(THEMES[theme]);

      const apply = () => gsap.to(root, { ...vars, duration: 0.9, ease: "power2.inOut" });

      return ScrollTrigger.create({
        trigger: section,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: apply,
        onEnterBack: apply,
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);
}
