module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			aspectRatio: {
				ip12: '2159 / 1056',
			},
		},
		colors: {
			'denison-red': '#C7202F',
			'dark-red': '#C8102E',
			'pink': '#F18D9E',
			'light-pink': '#EBD0C9',
			'gray': '#F5F5F9',
			'black': '#121111',
			'white': '#FCFDFF',
		},
		backgroundImage:{
			'about-us': "url('../img/about-us-bg.jpg')",
		},
	},
	plugins: [],
};
