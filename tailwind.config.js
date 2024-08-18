/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black:"#1c1c22",  // bg color 背景色
        green:"#00ff99",   // accent color（緑）
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'], // 'jetbrains' という名前でフォントを定義
        signature: ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'responsive-sm': ['1rem', '1.75rem'], // text-4xl
        'responsive-md': ['1.25rem', '2rem'],    // text-5xl
        'responsive-lg': ['1.5rem', '2.5rem'], // text-6xl
        'responsive-title-sm': ['2.25rem', '2.5rem'],  // text-4xl
        'responsive-title-md': ['3rem', '3rem'], // text-5xl
        'responsive-title-lg': ['4.5rem', '3.5rem'], // text-6xl
      },

    },
  },
  plugins: [],
}

