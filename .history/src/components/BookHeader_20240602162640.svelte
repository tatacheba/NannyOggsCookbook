<script lang="ts">
	export let recipes;
	export let selectRecipe;
	export let currentRecipe;

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

<style>
	.book-header {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 10;
		background: rgba(255, 255, 255, 0.8);
		padding: 10px 20px;
		border-radius: 10px;
	}

	.book-header h2 {
		cursor: pointer;
		position: relative;
		padding-left: 25px;
		color: #220f02; /* Начальный цвет */
	}

	.book-header h2.selected {
		color: #8b4513; /* Цвет для выбранного рецепта */
	}

	.book-header h2::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		width: 10px;
		height: 10px;
		background: #8b4513;
		border-radius: 50%;
		transform: translateY(-50%);
		opacity: 0; /* Начальное состояние невидимым */
		transition: opacity 0.3s;
	}

	.book-header h2.selected::before {
		opacity: 1; /* Отображать индикатор для выбранного рецепта */
	}
</style>
