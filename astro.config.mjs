import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
});
