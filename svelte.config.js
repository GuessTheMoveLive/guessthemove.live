import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Fully static output: every route is prerendered at build time.
		// No SSR Worker function — see issue #21 / PRD #20.
		adapter: adapter({
			strict: true
		})
	}
};

export default config;
