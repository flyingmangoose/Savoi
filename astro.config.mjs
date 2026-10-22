import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://savoi.ai',
  redirects: {
    '/what-we-install': { status: 301, destination: '/what-we-build' },
    '/micro-saas': { status: 301, destination: '/starting-points' },
  },
  server: {
    port: 4321
  }
});
