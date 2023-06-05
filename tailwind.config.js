/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'illustration': "url('/illustration.png')",
        'apps': "url('/apps.jpg')",
        'websites': "url('/websites.jpg')"
      },
      maxWidth: {
        'page': '1366px'
      },
      width: {
        '75': '300px'
      },
      height: {
        '125': '500px',
        '75': '300px',
        '100': '400px'
      },
      gap: {
        '25': '100px'
      },
      keyframes: {
        hover: {
          'from': { transform: 'translateY(-10px)' },
          'to': { transform: 'translateY(10px)' }
        },
        hoverScale: {
          'from': { transform: 'translateY(-15px)' },
          'to': { transform: 'translateY(0px) scale(1.03)' }
        }
      },
      // animation: {
      //   'hover': 'hover 2s ease infinite alternate',
      //   'hover-scale': 'hoverScale 2s ease infinite alternate'
      // }
    },
  },
  plugins: [],
}
