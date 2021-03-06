module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',	
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},
	plugins: ['react'],
	rules: {
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
	},
};