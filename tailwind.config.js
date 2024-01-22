/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			boxShadow: {
				mine:  '8px 8px 0px 0 rgb(0, 0, 0)',
			},
      fontFamily: {
        'poppins': 'poppins'
       }
		},
	},
	plugins: [],
};
