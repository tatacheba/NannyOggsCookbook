<script lang="ts">
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

<button class="button-left" on:click={previousRecipe}></button>
<!-- Передаем текущий рецепт в компонент RecipeCard -->
<RecipeCard recipe={currentRecipe} />
<button class="button-right" on:click={nextRecipe}></button>
