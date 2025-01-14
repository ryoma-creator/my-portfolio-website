// components/sections/common/SectionWrapper.jsx
'use client'

import { useTheme } from '@/components/contexts/ThemeContext';

export default function SectionWrapper({ variant, className, children }) {
  const { theme, themes } = useTheme();

  const gradientClass = theme === 'modern' 
    ? themes.modern.gradient 
    : themes.minimal.gradient;

  return (
    <section className={`${gradientClass} ${className}`}>
      {children}
    </section>
  );
}