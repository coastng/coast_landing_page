<script lang="ts">
	export let title: string;
	export let link: string;
	export let selected: boolean = false;
</script>

<li>
	<a class:bg-secondary={selected} class="mr-1" class:text-white={selected} href={link}>{title}</a>
</li>
