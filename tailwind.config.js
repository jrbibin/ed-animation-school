/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fdd5c2',
          300: '#fbb394',
          400: '#f88a65',
          500: '#f56642',
          600: '#e94d27',
          700: '#c73a1d',
          800: '#a5311a',
          900: '#872b1a',
        },
        accent: {
          50: '#fef2f4',
          100: '#fde6e9',
          200: '#fbd0d9',
          300: '#f7aab8',
          400: '#f17a93',
          500: '#e84d70',
          600: '#d92d5a',
          700: '#b91c47',
          800: '#9a1b42',
          900: '#831a3f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}