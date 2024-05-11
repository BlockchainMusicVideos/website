<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
	<h1>Welcome To Blockchain Music Videos</h1>
	<p>Music Videos on the Blockchain</p>
</header>

<main>
	<slot />
</main>

<footer>
	<p>© 2024 Ai-Blockchain, Inc. All rights reserved.</p>
	<p>
		<a href="/privacy-policy">Privacy Policy</a>
		<a href="/legal">Legal Notice</a>
		<a href="/dmca">DMCA</a>
		<a href="/terms-of-service">Terms of Service</a>
	</p>
</footer>

<style>
	header,
	main,
	footer {
		padding: 1rem;
	}
	header {
		height: 250px;
	}
	main {
		width: 1200px;
		min-height: calc(100vh - 400px);
		margin: 0 auto;
	}
	footer {
		height: 150px;
	}
</style>
