import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'http://galeduc.works', // Assurez-vous d'utiliser HTTPS
  base: '/', // Ajoutez cette ligne si vous utilisez un domaine personnalisé
  integrations: [react(), tailwind(), sitemap()],
});
