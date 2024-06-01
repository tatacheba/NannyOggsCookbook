<!-- Recipe.svelte -->
<script>
	export let recipe;
</script>

<div>
	<div class="page left-page">
		<h2>Deep-Sea Blowfish (The Easy Version – not requiring years of training)</h2>
		<p>Servings: 2 as a starter</p>
	</div>
</div>
<div class="page right-page">
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
</div>

<style>
</style>
