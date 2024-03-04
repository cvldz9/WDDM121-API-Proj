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
			"p-black": "#000000",
			"p-green": "#3D8206",
			"p-purple": "#564592",
			"p-dark-grey": "#242424",
			"p-grey": "#F4F4F4",
			"p-blue": "#456EAA",
			"p-white": "#FFFFFF",
			"p-red": "#FE1717",
			"p-tomato": "tomato",
		},
		fontFamily: {
			inter: ["Inter"],
		},
		extend: {},
	},
	plugins: [],
};
