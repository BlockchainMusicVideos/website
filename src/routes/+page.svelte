<script lang="ts">
	import Video from '$lib/components/Video.svelte';
	import poster from '$images/screenshot-2.webp';
	import ios_app_store_icon from '$images/ios-app-store-icon.webp';
	import play_store_icon from '$images/google-play-badge.webp';

	const music_video = 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4';
</script>

<Video {music_video} {poster} />

<a class="buy_button" href="http://PayPal.Me/ARTNYC">ENTER $4.99 for viewing 5+ MUSIC VIDEOS</a>

<div class="store_icons">
	<a href="/"><img class="store_icon" src={ios_app_store_icon} alt="iOS App Store Icon" /></a>
	<a href="/">
		<img class="store_icon" src={play_store_icon} alt="Play Store Icon" />
	</a>
</div>

<style>
	.buy_button {
		display: block;
		width: fit-content;
		background-color: var(--pico-primary);
		padding: 1rem 2rem;
		border-radius: 100svh;
		font-size: clamp(1rem, 2vw, 1.5rem);
		color: var(--text);
		margin: 1rem auto;
		cursor: pointer;
		text-decoration: none;
	}
	.buy_button:hover {
		background-color: var(--pico-primary-background);
	}

	.store_icons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	.store_icon {
		width: clamp(200px, 30svw, 400px);
	}
</style>
