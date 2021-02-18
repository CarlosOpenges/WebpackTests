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
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "for-direction": "off",
        // unknown
        //"no-console": "off",
        //"strict": ["error", "global"],
        //"curly": "warn"
    }
};
