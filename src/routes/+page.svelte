<script lang="ts">
	import Video from '$lib/components/Video.svelte';
	const music_video = 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4';
	import poster from '$images/screenshot-1.png';
</script>

<Video {music_video} {poster} />

<p>
	<a class="buy_button" href="http://PayPal.Me/ARTNYC">ENTER $4.99 for viewing 5+ MUSIC VIDEOS</a>
</p>

<style>
	.buy_button {
		display: inline-block;
		background-color: var(--pico-primary);
		padding: 1rem 2rem;
		border-radius: 100svh;
		font-size: clamp(1rem, 2vw, 1.5rem);
		color: var(--pico-contrast-background);
		margin-top: 0.5rem;
		cursor: pointer;
		text-decoration: none;
	}
	.buy_button:hover {
		background-color: var(--pico-primary-background);
	}
</style>
