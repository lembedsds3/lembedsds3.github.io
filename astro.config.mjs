import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lembedsds3.github.io',
  integrations: [tailwind()],
  output: 'static',
});
