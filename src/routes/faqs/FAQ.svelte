<script type="ts">
	let expanded: boolean = false;

	export let question: string;
	export let answer: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="collapse collapse-plus border shadow-md border-base-300 bg-base-100 rounded-box cursor-pointer mb-2"
	class:collapse-open={expanded}
	class:collapse-close={!expanded}
	on:click={() => (expanded = !expanded)}
>
	<div class="collapse-title text-xl font-medium">{question}</div>
	<div class="collapse-content article lg:ml-2">
		{@html answer}
	</div>
</div>
