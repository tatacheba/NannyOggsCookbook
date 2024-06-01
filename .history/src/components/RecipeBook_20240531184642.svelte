<!-- RecipeBook.svelte -->
<script>
	import BookHeader from './BookHeader.svelte';
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let currentIndex = 0;
	let selectedRecipe = recipes[currentIndex]; // Define selectedRecipe as the current recipe

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
		selectedRecipe = recipes[currentIndex]; // Update selectedRecipe when nextRecipe is called
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
		selectedRecipe = recipes[currentIndex]; // Update selectedRecipe when previousRecipe is called
	}
</script>

<div class="book">
	<button class="button button-left" on:click={previousRecipe}></button>
	<RecipeCard {recipe} />
	<button class="button button-right" on:click={nextRecipe}></button>
</div>

<BookHeader {recipes} {selectedRecipe} />
