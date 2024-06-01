<!-- Recipe.svelte -->
<script>
	export let recipe;
</script>

<div>
	<div class="page left-page">
		<h2>Deep-Sea Blowfish (The Easy Version – not requiring years of training)</h2>
		<p>Servings: 2 as a starter</p>
	</div>
</div>
<div class="page right-page">
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
</div>

<style>
	/* Стили для страницы */
	.page {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
		position: absolute;
		transition: transform 0.5s ease; /* Анимация перелистывания */
	}

	/* Стили для левой страницы */
	.left-page {
		background-color: #f0f0f0; /* Цвет фона */
		transform-origin: right; /* Точка трансформации */
	}

	/* Стили для правой страницы */
	.right-page {
		background-color: #e0e0e0; /* Цвет фона */
		transform-origin: left; /* Точка трансформации */
		transform: rotateY(-180deg); /* Переворачиваем страницу */
	}
</style>
