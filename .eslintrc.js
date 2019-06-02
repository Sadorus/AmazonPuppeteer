module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: 'airbnb-base',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      page: true,
      browser: true,
      context: true,
      jestPuppeteer: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      "linebreak-style": 0,
      'max-len': ["error", { "code": 170 }]
    },
  };
  