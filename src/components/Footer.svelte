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
			<a href="https://www.twitter.com/Itscoastng" target="_blank" rel="noreferrer">
				<TwitterIcon />
			</a>
			<a
				href="https://www.youtube.com/channel/UCRvVfL6orUrCEDvlKswWXSw"
				target="_blank"
				rel="noreferrer"><YoutubeIcon /></a
			>
			<a
				href="https://www.facebook.com/Coast-Ng-Resources-108244488554161/"
				target="_blank"
				rel="noreferrer"><FacebookIcon /></a
			>
		</div>
	</div>
</footer>
