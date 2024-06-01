<!-- BookHeader.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	// Экспортируем переменную recipes из главного файла
	export let recipes;
	// Создаем переменную для отслеживания выбранного рецепта
	let selectedRecipe = null; // Здесь any означает, что переменная может быть любого типа
</script>

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<!-- Добавляем обработчик события для клика на название рецепта -->
		<h2 on:click={() => (selectedRecipe = recipe)}>{recipe.title}</h2>
	{/each}
</div>

<!-- Передаем выбранный рецепт в компонент RecipeCard, если он выбран -->
{#if selectedRecipe}
	<RecipeCard {recipe} />
{/if}
