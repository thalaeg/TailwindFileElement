module.exports = {
    content: [
        "./**/*.{html,razor,cshtml,cs}",
    ],    
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
}