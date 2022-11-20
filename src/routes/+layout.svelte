<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Top from '$lib/components/Top.svelte';
	import Bottom from '$lib/components/Bottom.svelte';
	import '../app.postcss';
</script>

<Top />
<main class="xl:min-h-500px max-w-[100vw] overflow-x-hidden">
	<!-- {#if page === Download}
		<div class="bg-nuv-blue top-0 h-[100px] w-full relative" />
		{/if} -->
	<Menu showMenuSx />
	<slot />
</main>
<Bottom />
