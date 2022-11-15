<script>
	import HashIcon from './HashIcon.svelte';
	import TwitterIcon from './TwitterIcon.svelte';
	import YoutubeIcon from './YoutubeIcon.svelte';
	import FacebookIcon from './FacebookIcon.svelte';
</script>

<footer class="footer p-10 bg-primary text-neutral-content">
	<div>
		<HashIcon />
		<p>Coast.NG Resources Ltd.<br />Providing reliable software</p>
	</div>
	<div>
		<span class="footer-title">Social</span>
		<div class="grid grid-flow-col gap-4">
			<a href="#" target="_blank">
				<TwitterIcon />
			</a>
			<a href="#" target="_blank"><YoutubeIcon /></a>
			<a href="#" target="_blank"><FacebookIcon /></a>
		</div>
	</div>
</footer>
