import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

// Build-time default for the live-app origin the CTA links to. The deployment
// pipeline (deferred follow-up, see PRD #20/#23) overrides this per branch by
// setting PUBLIC_APP_ORIGIN in the build environment; anything already present
// in process.env wins over this default, so local dev and tests fall back to
// the production origin safely.
process.env.PUBLIC_APP_ORIGIN ??= 'https://app.guessthemove.live';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
