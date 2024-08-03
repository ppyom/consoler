/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        base: {
          black: '#21201f',
          white: '#ffffff',
          ivory: '#f9f8f5',
        },
        brand: {
          primary: '#ebd19d',
          secondary: '#3f97af',
          tertiary: '#eae7dc',
          danger: '#ebabab',
        },
        shade: {
          primary: '#f7e6c5',
          secondary: '#8fdbef',
          tertiary: '#f4f2eb',
          danger: '#f8d3d3',
        },
        gray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
      },
      fontFamily: {
        'gowun-dodum': 'Gowun Dodum',
        'noto-sans': 'Noto Sans',
      },
    },
  },
  plugins: [],
};
