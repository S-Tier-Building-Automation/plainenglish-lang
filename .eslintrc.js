module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // Add any custom rules here
    },
    overrides: [
        {
            files: ['client/**/*.ts'],
            parserOptions: {
                project: './client/tsconfig.json',
            },
        },
        {
            files: ['server/**/*.ts'],
            parserOptions: {
                project: './server/tsconfig.json',
            },
        },
    ],
};