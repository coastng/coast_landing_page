<script>
	import GooglePlayIcon from './GooglePlayIcon.svelte';
	import AppStoreIcon from './AppStoreIcon.svelte';
</script>

<div
	class="hero min-h-screen bg-white/90 bg-cover bg-no-repeat bg-[url('/bg-tablet-pattern.svg')] bg-blend-lighten bg-[90%_45%]"
>
	<div class="hero-content flex flex-col md:flex-row md:gap-28">
		<img
			src="/phone_home_.png"
			class="transition max-w-sm rounded-lg ease-in-out delay-75 duration-300 hover:scale-110"
			alt="App screenshot"
		/>
		<div class="max-w-md">
			<h1 class="text-5xl font-bold text-center md:text-left">Trade at mouth-watering Rates</h1>
			<p class="py-6 text-sm md:text-lg">
				Your one-stop platform for Trading All Giftcards. Nice rates that would sweep you off your
				feets, Quick Trade Response time With Instant Pay Outs.
			</p>
			<div class="text-center flex flex-col gap-2 md:text-left md:flex-row">
				<a
					class="btn bg-black border-black hover:bg-white hover:text-black hover:border-black"
					href="https://play.google.com/store/apps/details?id=ng.coast.app"
					target="_blank"
					rel="noreferrer"
				>
					<span class="mr-2">
						<GooglePlayIcon width={24} height={24} />
					</span>
					Download
				</a>
				<a
					class="btn bg-black border-black hover:bg-white hover:text-black hover:border-black group"
					href="https://coast.ng"
					target="_blank"
					rel="noreferrer"
				>
					<span class="mr-2">
						<AppStoreIcon width={32} height={32} />
					</span>
					Download
				</a>
			</div>
		</div>
	</div>
</div>
