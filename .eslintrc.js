module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "on",
    "prettier/prettier": [
        "error",
        {
          "trailingComma": "all",
          "tabWidth": 12,
          "semi": false,
          "singleQuote": true,
          "bracketSpacing": true,
          "eslintIntegration": true,
          "printWidth": 120
        }
      ]
  },
};
