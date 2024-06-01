<!-- RecipeCard.svelte -->
<script>
	export let recipe;
</script>

<div>
	<div class="page">
		<h2>{recipe.title}</h2>
		<p>Servings: {recipe.servings}</p>
	</div>
</div>

<style>
	/* Стили для страницы */
	.page {
		width: 100%; /* Занимает всю доступную ширину */
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; /* Центрирует содержимое по вертикали и горизонтали */
		padding: 20px;
		box-sizing: border-box;
		position: absolute;
		transition: transform 0.5s ease; /* Анимация перелистывания */
		background-color: #f0f0f0; /* Цвет фона левой страницы */
		border-radius: 10px; /* Создает закругленные углы */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тень для эффекта поднятия страницы */
	}
</style>
