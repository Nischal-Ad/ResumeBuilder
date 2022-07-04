module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',

			ssm: { max: '639px' },
			mmd: { max: '1023px' },
		},

		extend: {
			fontFamily: {
				nunito: "'Nunito', sans- serif",
				poppins: "'Poppins', sans-serif",
				quicksand: "'Quicksand', sans-serif",
			},

			backgroundImage: {
				pattern:
					"linear-gradient(to bottom, rgba(17, 17, 51, 0.7), rgba(17, 17, 51, 0.9)),url('img/pattern.png')",
				wave: "url('img/wave.svg')",
			},
		},
	},
};
