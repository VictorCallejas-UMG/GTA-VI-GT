// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://victorcallejas-umg.github.io',
  base: '/GTA-VI-GT/',

  vite: {
    plugins: [tailwindcss()]
  }
});