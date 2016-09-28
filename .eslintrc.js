module.exports = {
  root: true,

  extends: 'airbnb',
  installedESLint: true,
  plugins: ['react', 'jsx-a11y', 'import'],

  env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
    'no-param-reassign': ['error', { "props": false }],

    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off'
  }
};
