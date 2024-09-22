// src/theme/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultTheme } from './defaultTheme';

interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

interface ThemeComponent {
  [key: string]: React.CSSProperties;
}

export interface ThemeContext {
  root?: CustomCSSProperties;

  [key: string]: React.CSSProperties | ThemeComponent | CustomCSSProperties;
}

const ThemeContext = createContext<ThemeContext>(defaultTheme);

interface ThemeProps {
  theme?: Partial<ThemeContext>;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProps) => {
  const [mergedTheme, setMergedTheme] = useState<ThemeContext>({});

  const mergeDeep = (
    target: React.CSSProperties | ThemeComponent | CustomCSSProperties,
    source: ThemeContext
  ): React.CSSProperties | ThemeComponent | CustomCSSProperties => {
    for (const key of Object.keys(source)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (sourceValue instanceof Object && targetValue instanceof Object) {
        // Recursively merge nested objects
        target[key] = mergeDeep({ ...targetValue }, sourceValue as ThemeContext);
      } else {
        // Overwrite or add properties
        target[key] = sourceValue;
      }
    }
    return target;
  };

  const mergeThemes = (defaultTheme: ThemeContext, overrideTheme: ThemeContext): ThemeContext => {
    return mergeDeep(defaultTheme, overrideTheme) as ThemeContext;
  };

  useEffect(() => {
    if (theme) {
      setMergedTheme(mergeThemes(defaultTheme, theme));
    } else {
      setMergedTheme(defaultTheme);
    }
  }, []);

  // Apply CSS variables to :root and body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (mergedTheme.root) {
      for (const [key, value] of Object.entries(mergedTheme.root)) {
        root.style.setProperty(key, value);
      }
    }

    if (mergedTheme.body) {
      for (const [key, value] of Object.entries(mergedTheme.body)) {
        body.style.setProperty(key, value);
      }
    }
  }, [mergedTheme]);

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
