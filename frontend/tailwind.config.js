/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",    // merujuk file HTML yang ada di folder public
    "./src/**/*.{html,js}"   //  file HTML dan JS di folder src jika diperlukan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

