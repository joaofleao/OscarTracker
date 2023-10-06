module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',

  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              ...['@assets', '!@assets/'],
              ...['@components', '!@components/'],
              ...['@features', '!@features/'],
              ...['@routes', '!@routes/'],
              ...['@screens', '!@screens/'],
              ...['@services', '!@services/'],
              ...['@styles', '!@styles/'],
              ...['@hooks', '!@hooks/'],

              ...['@utils', '!@utils/'],
            ],
            message: 'Multiple imports might trigger require cycles',
          },
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      rules: {
        'arrow-body-style': ['error', 'always'],
        'no-console': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'simple-import-sort/imports': [
          'error',
          { groups: [['^react$', 'react-native', '^[a-z]']] },
        ],
      },
    },
  ],
}
