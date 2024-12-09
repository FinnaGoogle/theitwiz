/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: 'jit',
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
