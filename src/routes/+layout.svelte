<header>
	<a href="/"><h1>Welcome To Blockchain Music Videos</h1></a>
</header>

<main>
	<slot />
</main>

<footer>
	<p>© 2024 Ai-Blockchain, Inc. All rights reserved.</p>
	<p>
		<a href="/privacy-policy">Privacy Policy</a> -
		<a href="/legal">Legal Notice</a> -
		<a href="/dmca">DMCA</a> -
		<a href="/terms-of-service">Terms of Service</a>
	</p>
</footer>

<style>
	header,
	main,
	footer {
		padding: 1rem;
		max-width: 1200px;
		margin: 0 auto;
		background: rgba(0, 0, 0, 0.4);
	}
	main {
		min-height: calc(100vh - 400px);
		background: linear-gradient(
			180deg,
			var(--pico-primary-background) 8%,
			var(--pico-primary-hover) 20%,
			rgba(0, 0, 0, 0.4) 40%
		);
	}
	a {
		color: var(--pico-primary);
		text-decoration: none;
	}
</style>
