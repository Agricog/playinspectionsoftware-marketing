// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://playinspectionsoftware.co.uk',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Hook point for future exclusions (draft pages, thank-you pages, etc.)
      filter: (_page) => true,
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
