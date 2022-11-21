import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const postsFilesPaths = import.meta.glob('../../content/blog/**/*.md');
	const postPathMap = Object.entries(postsFilesPaths);
	const allPosts = await Promise.all(
		postPathMap.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postDir = path
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop();
			return {
				meta: metadata,
				dir: postDir
			};
		})
	);

	return { posts: allPosts };
};
