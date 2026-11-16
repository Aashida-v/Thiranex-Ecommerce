/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thiranex: {
          dark: '#090a0f',
          surface: '#12131c',
          card: '#161824',
          border: 'rgba(147, 51, 234, 0.15)',
          borderHover: 'rgba(168, 85, 247, 0.4)',
          purple: {
            DEFAULT: '#9333ea',
            light: '#a855f7',
            dark: '#7e22ce',
            glow: 'rgba(147, 51, 234, 0.35)',
          },
          text: {
            primary: '#f8fafc',
            muted: '#94a3b8',
            dim: '#64748b'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 30px -5px rgba(147, 51, 234, 0.3)',
        'purple-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(147, 51, 234, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
