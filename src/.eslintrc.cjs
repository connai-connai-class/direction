module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "import", "react-refresh"],
  rules: {
    "import/prefer-default-export": "off", // named exportがエラーになるので使えるようにoff
    "react-refresh/only-export-components": "warn",
    "react/jsx-filename-extension": [
      //jsx形式のファイル拡張子をjsxもしくはtsxに限定
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "react/prop-types": "off",
  },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
