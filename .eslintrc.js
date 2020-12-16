module.exports = {
  extends: ['alloy', 'alloy/react'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    webpack: false,
  },
  rules: {
    'react/sort-comp': 'off',
  },
};
