// components/ui/ThemeToggle.jsx
'use client'

import { useTheme } from '@/components/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-8 right-8 p-3 
        rounded-full 
        ${theme === 'modern' 
          ? 'bg-white/10 hover:bg-white/20' 
          : 'bg-gray-100 hover:bg-gray-200'
        }
        backdrop-blur-sm
        transition-all duration-300
        z-50
      `}
      aria-label="Toggle theme"
    >
      {theme === 'modern' ? 
        <Sun className="w-5 h-5 text-white" /> : 
        <Moon className="w-5 h-5 text-gray-700" />
      }
    </button>
  );
}