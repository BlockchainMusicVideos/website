import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleClerk } from 'clerk-sveltekit/server';
import { SECRET_CLERK_KEY } from '$env/static/private';

export const handle: Handle = sequence(
	handleClerk(SECRET_CLERK_KEY, {
		debug: true,
		protectedPaths: ['/videos', '/admin'],
		signInUrl: '/sign-in'
	})
);
