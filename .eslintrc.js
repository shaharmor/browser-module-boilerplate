require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@shaharmor/eslint-config'],
  env: {
    browser: true,
    jest: true,
  },
};
