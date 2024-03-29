/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: [
		"variant",
		[
			"@media (prefers-color-scheme: dark) { &:not(.light *) }",
			"&:is(.dark *)",
		],
	],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gray: {
					50: "#f9f9f9",
					100: "#ececec",
					200: "#cdcdcd",
					300: "#b4b4b4",
					400: "#9b9b9b",
					500: "#676767",
					600: "#424242",
					700: "#2f2f2f",
					800: "#212121",
					900: "#171717",
					950: "#0d0d0d",
				},
			},
		},
	},
	plugins: [],
};
