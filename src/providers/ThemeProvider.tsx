"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeStringType = "dark" | "light" | "system" | null;

type ThemeContextType = {
  theme: ThemeStringType;
  setTheme: Dispatch<SetStateAction<ThemeStringType>>;
};

const context = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState<ThemeStringType>(null);
  const localTheme = localStorage && localStorage.getItem("theme");

  useEffect(() => {
    const html = document.documentElement;
    const classList = html.classList;

    if (localTheme) {
      html.style.colorScheme = localTheme;
      classList.add(localTheme);
    } else {
      classList.remove("light", "dark");
    }
  }, [localTheme]);

  //   toggle theme function
  useEffect(() => {
    const html = document.documentElement;
    const classList = html.classList;
    if (!theme) return;

    switch (theme) {
      case "dark":
        classList.add("dark");
        html.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        classList.add("light");
        html.style.colorScheme = "light";
        localStorage.setItem("theme", "light");
        break;
      default:
        classList.remove("light", "dark");
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <context.Provider value={{ theme, setTheme }}>{children}</context.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  return useContext(context) as ThemeContextType;
};

export default ThemeProvider;
