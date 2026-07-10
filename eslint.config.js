import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Generated template copy contains non-breaking spaces intentionally.
      'no-irregular-whitespace': 'off',
      // The legacy jQuery plugin surface has no maintained TypeScript types.
      '@typescript-eslint/no-explicit-any': 'off',
      // LegacyPage also exports the shared script loader used by route hooks.
      'react-refresh/only-export-components': 'off',
      // Data-loading effects intentionally update page state after API calls.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
