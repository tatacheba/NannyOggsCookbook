<!-- index.svelte -->
<script context="module">
	import recipesData from '../data/recipes.json';
</script>

<script>
	import RecipeBook from '../components/RecipeBook.svelte';
</script>

<RecipeBook recipes={recipesData} />
