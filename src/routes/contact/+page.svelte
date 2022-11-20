<script lang="ts">
	import contactUsImg from '$lib/assets/form-images/contact-us.png';
	import ContactUsForm from '$lib/components/ContactUsForm.svelte';
</script>

<div class="bg-nuv-blue w-full h-full flex justify-center">
	<div class="bg-white h-[686px] w-1/2 mt-[80px] rounded-2xl shadow-nuv-box-shadow flex">
		<div class="h-full w-1/2 p-5">
			<ContactUsForm />
		</div>

		<div class="h-full w-1/2 flex justify-center items-center">
			<img src={contactUsImg} alt="contact-us" />
		</div>
	</div>
</div>

<style>
	a {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
