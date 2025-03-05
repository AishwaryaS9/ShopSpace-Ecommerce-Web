/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#cea39c",
                lightcolor: "#f3e8e2",
                darkColor: "#eed6c0",
                yellowColor: "#FEB60D",
                purpleColor: "#9771FF",
                irisBlueColor: "#01B5C5",
                headingColor: "#181A1E",
                textColor: "#4E545F",
                customGreen: '#69B99D',
                ashBrown: "#615048",
                lightCopper: "#b78454",
                darkMocha: "#342623",
                blushWhite:"#f7f1f1",
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
            height: {
                'custom-vh': '100vh',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
    },
    plugins: [],
};
