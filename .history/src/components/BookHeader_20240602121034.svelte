<script>
	export let recipes;
	export let selectRecipe;
</script>

<div class="book-header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2 on:click={() => console.log(recipe)}>{recipe.title}</h2>
	{/each}
</div>

<style>
	.book-header h2 {
		cursor: pointer;
	}
</style>
