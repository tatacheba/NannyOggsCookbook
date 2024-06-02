<!-- RecipeBook.svelte -->
<!-- <script>
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

<button class="button-left" on:click={previousRecipe}></button>
<RecipeCard recipe={recipes[currentIndex]} />
<button class="button-right" on:click={nextRecipe}></button> -->
<script>
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

<button class="button-left" on:click={previousRecipe}>Previous Recipe</button>
<!-- Передаем текущий рецепт в компонент RecipeCard -->
<RecipeCard recipe={currentRecipe} />
<button class="button-left" on:click={nextRecipe}>Next Recipe</button>
