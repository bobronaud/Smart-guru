import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const customRules = {
	'react/react-in-jsx-scope': 'off',
	'react/prop-types': 'off',
};

const ignores = ['**/node_modules/', '**/public/', '**/assets/', '**/build/'];

export default [
	{ languageOptions: { globals: globals.browser } },
	{
		ignores,
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		...pluginReactConfig,
		settings: { ...pluginReactConfig.settings, react: { version: 'detect' } },
	},
	{ rules: customRules },
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
];
