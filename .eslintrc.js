module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: 'Espree',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    indent: ['error', 2],
    'no-console': 'error',
    'no-alert': 'error',
    eqeqeq: ['error', 'always'],
    'init-declarations': ['error', 'always'],
    'no-multi-spaces': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
