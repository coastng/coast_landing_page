<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import HomeHero from './home/HomeHero.svelte';
	import Taglines from './home/Taglines.svelte';
	import Features from './home/Features.svelte';
	import Faqs from './home/Faqs.svelte';
</script>

<svelte:head>
	<title>Coast - Sell Giftcards</title>
	<meta
		name="description"
		content="Trade giftcards and crypto on the Coast platform. Fast, safe and easy"
	/>
</svelte:head>

<div class="bg-slate-100">
	<Header />

	<!-- The Homepage content goes here :) -->
	<HomeHero />

	<Taglines />

	<Features />

	<Faqs />

	<Footer />
</div>
