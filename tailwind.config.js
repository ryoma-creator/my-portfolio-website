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
		// colors: {
		//   primary: '#1c1c22',
		//   accent: {
		// 	DEFAULT: '#00ff99',
		// 	hover: '#00e187',
		//   },
		colors: {
			primary: '#1c1c22',
			accent: {
			  DEFAULT: 'transparent',  // ピンク系に変更
			  gradient: {
				from: '#CCF8FF',
				to: '#EF96C5'
			  },
			  hover: '#CCF8FF',    // ホバー時は水色に
			},
			// 新しいミニマルテーマ用の色
			minimal: {
				primary: '#F8F9FA',
				accent: '#E9ECEF'
			}
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
		  fadeInUp: {
			'0%': { opacity: '0', transform: 'translateY(20px)' },
			'100%': { opacity: '1', transform: 'translateY(0)' }
		  },
		  wave: {
			'0%, 100%': { 
			  'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
			  transform: 'translate(0, 0px) rotate(0deg)'
			},
			'50%': { 
			  'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
			  transform: 'translate(0, 20px) rotate(3deg)'
			}
		  }
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  'fade-in-up': 'fadeInUp 0.5s ease forwards',
		  'spin-slow': 'spin 20s linear infinite',
		  'wave': 'wave 10s ease infinite',
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
  