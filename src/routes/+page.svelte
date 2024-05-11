<script lang="ts">
	import { default as detectAutoplay } from 'detect-autoplay';
	import { onMount } from 'svelte';

	import music_video from '$videos/california-cant-cry.mp4';

	let video: HTMLVideoElement;
	let video_container: HTMLDivElement;

	let is_muted = $state(true);

	onMount(() => {
		video = document.querySelector('.video');
		video_container = document.querySelector('.video-container');

		detectAutoplay().then((canAutoplay) => {
			if (canAutoplay) {
				// current website allows autoplay with sound
			} else {
				// current website does not allow autoplay with sound

				// video can only be muted to autoplay
				video.muted = true;

				// show a button to unmute
				const btn = document.createElement('button');
				btn.textContent = 'Sound';
				btn.classList.add('unmute-btn');
				btn.onclick = () => {
					video.muted = !is_muted;
					is_muted = !is_muted;
				};
				video_container.appendChild(btn);
			}

			video.autoplay = true;
			video.play();
		});
	});
</script>

<figure id="video-container" class="video-container">
	<video class="video" autoplay loop preload="metadata">
		<source src={music_video} type="video/mp4" />
		<!-- Fallback content for browsers that don't support MP4 -->
		<p>
			Your browser does not support the video format. Please consider upgrading to a modern browser.
		</p>
		<!-- Fallback thumbnail image -->
		<!-- <img src="thumbnail.jpg" alt="Video thumbnail" /> -->
	</video>
	<figcaption>CALIFORNIA CAN'T CRY</figcaption>
</figure>

<style>
	.video-container {
		position: relative;
		width: auto;
		height: 100%;
		margin: 0;
	}

	.video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
