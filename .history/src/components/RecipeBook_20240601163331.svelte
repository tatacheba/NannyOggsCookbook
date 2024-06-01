<!-- RecipeBook.svelte -->
<script>
	export let recipes;

	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
	}
</script>

<div>
	<button on:click={previousRecipe}>Предыдущий рецепт</button>
	{#if recipes[currentIndex]}
		<div>
			<h2>{recipes[currentIndex].title}</h2>
			<p>Порции: {recipes[currentIndex].servings}</p>
			<ul>
				{#each recipes[currentIndex].ingredients as ingredient}
					<li>{ingredient.quantity} {ingredient.unit || ''} {ingredient.name}</li>
				{/each}
			</ul>
			<h3>Инструкции:</h3>
			<ol>
				{#each recipes[currentIndex].instructions as instruction}
					<li>{instruction}</li>
				{/each}
			</ol>
			<h3>Примечания:</h3>
			<ul>
				{#each recipes[currentIndex].notes as note}
					<li>{note}</li>
				{/each}
			</ul>
		</div>
	{:else}
		<p>Рецепт не найден</p>
	{/if}
	<button on:click={nextRecipe}>Следующий рецепт</button>
</div>

<style>
	/* Стили для компонента */
</style>
