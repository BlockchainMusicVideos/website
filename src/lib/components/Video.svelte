<svelte:options runes={true} />

<script lang="ts">
	import { default as detectAutoplay } from 'detect-autoplay';
	import { onMount } from 'svelte';

	let { music_video, poster } = $props();

	let video: HTMLVideoElement | null = null;
	let video_container: HTMLDivElement | null = null;

	let is_muted = $state(true);
	let isPlaying = $state(false);

	function togglePlay() {
		if (video) {
			if (video.paused) {
				video.play();
				isPlaying = true;
			} else {
				video.pause();
				isPlaying = false;
			}
		}
	}

	onMount(() => {
		if (video && video_container) {
			detectAutoplay().then((canAutoplay) => {
				if (canAutoplay) {
					// current website allows autoplay with sound
				} else {
					if (video) {
						video.muted = true;

						// show a button to unmute
						const btn = document.createElement('button');
						btn.textContent = 'Sound';
						btn.classList.add('unmute-btn');
						btn.onclick = () => {
							video!.muted = !is_muted;
							is_muted = !is_muted;
						};
						video_container?.appendChild(btn);
					}
				}

				video!.autoplay = true;
				video!.play();
			});
		}
	});
</script>

<figure class="video-container" bind:this={video_container}>
	<button class="play-button" onclick={togglePlay}>
		{#if isPlaying}
			<span>Pause</span>
		{:else}
			<span>Play</span>
		{/if}
	</button>
	<video class="video" autoplay loop preload="metadata" bind:this={video} {poster}>
		<source src={music_video} type="video/mp4" />
		<track kind="captions" />
		<!-- Fallback content for browsers that don't support MP4 -->
		<p>
			Your browser does not support the video format. Please consider upgrading to a modern browser.
		</p>
		<!-- Fallback thumbnail image -->
		<img src={poster} alt="Video thumbnail" />
	</video>
	<figcaption>CALIFORNIA CAN'T CRY</figcaption>
</figure>

<style>
	.video-container {
		container-type: inline-size;
		position: relative;
		width: 100%;
		height: auto;
		margin: 0;
		overflow: hidden;
		border-radius: 1rem;
		box-shadow: var(--shadow-elevation-medium);
	}

	.video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	figcaption {
		margin-top: -7px;
		color: var(--pico-color);
		padding: 0.75rem 1rem;
		background: rgba(0, 0, 0, 0.5);
	}

	.play-button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		z-index: 1000;
	}

	/* screens larger than 768px */
	@container (min-width: 768px) {
		.play-button {
			display: none;
			visibility: hidden;
		}
	}
</style>
