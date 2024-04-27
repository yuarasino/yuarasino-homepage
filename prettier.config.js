// @ts-check

/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
