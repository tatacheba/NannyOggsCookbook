<!-- RecipeBook.svelte -->
<script>
	import BookHeader from './BookHeader.svelte';
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let currentIndex = 0;
	let selectedRecipe = recipes[currentIndex];

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
		selectedRecipe = recipes[currentIndex];
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
		selectedRecipe = recipes[currentIndex];
	}
</script>

<button class="button button-left" on:click={previousRecipe}>Previous Recipe</button>
<RecipeCard recipe={selectedRecipe} />
<button class="button button-right" on:click={nextRecipe}>Next Recipe</button>

<BookHeader {recipes} />
