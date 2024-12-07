import { Orbit } from "lucide-react";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'rich-black': '#0A1020',
  			'honey-dew': '#E6FAEF',
  			celadon: '#B3F1CF',
  			malachite: '#00D060',
  			'prussion-blue': '#0C3146'
  		},
  		fontFamily: {
  			primary: ['Poppins', 'sans-serif'],
  			secondary: ['Poly', 'serif'],
  			Orbit: ['Orbit', 'sans-serif'],
  			baby: ['Oooh Baby', 'serif'],
  		},
  		keyframes: {
  			scroll: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
			  'scroll-reverse': {
				'0%': { transform: 'translateX(-50%)' },
				'100%': { transform: 'translateX(0)' },
			  },
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'scroll-restart': 'scroll 80s linear infinite',
			'scroll-reverse': 'scroll-reverse 80s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  variants: {
    extend: {
      textColor: ['hover'], // Allows text hover effects for custom colors
      backgroundColor: ['hover'], // Allows background hover effects for custom colors
    },
  },
  plugins: [],
};
export default config;
