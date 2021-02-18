// Rules available on: https://docs.w3cub.com/eslint/rules
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "extends": "eslint:recommended", // common rules already set
    "rules": {
        // enable additional rules
        "@babel/quotes": ["error", "single"],
        "@babel/semi": ["error", "always"],
        // override configuration set by extending "eslint:recommended"
        "@babel/no-empty": "warn",
        "@babel/no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "@babel/for-direction": "off",
        // unknown
        //"@babel/no-console": "off",
        //"@babel/strict": ["error", "global"],
        //"@babel/curly": "warn"
    }
};
