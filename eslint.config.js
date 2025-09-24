import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import importsSorter from '@fudgi-packages/eslint-plugin-simple-import-sort'

export default tseslint.config([
  globalIgnores(['dist', 'node_modules', 'vite.config.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': importsSorter,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/jsx-uses-vars': 'off',
      'react/jsx-uses-react': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React and related libraries
            ['^react', '^@?\\w'],

            // Aliases for FSD layers
            [
              '^@/app',
              '^@/pages',
              '^@/widgets',
              '^@/features',
              '^@/entities',
              '^@/shared',
            ],

            // Absolute imports (not using aliases)
            ['^[a-zA-Z]', '^\\.\\.', '^\\./'],

            // Style imports
            [
              '^.+\\.module\\.css$',
              '^.+\\.css$',
              '^.+\\.(svg|png|jpg|jpeg|gif|webp)$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {},
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
])
