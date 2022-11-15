<script>
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<svelte:head>
	<title>About Coast</title>
</svelte:head>

<Header selectedIndex={1} />

<div class="container mx-auto lg:p-10 m-4">
	<div class="prose prose-lg mx-auto">
		<h1 class="text-center pb-6 text-primary">About Coast</h1>
	</div>
	<div class="m-auto card card-bordered lg:border-t-4 shadow-xl">
		<figure><img class="lg:h-1/2 sm:h-1/2" src="/coast_logo.png" alt="Coast Logo" /></figure>
		<div class="card-body prose mx-auto">
			<article>
				Coast NG is a place to trade Digital Assets and get your Utility payment solutions.
				<p>
					Alongside, we are 100% committed to providing you with swift and secured payments on all
					your transactions. Offering you our best trait which is reliability and trustworthiness.
					Coast ng is a simple, easy to navigate trading platform for everyone.
				</p>
				<p>We make it safe and easy to buy and sell digital assets with little to no experience.</p>
			</article>
		</div>
	</div>
</div>

<Footer />
