<script type="ts">
	import data from '../faqs/data';
	import Faq from '../faqs/FAQ.svelte';
</script>

<div id="faqs" class="container mx-auto p-4 md:p-10 m-4 flex flex-col md:flex-row gap-x-8">
	<div class="prose prose-lg mx-auto">
		<h1 class="text-center pb-4 text-primary md:pb-0">FAQs</h1>
	</div>

	<div class="flex flex-col">
		{#each data as { id, question, answer } (id)}
			<Faq {question} {answer} />
		{/each}
	</div>
</div>
