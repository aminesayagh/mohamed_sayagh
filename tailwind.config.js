module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      tran: 'transparent',
      color_1: "#002EA5",
      color_2: "#233559",
      color_3: "#383838",
      color_4: "#eeeeee",
      black_1: "#0D0D1B",
      black_2: "#393945",
      black_3: "#4F4F5A",
      black_4: "#65656F",
      black_5: "#7B7B84",
      black_6: "#919199",
      black_7: "#A7A7AE",
      black_8: "#BDBDC3",
      black_9: "#D3D3D8",
      black_10: "#E9E9ED",
      black_11: "#FFFFFF"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'max-sm': { 'max': '640px' },
      // => @media (min-width: 640px) { ... }

      'max-md': { 'max': '768px' },
      // => @media (min-width: 640px) { ... }

      'max-lg': { 'max': '1024px' },
      // => @media (min-width: 640px) { ... }

      'max-xl': { 'max': '1280px' },
      // => @media (min-width: 640px) { ... }

      'max-2xl': { 'max': '1536px' },
      // => @media (min-width: 640px) { ... }

    },
    fontFamily: {
      serif: ['apple-system', 'serif'],
      titre: ["Sigmar One", 'Sans-serif'],
    },
    extend: {},

  },
  variants: {},
  plugins: [],
  build: {
    transpile: ['npm-package-name', 'vue-tasty-burgers'],
  }
}
