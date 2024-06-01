<!-- RecipeBook.svelte -->
<script>
	import BookHeader from './BookHeader.svelte';
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
	<button class="button button-left" on:click={previousRecipe}></button>
	<RecipeCard recipe={recipes[currentIndex]} />

	<button class="button button-right" on:click={nextRecipe}></button>
</div>
