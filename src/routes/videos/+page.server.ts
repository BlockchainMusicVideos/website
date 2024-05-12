import type { PageServerLoad } from './$types';

export const load = (async () => {
	const videos = [
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster: '/src/lib/media/images/screenshot-2.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster: '/src/lib/media/images/screenshot-2.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster: '/src/lib/media/images/screenshot-2.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster: '/src/lib/media/images/screenshot-2.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster: '/src/lib/media/images/screenshot-2.png'
		}
	];
	return { videos };
}) satisfies PageServerLoad;
