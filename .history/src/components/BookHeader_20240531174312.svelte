<script>
	export let recipe;
</script>

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2>{recipe.title}</h2>
	{/each}
</div>
