module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    "no-use-before-define": "error",
    "no-unused-vars": "error",
    "indent": ["error", 2]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
