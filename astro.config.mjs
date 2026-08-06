import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.lukeonline.com',
  base: '/',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },
})
