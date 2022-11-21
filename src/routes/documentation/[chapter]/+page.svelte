<script lang="ts">
	export let data;
	const { title, content } = data;
</script>

<svelte:head>
	<title>{title} - Nuvolaris: Join the serverless revolution!</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1>{title}</h1>

	<div class="prose">
		<svelte:component this={content} />
	</div>
</article>
