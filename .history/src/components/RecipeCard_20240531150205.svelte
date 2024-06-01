<!-- RecipeCard.svelte -->
<script>
	export let recipe;
</script>

<div class="book">
	<div class="left-page">
		<h2>{recipe.title}</h2>
		<p>Servings: {recipe.servings}</p>
		<h3>Ingredients</h3>
		<ul>
			{#each recipe.ingredients as ingredient}
				<li>
					{ingredient.quantity}
					{ingredient.unit ? ingredient.unit : ''}
					{ingredient.name}
					{ingredient.optional ? '(optional)' : ''}
				</li>
			{/each}
		</ul>
	</div>

	<div class="right-page">
		<h2>Instructions</h2>
		<ol>
			{#each recipe.instructions as instruction}
				<li>{instruction}</li>
			{/each}
		</ol>
		<h3>Notes</h3>
		<ul>
			{#each recipe.notes as note}
				<li>{note}</li>
			{/each}
		</ul>
	</div>
</div>
