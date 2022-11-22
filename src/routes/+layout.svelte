<script lang="ts">
	import Top from '$lib/components/Top.svelte';
	import Bottom from '$lib/components/Bottom.svelte';
	import '../app.postcss';
	export const prerender = 'auto';
</script>

<Top />
<main class="xl:min-h-500px max-w-[100vw] overflow-x-hidden">
	<!-- {#if page === Download}
		<div class="bg-nuv-blue top-0 h-[100px] w-full relative" />
		{/if} -->
	<slot />
</main>
<Bottom />
