import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  vite: {
    ssr: {
      external: ['node:path','node:fs','node:fs/promises']
    },
  },
  output: 'server',
  adapter: cloudflare(),
});