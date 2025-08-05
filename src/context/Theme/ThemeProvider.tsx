// context/ThemeProvider.tsx
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const isMobileOrTablet =
    typeof window !== "undefined" && window.innerWidth <= 1024;

  useEffect(() => {
    if (isMobileOrTablet) setIsDark(false);
  }, [isMobileOrTablet])
  const toggleTheme = () => {
    if (isMobileOrTablet) return;
    setIsDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
