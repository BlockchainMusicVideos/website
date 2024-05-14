// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@jill64/sveltekit-adapter-aws';
import adapter from 'amplify-adapter';
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
	}
};

export default config;
