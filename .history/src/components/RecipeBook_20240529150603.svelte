<!-- RecipeBook.svelte -->
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
	<button class="button prev-button" on:click={previousRecipe}>Previous Recipe</button>
	<RecipeCard recipe={recipes[currentIndex]} />
	<button class="button next-button" on:click={nextRecipe}>Next Recipe</button>
</div>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Aunt Ogg's Recipe Book</title>
</head>
<body>
    <div class="book">
        <button class="button-left">&lt;</button>
        <div class="page">
            <h1>Aunt Ogg's Recipe Book</h1>

        </div>
        <button class="button-right">&gt;</button>
    </div>
</body>
</html> -->

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
