module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/no-inferrable-types': 'off',
        'object-shorthand': 'off',
        'object-curly-spacing': ['warn', 'always'],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
            },
        ],
        'max-len': 'off',
        'no-plusplus': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-unused-vars': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-cycle': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
