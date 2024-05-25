import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  site: 'https://ikennarichard-contact-us.github.io',
  adapter: netlify()
});