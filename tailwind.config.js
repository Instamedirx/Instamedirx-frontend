/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#007AFF',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'inria-serif': ['Inria Serif', 'serif'],
				'inria-sans': ['Inria Sans', 'sans-serif'],
			},
			screens: {
				'xxs': '375px',
				'xs': '520px'
			}
		},
	},
	plugins: [],
};
