// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://playinspectionsoftware.co.uk',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
