<script type="ts">
	import CoastIcon from './CoastIcon.svelte';
	import HeaderNavItem from './HeaderNavItem.svelte';
	import Burger from './Burger.svelte';
	import { browser } from '$app/environment';

	export let selectedIndex: number = -1;

	/**
	 * Determine the mobile operating system.
	 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
	 *
	 * @returns {String}
	 */
	function getMobileOperatingSystem(): string {
		if (!browser) {
			return 'Android';
		}
		var userAgent = navigator.userAgent || navigator.vendor;

		// Windows Phone must come first because its UA also contains "Android"
		if (/windows phone/i.test(userAgent)) {
			return 'Windows Phone';
		}

		if (/android/i.test(userAgent)) {
			return 'Android';
		}

		if (/iPad|iPhone|iPod|Mac/.test(userAgent)) {
			return 'iOS';
		}

		return 'Android';
	}

	const link =
		getMobileOperatingSystem() === 'Android'
			? 'https://play.google.com/store/apps/details?id=ng.coast.app'
			: 'https://developer.apple.com';
</script>

<div class="navbar bg-base-100 shadow-md py-4 my-1">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<Burger />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<HeaderNavItem title="Blog" link="https://blog.coast.ng" selected={selectedIndex === 200} />
				<HeaderNavItem title="How To Trade" link="/how-to-trade" selected={selectedIndex === 0} />
				<HeaderNavItem title="About" link="/about" selected={selectedIndex === 1} />
				<HeaderNavItem title="FAQs" link="/#faqs" selected={selectedIndex === 2} />
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl" href="/"
			><CoastIcon width={30} height={30} /> Coast</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<HeaderNavItem title="Blog" link="https://blog.coast.ng" selected={selectedIndex === 200} />
			<HeaderNavItem title="How To Trade" link="/how-to-trade" selected={selectedIndex === 0} />
			<HeaderNavItem title="About" link="/about" selected={selectedIndex === 1} />
			<HeaderNavItem title="FAQs" link="/#faqs" selected={selectedIndex === 2} />
		</ul>
	</div>
	<div class="navbar-end">
		<a href={link} rel="noreferrer" target="_blank" class="btn bg-primary hover:bg-secondary">
			Download App
		</a>
	</div>
</div>
