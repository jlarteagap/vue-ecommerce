module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "standard",
    prettier / vue,
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
  },
};
