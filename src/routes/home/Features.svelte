<script>
	import PaymentIcon from '../../components/PaymentIcon.svelte';
	import GiftcardIcon from '../../components/GiftcardIcon.svelte';
	import SupportIcon from '../../components/SupportIcon.svelte';
	import ReferAndEarnIcon from '../../components/ReferAndEarnIcon.svelte';
	import BillsIcon from '../../components/BillsIcon.svelte';
	import VirtualAccount from '../../components/VirtualAccount.svelte';
	import FeatureItem from './FeatureItem.svelte';
</script>

<div class="container mt-10 mx-auto p-2 md:p-8 relative">
	<!-- Feature title -->
	<div class="prose">
		<h1 class="text-center md:text-left mb-1">Features</h1>
		<div class="h-1 bg-blue-500 rounded-md mb-8" />
	</div>
	<!-- Feature item card -->
	<div
		class="flex flex-col items-center justify-center gap-2 md:justify-between flex-wrap md:flex-row"
	>
		<FeatureItem
			title="Sell Giftcards"
			content="Sell a Giftcard and be paid within minutes! Our agents will attend to your orders wherever and whenever you place them with no delay and 100% uptime!!!"
		>
			<GiftcardIcon width={64} height={64} />
		</FeatureItem>

		<FeatureItem
			title="Fast Payout"
			content="Want to withdraw your money as soon as you're done trading? Go ahead! Withdraw fast and to any bank of your choice!"
		>
			<PaymentIcon width={64} height={64} />
		</FeatureItem>

		<FeatureItem
			title="Pay Bills & Airtime/Data"
			content="[Coming Soon] Or you can buy airtime/data and pay for bills and utilities with your wallet balance like a pro!"
		>
			<BillsIcon width={64} height={64} />
		</FeatureItem>

		<FeatureItem
			title="Virtual Account"
			content="[Coming Soon] Fund your wallet with a virtual account number dedicated to you. It is safe, fast and secure."
		>
			<VirtualAccount width={64} height={64} />
		</FeatureItem>

		<FeatureItem
			title="Always-On Support"
			content="We're always available 24/7 on our social media channels, so don't hesitate to reach out to us on these mediums."
		>
			<SupportIcon width={64} height={64} />
		</FeatureItem>

		<FeatureItem
			title="Refer & Earn"
			content="Participate in our referral program and earn passive income whenever your referree(s) trade for the first time on the app."
		>
			<ReferAndEarnIcon width={64} height={64} />
		</FeatureItem>
	</div>
</div>
