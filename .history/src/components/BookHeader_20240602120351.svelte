<!-- BookHeader.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let selectedRecipe = null;
	function handleSelectRecipe(recipe) {
		selectRecipe(recipe);
	}
</script>

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2 on:click={() => selectedRecipe}>{recipe.title}</h2>
	{/each}
</div>
{#if selectedRecipe}
	<RecipeCard {selectedRecipe} />
{/if}
