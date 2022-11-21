<script lang="ts">
	import { base } from '$app/paths';

	export let data;
</script>

<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>

<h1>Blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={'blog/' + post.dir}>{post.meta.title} <small>Published {post.meta.date}</small></a>
			</h2>
			{base} uyftdr
		</li>
	{/each}
</ul>
