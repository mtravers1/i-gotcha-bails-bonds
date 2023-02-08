/* eslint-disable @typescript-eslint/no-var-requires */
const { dependencies, devDependencies } = require('./package.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 'off',
    'no-prototype-builtins': 'off',
    'react/no-string-refs': 'off',
    'react/no-find-dom-node': 'off',
    'jsx-a11y/alt-text': 2,
    'prefer-const': 'error',
    'no-duplicate-imports': ['error', { includeExports: false }],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@**/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-*',
            group: 'external',
            position: 'before',
          },
        ]
          .concat(
            // Adding order for dependencies and dev dependencies
            // across codebase
            []
              .concat(Object.keys(dependencies), Object.keys(devDependencies))
              .filter((pkg) => !['@', 'react'].includes(pkg))
              .sort()
              .map((pkg) => ({
                pattern: pkg,
                group: 'external',
                position: 'before',
              }))
          )
          .concat([
            {
              pattern: './*.scss',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '**/*.svg',
              group: 'internal',
              position: 'after',
            },
          ]),
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
  },
  globals: {
    __isBrowser__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    polyfills: [
      // Example of marking entire API and all methods and properties as polyfilled
      'Promise',
      // These API's are not using Polyfills, which means that experiences using these API's
      // in any environment (QA, Production, etc) are affected for some users in some browsers
      // For more details, please check browsersupport in `https://caniuse.com/`
      'IntersectionObserver',
      'ResizeObserver',
    ],
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
