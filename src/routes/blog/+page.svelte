<script lang="ts">
	export let data: { posts: [{ slug: any; title: any; date: any }] };
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
				<a href={'blog/' + post.slug}>{post.title} <small>Published {post.date}</small></a>
			</h2>
		</li>
	{/each}
</ul>
