// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  env: {
    node: true
  },

extends: ["plugin:vue/essential", "eslint:recommended"],

// required to lint *.vue files
plugins: [
	'vue'
],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  }
};
