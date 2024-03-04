import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
    }),
  ],

  // Where to look for your css declarations
  include: ['./resources/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'resources/styled-system',

  // The JSX framework to use
  jsxFramework: 'react',
})
