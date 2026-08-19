import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ── GitHub Pages config ────────────────────────────────────────────────
// Al desplegar en GitHub Pages, GitHub Actions inyecta GITHUB_REPOSITORY
// (formato "usuario/repo"). Con eso armamos site + base automáticamente.
// Para desarrollo local no hace falta tocar nada de esto.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];

// Si tu repo se llama "usuario.github.io" el sitio vive en la raíz (base "/").
// Si es un repo normal ("usuario/mi-fanzine"), vive en "/mi-fanzine/".
const isUserSite = repo?.endsWith('.github.io');
const site = owner ? `https://${owner}.github.io` : 'https://tu-usuario.github.io';
const base = repo && !isUserSite ? `/${repo}` : '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
});
