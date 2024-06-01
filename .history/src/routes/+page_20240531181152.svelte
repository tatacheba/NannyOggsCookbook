<script context="module">
	import recipesData from '../data/recipes.json';

	import BookHeader from '../components/BookHeader.svelte';
	import RecipeBook from '../components/RecipeBook.svelte';

	// Передайте массив рецептов в компонент RecipeBook
	let recipes = recipesData.recipes;
</script>

<BookHeader {recipes} />
<RecipeBook {recipes} />
