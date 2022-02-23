/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/**
 * @param {string} variableName
 */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['GTAmerica', ...fontFamily.sans],
        jet: ['JetBrainsMono', ...fontFamily.mono],
        ivar: ['IvarText', ...fontFamily.serif],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
        },
        secondary: '#805AD5',
        coyGreen: ' #51cf66',
        coyRed: '#ff6b6b',
        coyYellow: '#fcc419',
        coyBlue: '#74c0fc',
        coyPurp: '#8888fc',
        dark: '#1A1A1A',
      },
      spacing: {
        '9/16': '56.25%',
        '2px': '2px',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      height: {
        'screen-35': '35vh',
      },
      minHeight: {
        14: '3.5rem',
        36: '9rem',
      },
      minWidth: {
        sm: '24rem',
        sidebar: '28rem',
        '1/5': '20%',
      },
      maxWidth: {
        '60-ch': '60ch',
        '1/4': '25%',
      },
      translate: {
        'screen-1/4': '25%',
      },
      transitionDuration: {
        325: '325ms',
      },
      fontSize: {
        xxs: '.625rem',
      },
      strokeWidth: {
        1.5: '1.5',
        2.5: '2.5',
      },
      zIndex: {
        '-1': -1,
      },
      lineClamp: {
        10: 10,
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        tilt: 'tilt 10s infinite linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
