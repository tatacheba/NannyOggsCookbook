<script lang="ts">
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	export let currentRecipe;
	export let selectRecipe;

	let currentIndex = recipes.findIndex((recipe) => recipe.title === currentRecipe.title);

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
<RecipeCard recipe={currentRecipe} />
<button class="button-right" on:click={nextRecipe}></button>
