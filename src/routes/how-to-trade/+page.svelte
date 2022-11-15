<script type="ts">
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';

	import InstructionsListItem from './InstructionsListItem.svelte';

	const data = [
		{
			id: 1,
			title: 'Download the app:',
			content:
				'The first step to trade is to download the mobile application which can be done by going to the playstore or appstore on your device and proceed to search for “Coast”. Download the application.'
		},
		{
			id: 2,
			title: 'Sign up:',
			content:
				'Following the downloading of the app comes the sign up process which is the second step on the “how to trade” guidelines. Proceed to sign up on the application by filling out all the necessary information requested for. Requested details could include first name, last name, email address, phone number, username, BVN, referral code (optional), and lastly creation of your unique password.'
		},
		{
			id: 3,
			title: 'Click on sell giftcards:',
			content:
				'After signing up, the next step to trade would be to pick the giftcard of your choice which you would like to sell. You’ll be provided with a long list of variety giftcards, a few of which might be, Amazon, EBay, Nordstorm, iTunes, Sephora, Razer gold, American Express, Steam, Vanilla, Visa etc. All you have to do is to proceed to select a giftcard of your choice.'
		},
		{
			id: 4,
			title: 'Select a country:',
			content:
				'After picking the giftcard you would like you to sell, the following procedure is to select a country, and once again a list of numerous country would appear on your screen. All you have to do is to scroll and pick the country of your choice.'
		},
		{
			id: 5,
			title: 'Proceed to select the type of giftcard you want to sell:',
			content:
				'There are two types of giftcards you can sell on the Coast app, and they are Physical card and E-code. A physical card referring to the giftcard which contains various details about the card you want to sell while E-code refers to the giftcard which consist of just numbers. After taking a look at the type of giftcard, proceed to pick the type.'
		},
		{
			id: 6,
			title: 'Select the value range:',
			content:
				'Ranges are set from 20-49, 20-50, 50-100, 50-200, 500-2000 and the likes. Depending on the type of giftcard you have to sell, all you have to do is to pick a range among the options that you’ll be given.'
		},
		{
			id: 7,
			title: 'Enter the amount:',
			content:
				'Now you’re almost done selling your giftcard, the next step is to enter the amount of giftcard you would like to sell and this process is easy because after typing the amount, all you have to do is to wait for a few seconds and the total amount would be automatically calculated for you and displayed for you to see.'
		},
		{
			id: 8,
			title: 'Click on submit:',
			content:
				'This is the last step in selling your giftcard, click on the “submit” button and your transaction would be automatically processed within few seconds.'
		},
		{
			id: 9,
			title: 'Your wallet balance gets credited:',
			content:
				'After your transaction has been processsed successfully, your wallet balance gets credited all in few seconds after which you can decide to withdraw the money to your account or do as you please.'
		}
	];
</script>

<svelte:head>
	<title>How To Trade</title>
</svelte:head>

<Header selectedIndex={0} />

<div class="container mx-auto lg:p-10 m-4">
	<div class="prose prose-lg mx-auto">
		<h1 class="text-center pb-6 text-primary">How to Trade on Coast</h1>
	</div>

	<div class="m-auto card card-bordered shadow-xl">
		<div class="card-body prose mx-auto">
			<article>
				<p>
					Trading doesn't have to be tedious, which is why steps have been written to aid your easy
					and fast trades, here are steps on how to trade on the app.
				</p>
				<ol>
					{#each data as { id, content, title } (id)}
						<InstructionsListItem {title} {content} />
					{/each}
				</ol>
			</article>
		</div>
	</div>
</div>

<Footer />
