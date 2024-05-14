import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	const videos = [
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster:
				'https://res.cloudinary.com/tithos/image/upload/c_thumb,w_200,g_face/v1715493344/screenshot-2_ufkzm9.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster:
				'https://res.cloudinary.com/tithos/image/upload/c_thumb,w_200,g_face/v1715493344/screenshot-2_ufkzm9.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster:
				'https://res.cloudinary.com/tithos/image/upload/c_thumb,w_200,g_face/v1715493344/screenshot-2_ufkzm9.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster:
				'https://res.cloudinary.com/tithos/image/upload/c_thumb,w_200,g_face/v1715493344/screenshot-2_ufkzm9.png'
		},
		{
			music_video: 'https://3-aws-file.s3.amazonaws.com/BlockchainMusicVideos.mp4',
			poster:
				'https://res.cloudinary.com/tithos/image/upload/c_thumb,w_200,g_face/v1715493344/screenshot-2_ufkzm9.png'
		}
	];
	return { videos };
}) satisfies PageServerLoad;
