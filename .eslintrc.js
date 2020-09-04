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
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// is rules
		'strict': [
			2,
			'function'
		],
		'camelcase': 0,
		'no-bitwise': 0,
		'curly': 2,
		'eqeqeq': [2, "smart"],
		'guard-for-in': 2,
		'wrap-iife': [
			2,
			'any'
		],
		'no-empty': 2,
		'no-use-before-define': 0,
		'new-cap': 2,
		'no-caller': 2,
		'no-undef': 2,
		'no-new': 2,
		'no-eq-null': 0,
		'linebreak-style': 2,
		'dot-notation': 0,
		// 'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'semi': 2,
		'object-curly-spacing': ["error", "always"]
	}
};
