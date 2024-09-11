/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "15px",
			screens: {
				"2xl": "1400px",
		},
		screens: { 
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			fontFamily: {
				primary: ['var(--font-jetBrainsMono)'],
// var(--font-jetBrainsMono)は、CSSカスタムプロパティを使っているので、
// 正しい構文は必ず[]で囲む必要があります。
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				 },
			  },				
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
			,
			fontSize: {
				'responsive-sm': ['1rem', '1.75rem'],
				'responsive-md': ['1.25rem', '2rem'],
				'responsive-lg': ['1.5rem', '2.5rem'],
				'responsive-title-sm': ['2.25rem', '2.5rem'],
				'responsive-title-md': ['3rem', '3rem'],
				'responsive-title-lg': ['4.5rem', '3.5rem']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
