import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'plugin:unicorn/recommended',
      'plugin:import/recommended',
      'plugin:playwright/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            e2e: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        rules: {
          'unicorn/prefer-module': 'off',
        },
      },
    ],
  }),
];

export default eslintConfig;
