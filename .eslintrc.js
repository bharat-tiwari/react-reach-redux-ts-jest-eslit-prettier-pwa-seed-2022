// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // enable parsing latest ECMAScript
        sourceType: 'module', // allow use of imports
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'react-app',
    ],
    rules: {
        // here add any ESlint rules to overwrite those
        // from the recommended extensions
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};
