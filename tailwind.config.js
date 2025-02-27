/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#3D52A0",
                yellowColor: "#FEB60D",
                purpleColor: "#9771FF",
                irisBlueColor: "#01B5C5",
                headingColor: "#181A1E",
                textColor: "#4E545F",
                customGreen: '#69B99D',
            },
            ringColor: {
                customGreen: '#69B99D',
            },

            boxShadow: {
                panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
            },

            fontFamily: {
                'squadaone': ['Squada One', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
