import { Linter } from "eslint";

const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "tailwindcss"],
  rules: {
    // Customize your rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

export default config;
