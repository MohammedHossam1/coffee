// context/ThemeProvider.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
