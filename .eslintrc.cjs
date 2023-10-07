module.exports = {
  root: true,
  env: {
    node: true,
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "prettier/prettier": "warn",
    "vue/require-component-is": "off"
  },
};