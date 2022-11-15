<script type="ts">
	import GiftcardIcon from '../../components/GiftcardIcon.svelte';

	export let title: string;
	export let content: string;
</script>

<div class="card card-outline w-full md:w-96 bg-blue-500 p-4 shadow-sm hover:shadow-lg">
	<div class="flex flex-row justify-between">
		<div class="flex flex-col flex-1">
			<div class="card-title text-white justify-center">{title}</div>
			<div class="card-body text-white">{content}</div>
		</div>
		<div class="w-20 h-16 my-auto">
			<slot />
		</div>
	</div>
</div>
