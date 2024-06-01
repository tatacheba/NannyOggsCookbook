<!-- index.svelte
<script context="module">
	import recipesData from '../data/recipes.json';
</script>

<script>
	import RecipeBook from '../components/RecipeBook.svelte';
</script>

<RecipeBook recipes={recipesData} /> -->

<!-- Ваша страница, например, index.svelte -->
<script context="module">
	import recipesData from '../data/recipes.json';
</script>

<script>
	import RecipeSlider from '../components/RecipeSlider.svelte';

	// Передайте массив рецептов в компонент RecipeSlider
	let recipes = recipesData.recipes;
</script>

<RecipeSlider {recipes} />
