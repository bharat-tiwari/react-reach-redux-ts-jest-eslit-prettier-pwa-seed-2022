module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // enable parsing latest ECMAScript
        sourceType: 'module', // allow use of imports
    },
    plugins: ['react', '@typescript-eslint', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'react-app',
        'react-app/jest',
    ],
    rules: {
        // here add any ESlint rules to overwrite those
        // from the recommended extensions
        "prettier/prettier": ["error", { "endOfLine": "off" }]
    },
};
