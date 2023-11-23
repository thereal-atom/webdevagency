/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            "colors": {
                "paragraph-text": "#44485c",
                "title-text": "#15161c",
                "accent": "#6366F1",
            }
        },
    },
    plugins: [],
};
