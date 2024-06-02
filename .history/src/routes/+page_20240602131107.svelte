<!-- +page.svelte -->
<!-- 
	
 -->

<script>
	import recipesData from '../data/recipes.json';
	import BookHeader from '../components/BookHeader.svelte';
	import RecipeBook from '../components/RecipeBook.svelte';

	// Загружаем рецепты из файла JSON
	let recipes = recipesData.recipes;
	let currentRecipe = recipes[0]; // Устанавливаем первый рецепт как текущий

	// Функция для выбора рецепта
	function selectRecipe(recipe) {
		currentRecipe = recipe;
	}
</script>

<!-- Передаем данные и функции в дочерние компоненты -->
<BookHeader {recipes} {selectRecipe} />
<RecipeBook {recipes} {currentRecipe} {selectRecipe} />
