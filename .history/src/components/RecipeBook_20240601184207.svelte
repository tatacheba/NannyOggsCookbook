<!-- RecipeBook.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
	}
</script>

<button class="button-left" on:click={previousRecipe}>Previous Recipe</button>
<RecipeCard recipe={recipes[currentIndex]} />
<button class="next-button" on:click={nextRecipe}>Next Recipe</button>
