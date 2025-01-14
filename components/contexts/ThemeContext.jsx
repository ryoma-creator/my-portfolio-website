'use client'
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('modern'); // デフォルトテーマ

  const themes = {
    modern: {
      bg: 'bg-black',
      text: 'text-white',
      gradient: 'bg-gradient-to-r from-blue-100/10 via-pink-100/10 to-purple-100/10',
      accent: 'accent'
    },
    minimal: {
      bg: 'bg-white',
      text: 'text-gray-900', 
      gradient: 'bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50',
      accent: 'minimal.accent'
    }
  };

  const toggleTheme = () => {
    setTheme(current => current === 'modern' ? 'minimal' : 'modern');
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};