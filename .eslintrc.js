/* eslint-disable no-undef */
module.exports = {
    "env": {
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",        
		"plugin:react-hooks/recommended"
    ],    
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks"
    ],
    "rules": {
        "semi": "off",
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
		"@typescript-eslint/semi": [
			"warn"
		],
		"@typescript-eslint/no-empty-interface": [
			"error",
			{
				"allowSingleExtends": true
			}
		],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
