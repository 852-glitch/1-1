/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary':      '#0f172a',
        'secondary':    '#10b981',
        'on-secondary': '#ffffff',
        'surface':      '#f8fafc',
      },
      fontFamily: {
        'headline': ['Manrope', 'sans-serif'],
        'body':     ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg':      '0.75rem',
        'xl':      '1rem',
        '2xl':     '1.5rem',
        'full':    '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
