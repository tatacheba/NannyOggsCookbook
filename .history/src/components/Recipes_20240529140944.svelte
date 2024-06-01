<!-- Recipe.svelte -->
<!-- RecipeCard.svelte -->
<script>
	export let recipe;
</script>

<div>
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
	<!-- Добавьте отображение ингредиентов и инструкций по желанию -->
</div>

<style>
	/* Стили для компонента */
</style>
