module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/components/*'],
            message: 'Do not import each component separetely. Import from the file in the componenindexts folder',
          },
          {
            group: ['**/screens/*'],
            message: 'Do not import each screen separetely. Import from the index file in the screens folder',
          },
          {
            group: ['**/utils/*'],
            message: 'Do not import each screen separetely. Import from the index file in the screens folder',
          },
          {
            group: ['**/hooks/*'],
            message: 'Do not import each screen separetely. Import from the index file in the screens folder',
          },
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': ['error', { groups: [['^react$', 'react-native', '^[a-z]']] }],
      },
    },
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
}
