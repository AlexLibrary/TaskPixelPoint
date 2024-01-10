module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // FIXME: Add colors which are used in the project. Make sure that they are prepared
      // in the Figma and followed the naming "primary/secondary/gray-${number}"
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      black: '#0E0A0F',
      white: '#FFFFFF',
      primary2Alpha: 'rgba(203, 106, 251, 0.20)',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        1: '#4D66E5',
      },
      gray: {
        94: '#F0EEF1',
        98: '#FAF9FA',
      },
    }),
    // FIXME: Check if the breakpoints ("screens") are correct for the project
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
    extend: {
      dropShadow: {
        primary5xl: '0 0 50px rgba(203, 106, 251, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
