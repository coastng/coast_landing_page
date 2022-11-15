<script type="ts">
	export let title: string;
	export let content: string;
</script>

<div class="transition p-4 group">
	<div
		class="card bg-slate-50 card-bordered w-80 p-2 shadow-lg mx-auto group-hover:bg-blue-500 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-150"
	>
		<div class="card-title justify-center mt-4 group-hover:text-white ease-in-out delay-50">
			<h1>{title}</h1>
		</div>
		<div class="card-body group-hover:text-white ease-in-out delay-50">
			{@html content}
		</div>
	</div>
</div>
