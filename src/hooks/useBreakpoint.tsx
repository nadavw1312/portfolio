import tailwindConfig from "../../tailwind.config"; // Your tailwind config
import resolveConfig from "tailwindcss/resolveConfig";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

const breakpoints = fullConfig.theme?.screens as any;

enum Breakpoint {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

interface Breakpoints {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  "2xl"?: boolean;
}

export function useBreakpoint() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const listner = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", listner);

    listner();
    return () => {
      window.removeEventListener("resize", listner);
    };
  }, []);

  const sizes: Breakpoint[] = [
    Breakpoint.sm,
    Breakpoint.md,
    Breakpoint.lg,
    Breakpoint.xl,
    Breakpoint["2xl"],
  ];
  const _breakPoints: Breakpoints = {};

  sizes.forEach((size) => {
    const stringWidth = breakpoints[size];
    const width = Number(stringWidth.replace("px", ""));
    _breakPoints[size] = screenSize >= width;
  });

  return _breakPoints;
}
