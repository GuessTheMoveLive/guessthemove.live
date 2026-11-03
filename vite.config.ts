import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
	// Build-time default for the live-app origin the CTA links to. The deployment
	// pipeline (deferred follow-up, see PRD #20/#23) overrides this per branch by
	// setting PUBLIC_APP_ORIGIN in the build environment. loadEnv reads .env files
	// directly (process.env still wins when already set) so a local .env override
	// applies; an unset or empty value falls back to the production origin.
	const env = loadEnv(mode, process.cwd(), '');
	process.env.PUBLIC_APP_ORIGIN = env.PUBLIC_APP_ORIGIN || 'https://app.guessthemove.live';

	return {
		plugins: [tailwindcss(), sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
