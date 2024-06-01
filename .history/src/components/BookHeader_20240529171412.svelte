<div class="book">
	<button class="button button-left" on:click={previousRecipe}>&lt;</button>
	<RecipeCard recipe={recipes[currentIndex]} />
	<button class="button button-right" on:click={nextRecipe}>&gt;</button>
</div>
