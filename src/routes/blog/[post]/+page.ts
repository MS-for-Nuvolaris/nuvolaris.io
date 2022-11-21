import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const file = await import(`../../../content/blog/${params.post}/index.md`);
	const { title, date } = file.metadata;
	const content = file.default;

	return {
		content,
		title,
		date
	};
};
