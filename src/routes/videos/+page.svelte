<script lang="ts">
	import type { PageData } from './$types';
	import Video from '$lib/components/Video.svelte';

	let { data } = $props() as { data: PageData };
	let { videos } = data;
</script>

<div class="video-grid">
	{#each videos as { music_video, poster }}
		<Video {music_video} {poster} />
	{/each}
</div>

<style>
	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
