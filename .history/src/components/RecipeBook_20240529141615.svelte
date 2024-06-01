<!-- RecipeSlider.svelte -->
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
	<button on:click={previousRecipe}>Previous Recipe</button>
	<!-- Отобразите текущий рецепт -->
	<div>
		<h2>{recipes[currentIndex].title}</h2>
		<!-- Остальные детали рецепта -->
	</div>
	<button on:click={nextRecipe}>Next Recipe</button>
</div>

<style>
	/* Стили для компонента */
</style>
