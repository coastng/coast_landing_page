<script>
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import CryptoHero from '../../components/CryptoHero.svelte';
</script>

<svelte:head>
	<title>Coast | Crypto</title>
	<meta
		name="description"
		content="We make it safe and easy to buy and sell your crypto with little to no experience."
	/>
</svelte:head>

<Header selectedIndex={5} />

<div class="container mx-auto lg:p-10 m-4">
	<div class="prose prose-lg mx-auto">
		<h1 class="text-center pb-6 text-primary">Trade Crypto (BTC/USDT/ETH...) With Coast</h1>
	</div>
	<div class="m-auto card card-bordered lg:border-t-4 shadow-xl">
		<figure>
			<CryptoHero width={24} height={24} />
		</figure>
		<div class="card-body prose mx-auto">
			<article>
				WE ARE WORKING ON AN AMAZING PLATFORM FOR YOU TO TRADE YOUR CRYPTO AT AMAZING RATES, SO
				WATCH THIS SPACE. AT THE MOMENT, YOU CAN TRADE YOUR CRYPTO WITH COAST USING OUR WHATSAPP
				PLATFORM.
				<p>WE MAKE IT SAFE AND EASY TO BUY AND SELL YOUR CRYPTO WITH LITTLE OR NO EXPERIENCE.</p>
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
