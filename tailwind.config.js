module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/assets/cory.jpg')"
      }
    }
  },
  variants: {},
  plugins: []
};
