<script>
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import CryptoHero from '../../components/CryptoHero.svelte';
</script>

<svelte:head>
	<title>Coast | Bitcoin</title>
	<meta
		name="description"
		content="We make it safe and easy to buy and sell your bitcoin with little to no experience."
	/>
</svelte:head>

<Header selectedIndex={5} />

<div class="container mx-auto lg:p-10 m-4">
	<div class="prose prose-lg mx-auto">
		<h2 class="text-center pb-6 text-primary">TRADE BITCOIN (BTC) WITH COAST</h2>
	</div>
	<div class="m-auto card card-bordered lg:border-t-4 shadow-xl">
		<figure>
			<CryptoHero width={24} height={24} />
		</figure>
		<div class="card-body prose mx-auto">
			<article>
				We are working on an amazing platform for you to trade your bitcoin at amazing rates, so
				watch this space. At the moment, you can trade your bitcoin with Coast using our WhatsApp
				platform.
				<p>We make it safe and easy to buy and sell your bitcoin with little or no experience.</p>
				<div class="text-center">
					<a
						href="https://wa.me/message/UHDYTUWMJQUOG1"
						target="_blank"
						rel="noreferrer"
						class="btn btn-primary">Start Now</a
					>
				</div>
			</article>
		</div>
	</div>
</div>

<Footer />
