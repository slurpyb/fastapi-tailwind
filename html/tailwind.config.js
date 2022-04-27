const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/**/*.{html,js}',
        './dist/**/*.{html,js}',
    ],
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
};

