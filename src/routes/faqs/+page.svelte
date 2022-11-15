<script type="ts">
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Faq from './FAQ.svelte';

	import data from './data';
</script>

<svelte:head>
	<title>FAQs</title>
	<meta name="description" content="Learn more about Coast.NG." />
</svelte:head>

<Header selectedIndex={2} />

<div class="container mx-auto lg:p-10 m-4">
	<div class="prose prose-lg mx-auto">
		<h1 class="text-center pb-6 text-primary">FAQs</h1>
	</div>

	{#each data as { id, question, answer } (id)}
		<Faq {question} {answer} />
	{/each}
</div>

<Footer />
