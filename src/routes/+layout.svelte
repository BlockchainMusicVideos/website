<script lang="ts">
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<header>
	<a href="/"><h1>Welcome To Blockchain Music Videos</h1></a>
	<nav>
		<SignedIn>
			<UserButton afterSignOutUrl="/" />
		</SignedIn>
		<SignedOut>
			<SignInButton mode="modal" />
		</SignedOut>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>© 2024 Ai-Blockchain, Inc. All rights reserved.</p>
	<p>
		<a href="/privacy">Privacy Policy</a> -
		<a href="/legal">Legal Notice</a> -
		<a href="/dmca">DMCA</a> -
		<a href="/tou">Terms of Service</a>
	</p>
</footer>

<style>
	:global(body) {
		background:
			linear-gradient(
				180deg,
				var(--pico-primary-background) 8%,
				var(--pico-primary-hover) 20%,
				rgba(0, 0, 0, 0.75)
			),
			url('$images/sun_burst.webp') no-repeat center center fixed;
		background-size: cover;
	}
	header,
	main,
	footer {
		position: relative;
		z-index: 3;
		padding: 1rem;
		max-width: 1200px;
		margin: 0 auto;
		background: rgba(0, 0, 0, 1);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media (max-width: 768px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}
		nav {
			margin-left: auto;
		}
	}

	main {
		min-height: calc(100vh - 400px);
		background: rgba(0, 0, 0, 0.75);
		padding: 2rem 1rem 0.5rem 1rem;
	}

	a {
		color: var(--pico-primary);
		text-decoration: none;
	}
</style>
