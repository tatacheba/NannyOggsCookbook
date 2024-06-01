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

<div class="book">
	<button class="button button-left" on:click={previousRecipe}>&lt;</button>
	<RecipeCard recipe />
	<button class="button button-right" on:click={nextRecipe}>&gt;</button>
</div>
