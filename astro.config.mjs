// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://glgit.github.io/pragmatic-architect
export default defineConfig({
  site: 'https://glgit.github.io',
  base: '/pragmatic-architect',
  integrations: [sitemap()],
});
