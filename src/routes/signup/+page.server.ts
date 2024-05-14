import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
