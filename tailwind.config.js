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
    },
  },
  plugins: [],
}

