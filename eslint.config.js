// @ts-check

import eslint from "@eslint/js"
import gitignore from "eslint-config-flat-gitignore"
import prettierConfig from "eslint-config-prettier"
import astro from "eslint-plugin-astro"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

const ignorePathConfig = gitignore()

/** @type {import("eslint").Linter.FlatConfig} */
const simpleImportSortConfig = {
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
}

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default tseslint.config(
  ignorePathConfig,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  simpleImportSortConfig,
  prettierConfig,
  {
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
)
