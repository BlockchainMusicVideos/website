import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$images: './src/lib/media/images',
			$videos: './src/lib/media/videos'
		}
	},
	compilerOptions: {
		runes: true
	}
};

export default config;
