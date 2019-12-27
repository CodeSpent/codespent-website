module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 0 }),
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ],
};
