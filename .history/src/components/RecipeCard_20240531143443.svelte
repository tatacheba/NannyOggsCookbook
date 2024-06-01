<!-- RecipeCard.svelte -->
<script>
	export let recipe;
</script>

<div class="left-page">
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
</div>

<div class="right-page">
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
</div>
