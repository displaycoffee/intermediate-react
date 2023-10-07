/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./assets/src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
