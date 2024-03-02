/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"p-text-black": "#0A0D14",
			"p-text-grey": "#525866",
			"p-green": "#38C793",
			"p-dark-grey": "#242424",
			"p-grey": "#D9D9D9",
			"p-white": "#FFFFFF",
		},
		fontFamily: {
			inter: ["Inter"],
		},
		extend: {},
	},
	plugins: [],
};
