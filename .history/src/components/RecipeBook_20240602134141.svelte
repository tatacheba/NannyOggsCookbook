<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	export let currentRecipe;
	export let selectRecipe;

	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
		selectRecipe(recipes[currentIndex]);
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
		selectRecipe(recipes[currentIndex]);
	}
</script>

<div class="book-container">
	<button class="button prev-button" on:click={previousRecipe}>Previous Recipe</button>
	<!-- Передаем текущий рецепт в компонент RecipeCard -->
	<RecipeCard {recipe}={currentRecipe} />
	<button class="button next-button" on:click={nextRecipe}>Next Recipe</button>
</div>
