import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},

				'background-light': "var(--background-light)",
				'background-secondary-light': "var(--background-secondary-light)",
				'text-primary-light': "var(--text-primary-light)",
				'text-secondary-light': "var(--text-secondary-light)",
				'lapis-lazuli-light': "var(--lapis-lazuli-light)",
				'lapis-lazuli-on-hover-light': "var(--lapis-lazuli-on-hover-light)",
				'coral-light': "var(--coral-light)",
				'coral-on-hover-light': "var(--coral-on-hover-light)",
				'background-on-hover-light': "var(--background-on-hover-light)",
				'border-light': "var(--border-light)",

				'background-dark': "var(--background-dark)",
				'background-secondary-dark': "var(--background-secondary-dark)",
				'text-primary-dark': "var(--text-primary-dark)",
				'text-secondary-dark': "var(--text-secondary-dark)",
				'lapis-lazuli-dark': "var(--lapis-lazuli-dark)",
				'lapis-lazuli-on-hover-dark': "var(--lapis-lazuli-on-hover-dark)",
				'coral-dark': "var(--coral-dark)",
				'coral-on-hover-dark': "var(--coral-on-hover-dark)",
				'background-on-hover-dark': "var(--background-on-hover-dark)",
				'border-dark': "var(--border-dark)",
			},
			fontFamily: {
				'space-grotesk': 'var(--font-space-grotesk)',
				'work-sans': 'var(--font-work-sans)',
				'oxanium': 'var(--font-oxanium)',
			},
			keyframes: {
				'message-pop-up': {
					'0%': {
						transform: 'translate(-50%, 100%) scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'translate(-50%, -20%) scale(1.1)'
					},
					'75%': {
						transform: 'translate(-50%, 10%) scale(0.95)'
					},
					'100%': {
						transform: 'translate(-50%, 0) scale(1)',
						opacity: '1'
					}
				},
				'message-pop-down': {
					'0%': {
						transform: 'translate(-50%, 0) scale(1)',
						opacity: '1'
					},
					'30%': {
						transform: 'translate(-50%, -10%) scale(1.1)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translate(-50%, 100%) scale(0.3)',
						opacity: '0'
					}
				},
				'tooltip-bounce': {
					'0%, 100%': {
						transform: 'translate(-50%, 0)'
					},
					'50%': {
						transform: 'translate(-50%, -10px)'
					}
				}
			},
			animation: {
				'message-pop-up': 'message-pop-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'message-pop-down': 'message-pop-down 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'tooltip-bounce': 'tooltip-bounce 0.5s ease-in-out 3'
			}
		}
	},
	plugins: [animate],
} satisfies Config;
