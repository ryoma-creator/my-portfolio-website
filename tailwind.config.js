/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
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
	  },
	  screens: { 
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	  },
	  extend: {
		colors: {
		  primary: '#1c1c22',
		  accent: {
			DEFAULT: '#00ff99',
			hover: '#00e187',
		  },
		},
		fontFamily: {
		  primary: ['var(--font-jetBrainsMono)'],
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
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
		fontSize: {
		  'responsive-sm': ['1rem', '1.75rem'],
		  'responsive-md': ['1.25rem', '2rem'],
		  'responsive-lg': ['1.5rem', '2.5rem'],
		  'responsive-title-sm': ['2.25rem', '2.5rem'],
		  'responsive-title-md': ['3rem', '3rem'],
		  'responsive-title-lg': ['4.5rem', '3.5rem'],
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		boxShadow: {
			'neumorphism': 'theme("colors.accent.DEFAULT / 20%") -5px -5px 10px, theme("colors.accent.DEFAULT / 25%") 5px 5px 10px',
			'neumorphism-hover': 'theme("colors.accent.DEFAULT / 15%") -1px -1px 5px, theme("colors.accent.DEFAULT / 30%") 1px 1px 5px, inset theme("colors.accent.DEFAULT / 25%") -2px -2px 5px, inset theme("colors.accent.DEFAULT / 30%") 2px 2px 4px',
      },
	  textShadow: {
		'neumorphism': ' theme("colors.accent.hover / 15%") 3px 3px 3px',
  	  },
	  },
	},
	plugins: [
		require("tailwindcss-animate"),  
		require("tailwindcss-textshadow"),  
	  ],
  };
  