module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#121212',
        'accent-2': '#181818',
        'accent-3': '#282828',
        'accent-4': '#333333',
        'accent-5': '#B3B3B3',
        'accent-6': '#999',
        'accent-7': '#eaeaea',
        'accent-8': '#fafafa',
      },
      transitionProperty: {
        color: 'color',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
