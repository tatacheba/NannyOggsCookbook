<script lang="ts">
	import recipesData from '../data/recipes.json';
	import BookHeader from '../components/BookHeader.svelte';
	import RecipeBook from '../components/RecipeBook.svelte';

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

	function selectRecipe(recipe) {
		currentRecipe = recipe;
	}
</script>

<div class="background-image"></div>
<BookHeader {recipes} {selectRecipe} {currentRecipe} />
<RecipeBook {recipes} {currentRecipe} {selectRecipe} />
