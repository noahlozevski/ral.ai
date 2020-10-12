module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/vue3-strongly-recommended` or `plugin:vue/vue3-recommended` for stricter rules.
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier/vue",

    // "plugin:@prettier/pug",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: [2, "never"],

    "vue/max-attributes-per-line": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 80,
        arrayExpand: true,
        embeddedLanguageFormatting: "auto",
      },
    ],
    "lines-between-class-members": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
  },
}
