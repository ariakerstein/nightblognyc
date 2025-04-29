import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  astro: true,
  formatters: {
    astro: true,
    css: true,
  },
  ignores: [
    'tina/__generated__/*',
    'public/*',
    '*.pdf',
    '*.jpg',
    '*.png',
    '*.JPG',
    '*.jpeg',
    '*.gif',
    '*.svg',
  ],
})
