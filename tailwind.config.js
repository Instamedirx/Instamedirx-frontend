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
				inria: ['Inria Serif', 'sans-serif']
			},
			screens: {
				'xs': '375px'
			}
		},
	},
	plugins: [],
};
