/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontfamily: {
      sansSerif: ['Source Sans 3', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      handWriting: ['Kalam', 'cursive']
    },
    extend: {
      colors: {
        lavanderIndigo: '#8657E1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff40',
        whisper: '#f9f4f9',
        pastelPurple: '#b2a1bb',
        purple: '#7209b7',
        robinEggBlue: '#00e9c0',
        blueGem: '#3813a0',
        caribbeanGreen: '#1CC6A0',
        scarlet: '#f72f45',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#efeaf2',
        caribbeanGreen: '#00ca9e',
        fog: '#decaec'
      },
      zIndex: {
        navBarToggle: 91,
        navBar: 90
      }
    }
  },
  plugins: []
};
