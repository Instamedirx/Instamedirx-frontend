/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				1.5: '1.5px',
			},
			colors: {
				// PRIMARY
				'light-blue': '#2080e8',
				blue: '#007AFF',
				'blue-0': '#021433',
				'blue-10': '#032255',
				'blue-20': '#043380',
				'blue-30': '#0544AA',
				'blue-40': '#0755D4',
				'blue-50': '#0866FF',
				'blue-60': '#3180FF',
				'blue-70': '#5A99FF',
				'blue-80': '#83B2FF',
				'blue-90': '#ADCCFF',
				'blue-95': '#CEE0FF',
				'blue-99': '#F1FAFF',

				// ACCENT
				'purple-0': '#1F1429',
				'purple-10': '#332244',
				'purple-20': '#4D3366',
				'purple-30': '#664488',
				'purple-40': '#8055AA',
				'purple-50': '#9966CC',
				'purple-60': '#AA80D4',
				'purple-70': '#BB99DD',
				'purple-80': '#CCB2E5',
				'purple-90': '#DDCCEE',
				'purple-95': '#EBE0F5',
				'purple-90': '#FFF4FF',
				'purple-100': '#FFFFFF',

				'yellow-0': '#302E00',
				'yellow-10': '#4F4D00',
				'yellow-20': '#777300',
				'yellow-30': '#9F9900',
				'yellow-40': '#C6C000',
				'yellow-50': '#EEE600',
				'yellow-60': '#F1EA2B',
				'yellow-70': '#F4EE55',
				'yellow-80': '#F6F280',
				'yellow-90': '#F9F7AA',
				'yellow-95': '#FCFACC',
				'yellow-99': '#FFFFE5',
				'yellow-100': '#FFFFFF',

				// NEUTRAL
				'gray-0': '#212121',
				'gray-10': '#2B2B2B',
				'gray-20': '#474747',
				'gray-30': '#6B6B6B',
				'gray-40': '#8F8F8F',
				'gray-50': '#B2B2B2',
				'gray-60': '#D6D6D6',
				'gray-70': '#DDDDDD',
				'gray-80': '#E4E4E4',
				'gray-90': '#EAEAEA',
				'gray-95': '#F1F1F1',
				'gray-99': '#F7F7F7',
				'gray-100': '#FFFFFF',
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
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-webkit': {
					'&::-webkit-scrollbar': {
						width: '2px',
					},
					'&::-webkit-scrollbar-track': {
						background: '#CEE0FF',
					},
					'&::-webkit-scrollbar-thumb': {
						background: '#CEE0FF',
						borderRadius: '30px',
					},
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		},
	],
};
