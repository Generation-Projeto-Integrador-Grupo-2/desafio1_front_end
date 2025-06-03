/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#46CFB1',
                surface: {
                    white: '#FFFFFF',
                    light: '#EBFDF8',
                    medium: '#D0DFDB',
                    dark: '#98B0A9',
                },
                text: '#354B45'
            }
        },
    },
    plugins: [],
}