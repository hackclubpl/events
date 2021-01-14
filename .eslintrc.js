module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'linebreak-style': 'off',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
    },
    overrides: [
        {
            files: '*.tsx',
            rules: {
                'react/prop-types': 'off',
            }
        }
    ]
};
