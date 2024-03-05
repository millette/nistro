import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://millette.github.io',
	base: '/nistro',
	vite: {
		define: {
			'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
		},
	},
});
