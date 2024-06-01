<!-- RecipeSlider.svelte -->
<script>
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

<div class="book-container">
	<div class="page left-page">
		<!-- Содержимое левой страницы -->
		<h2>Deep-Sea Blowfish (The Easy Version – not requiring years of training)</h2>
		<p>Servings: 2 as a starter</p>
		<!-- Дополнительное содержимое -->
	</div>
	<button on:click={previousRecipe}>Previous Recipe</button>
	<RecipeCard recipe={recipes[currentIndex]} />
	<button on:click={nextRecipe}>Next Recipe</button>
</div>

<style>
	/* Общие стили для контейнера */
	.book-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 600px; /* Ширина книги */
		height: 400px; /* Высота книги */
		border: 2px solid #ccc;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		perspective: 1000px; /* Эффект перелистывания */
	}

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

	/* Стили для кнопок */
	.button {
		padding: 10px 20px;
		background-color: #007bff; /* Цвет фона */
		color: #fff; /* Цвет текста */
		border: none;
		border-radius: 5px;
		cursor: pointer;
		outline: none;
		transition: background-color 0.3s ease; /* Плавное изменение цвета */
	}

	/* Стили для кнопки "Previous Recipe" */
	.prev-button {
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
	}

	/* Стили для кнопки "Next Recipe" */
	.next-button {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	/* При наведении на кнопку */
	.button:hover {
		background-color: #0056b3; /* Изменение цвета при наведении */
	}
</style>
