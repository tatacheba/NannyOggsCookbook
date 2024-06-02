<!-- RecipeBook.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	// export let currentRecipe;
	// export let selectRecipe;

	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
	}
</script>

<button class="button-left" on:click={previousRecipe}></button>
<RecipeCard recipe={recipes[currentIndex]} />
<button class="button-right" on:click={nextRecipe}></button>
