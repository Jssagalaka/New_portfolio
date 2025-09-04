import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "cyber" | "neon" | "minimal" | "galaxy";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { value: Theme; label: string; description: string }[];
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export const themes = [
  { value: "dark" as Theme, label: "Dark Space", description: "Deep space with electric accents" },
  { value: "light" as Theme, label: "Light Pro", description: "Clean professional light theme" },
  { value: "cyber" as Theme, label: "Cyberpunk", description: "Neon cyberpunk vibes" },
  { value: "neon" as Theme, label: "Neon Glow", description: "Bright neon highlights" },
  { value: "minimal" as Theme, label: "Minimal Pro", description: "Clean minimalist design" },
  { value: "galaxy" as Theme, label: "Galaxy", description: "Cosmic purple galaxy theme" },
];

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light", "cyber", "neon", "minimal", "galaxy");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    themes,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};