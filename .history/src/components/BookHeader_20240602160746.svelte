<script lang="ts">
	export let recipes;
	export let selectRecipe;
	export let currentRecipe; // Добавлено

	function handleSelectRecipe(recipe) {
		selectRecipe(recipe); // Передаем выбранный рецепт в родительский компонент
	}
</script>

<div class="book-header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<!-- При клике на заголовок рецепта вызываем handleSelectRecipe -->
		<h2
			on:click={() => handleSelectRecipe(recipe)}
			class:selected={currentRecipe && currentRecipe.title === recipe.title}
		>
			{recipe.title}
		</h2>
	{/each}
</div>
