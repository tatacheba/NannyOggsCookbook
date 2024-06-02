<!-- RecipeBook.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let currentIndex = 0;
	let selectedRecipe = recipes[currentIndex];

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
<RecipeCard recipe={recipes[currentIndex]} />
<button class="button-right" on:click={nextRecipe}></button>
