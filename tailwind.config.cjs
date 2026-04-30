module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#270088',
        secondary: '#3A7CA5',
        tertiary: '#81C3D7',
        'box-bg': '#D9DCD6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
