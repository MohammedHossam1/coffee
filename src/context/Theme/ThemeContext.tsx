// context/theme-context.ts
import { createContext } from "react";

export type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
