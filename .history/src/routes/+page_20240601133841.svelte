<!-- +page.svelte -->
<script context="module">
	import recipesData from '../data/recipes.json';
	import BookHeader from '../components/BookHeader.svelte';
	import RecipeBook from '../components/RecipeBook.svelte';

	// Map the recipesData to match the expected structure
	let recipes = recipesData.recipes.map((recipe, index) => ({
		id: index, // Assign a unique id
		title: recipe.title,
		ingredients: recipe.ingredients.map((ingredient) => ingredient.name) // Extract only the ingredient names
	}));
</script>

<BookHeader {recipes} />
<RecipeBook {recipes} />
