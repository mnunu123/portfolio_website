// Tailwind CSS configuration for pastel portfolio SaaS design system
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pastel brand palette
        mint: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        sky: {
          pastel: '#BAE6FD',
          light: '#E0F2FE',
        },
        lavender: {
          pastel: '#DDD6FE',
          light: '#EDE9FE',
        },
        peach: {
          pastel: '#FECACA',
          light: '#FEE2E2',
        },
        lemon: {
          pastel: '#FEF08A',
          light: '#FEF9C3',
        },
        // Template accent colors
        toss: '#4B7BF5',
        daangn: '#FF6F0F',
        bithumb: '#1A3C5E',
        naver: '#03C75A',
        kakao: '#FEE500',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.10)',
        'soft': '0 1px 8px 0 rgba(0,0,0,0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
