module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      height: {
        "350px": "350px",
      },
    },
  },
  variants: {},
  plugins: [],
};
