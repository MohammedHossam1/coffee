import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

interface BreakpointState {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
  current: Breakpoint | null;
}

// Tailwind CSS default breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useBreakpoint = (): BreakpointState => {
  const [breakpointState, setBreakpointState] = useState<BreakpointState>(() => {
    if (typeof window === "undefined") {
      return {
        sm: false,
        md: false,
        lg: false,
        xl: false,
        "2xl": false,
        current: null,
      };
    }

    const width = window.innerWidth;
    return {
      sm: width >= breakpoints.sm,
      md: width >= breakpoints.md,
      lg: width >= breakpoints.lg,
      xl: width >= breakpoints.xl,
      "2xl": width >= breakpoints["2xl"],
      current: getCurrentBreakpoint(width),
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpointState({
        sm: width >= breakpoints.sm,
        md: width >= breakpoints.md,
        lg: width >= breakpoints.lg,
        xl: width >= breakpoints.xl,
        "2xl": width >= breakpoints["2xl"],
        current: getCurrentBreakpoint(width),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpointState;
};

const getCurrentBreakpoint = (width: number): Breakpoint | null => {
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return null;
};

