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

<style>
	.left-page,
	.right-page {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;
		transition: transform 0.5s ease;
		background-color: #f0f0f0;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.left-page {
		background-color: #f0f0f0;
		transform-origin: right;
	}

	.right-page {
		background-color: #e0e0e0;
		transform-origin: left;
		/* transform: rotateY(-180deg); */
	}

	h1,
	h2,
	h3 {
		font-family: 'Copperplate', fantasy;
		color: #8b4513;
	}

	p {
		font-size: 16px;
		line-height: 1.6;
	}
</style>
