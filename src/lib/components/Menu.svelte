<script>
	import { createEventDispatcher } from 'svelte';

	let cmds = [
		// ["Home", { url: "/" }],
		// ["Company", { url: "/company" }],
		['Products', { url: '/product' }],
		// ["Resources", { url: "/resources" }],
		['Documentation', { url: '/documentation' }],
		['Blog', { url: '/blog' }],
		['About', { url: '/about' }],
		['FAQ', { url: '/faq' }],
		['Download', { url: '/download' }]
		//['Blog',{ url: 'blog'}]
	];

	const dispatch = createEventDispatcher();

	let current = 'p';
	function handleClick(c) {
		let cmd = c.cmd;
		let url = c.url;
		let menu = c.menu;
		//  {cmd, url, menu} = c;

		if (cmd) {
			dispatch('message', { text: 'cmd:' + cmd });
		} else if (url) {
			dispatch('message', { text: 'url:' + url });
		} else if (menu) {
			dispatch('message', { text: 'menu:' + menu });
		}

		current = c;
	}

	export let showMenuSx;
</script>

<!-- <div class="bg-nuv-blue h-[81px] w-full justify-end px-[28px] hidden xl:flex">
    {#each cmds as cmd}
        <button class="whitespace-nowrap mr-[30px] text-[26px] text-white text-left font-medium leading-[30px] tracking-[-0.02em]"  on:click={() => handleClick(cmd[1])}>{cmd[0]}</button>
    {/each}
</div> -->
{#if showMenuSx}
	<div
		class="flex flex-col shadow-nuv-box-shadow rounded-br-[20px] absolute bg-white right-0 z-[100] w-[90%] pb-10 xl:hidden"
	>
		{#each cmds as cmd}
			{#if cmd[0] === 'Download'}
				<button
					class="text-[20px] text-white bg-nuv-orange h-full w-full text-center font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto"
					on:click={() => handleClick(cmd[1])}>{cmd[0]}</button
				>
			{:else if cmd[0] === 'FAQ'}
				<button
					class="text-[20px] text-nuv-blue text-center h-full w-full font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto"
					on:click={() => handleClick(cmd[1])}>{cmd[0]}</button
				>
			{:else}
				<button
					class="text-[20px] text-nuv-blue text-center h-full w-full font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto border-b-[1px] border-solid border-nuv-blue"
					on:click={() => handleClick(cmd[1])}>{cmd[0]}</button
				>
			{/if}
		{/each}
	</div>
{/if}
