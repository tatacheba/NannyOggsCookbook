<script>
	import BookHeader from './BookHeader.svelte';
	import RecipeCard from './RecipeCard.svelte';

	export let recipes: { id: number; title: string; ingredients: string[] }[];
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

<div class="book">
	<button class="button button-left" on:click={previousRecipe}></button>
	<RecipeCard recipe={selectedRecipe} />
	<button class="button button-right" on:click={nextRecipe}></button>
</div>

<BookHeader {recipes} />
