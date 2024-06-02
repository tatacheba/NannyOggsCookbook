<!-- +page.svelte -->

<script lang="ts">
	import recipesData from '../data/recipes.json';
	import BookHeader from '../components/BookHeader.svelte';
	import RecipeBook from '../components/RecipeBook.svelte';

	// Загружаем рецепты из файла JSON
	// let recipes = recipesData.recipes;
	let recipes = recipesData.recipes.map((recipe, index) => ({
		id: index,
		title: recipe.title,
		servings: recipe.servings,
		ingredients: recipe.ingredients.map((ingredient) => ({
			name: ingredient.name,
			quantity: ingredient.quantity,
			unit: ingredient.unit
		})),
		instructions: recipe.instructions,
		notes: recipe.notes
	}));
	let currentRecipe = recipes[0]; // Устанавливаем первый рецепт как текущий

	// Функция для выбора рецепта
	function selectRecipe(recipe) {
		currentRecipe = recipe;
		console.log(recipe);
	}
</script>

<!-- Передаем данные и функции в дочерние компоненты -->
<BookHeader {recipes} {selectRecipe} />
<RecipeBook {recipes} {currentRecipe} {selectRecipe} />
