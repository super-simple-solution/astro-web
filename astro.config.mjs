import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import eslintPlugin from 'eslint-plugin-astro'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), eslintPlugin()]
});