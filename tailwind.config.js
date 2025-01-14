/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				'1.5': '1.5px'
			},
			colors: {
				blue: '#007AFF',
				'light-blue': '#2080e8',
				dashboard: '#CEE0FF',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'inria-serif': ['Inria Serif', 'serif'],
				'inria-sans': ['Inria Sans', 'sans-serif'],
			},
			screens: {
				xxs: '375px',
				xs: '520px',
			},
		},
	},
	plugins: [],
};
