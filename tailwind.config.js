/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            "colors": {
                "paragraph-text": "#797979",
                "title-text": "#3D4152",
                "accent": "#6366F1",
            }
        },
    },
    plugins: [],
};
