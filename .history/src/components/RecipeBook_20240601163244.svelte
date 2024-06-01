<!-- RecipeBook.svelte -->
<script>
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
	<button on:click={previousRecipe}>Предыдущий рецепт</button>
	<Recipe recipe={recipes[currentIndex]} />
	<button on:click={nextRecipe}>Следующий рецепт</button>
</div>

<style>
	/* Стили для компонента */
</style>
