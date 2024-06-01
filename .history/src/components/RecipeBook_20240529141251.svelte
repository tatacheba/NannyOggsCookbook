<!-- RecipeSlider.svelte -->
<script>
	import Recipe from './Recipe.svelte';

	export let recipes;
	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
	}
</script>

<div>
	<button on:click={previousRecipe}>Previous Recipe</button>
	<Recipe recipe={recipes[currentIndex]} />
	<button on:click={nextRecipe}>Next Recipe</button>
</div>

<style>
	/* Стили для компонента */
</style>
