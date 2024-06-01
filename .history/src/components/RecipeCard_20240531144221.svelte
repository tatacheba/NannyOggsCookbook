<!-- RecipeCard.svelte -->
<script>
	export let recipe;
</script>

<div class="left-page">
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
	<h4>ingredients:{recipe.ingredients.name}</h4>
</div>

<div class="right-page">
	<h2>{recipe.instructions.title}</h2>
	<p>Servings: {recipe.servings}</p>
</div>
