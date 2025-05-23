module.exports = {
  env: { node: true, es2021: true, jest: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: { '@typescript-eslint/no-explicit-any': 'off', '@typescript-eslint/explicit-module-boundary-types': 'off', 'no-console': 'warn' },
};
