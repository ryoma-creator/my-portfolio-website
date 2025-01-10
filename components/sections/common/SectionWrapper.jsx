// components/sections/common/SectionWrapper.jsx
'use client'

export default function SectionWrapper({ children, variant = "gradient", className = "" }) {
  const variants = {
    gradient: "bg-gradient-to-b from-black to-gray-900",
    gradient2: "bg-gradient-to-b from-gray-900 to-black",
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}