<script lang="ts">
	export let recipes;
	export let selectRecipe;

	function handleSelectRecipe(recipe) {
		selectRecipe(recipe); // Передаем выбранный рецепт в родительский компонент
	}
</script>
<div class="book_header">
	{#each recipes as recipe}
		<h2
			on:click={() => handleSelectRecipe(recipe)}
			class:selected={currentRecipe && currentRecipe.title === recipe.title} // Условный класс
		>
			{recipe.title}
		</h2>
	{/each}
</div>
