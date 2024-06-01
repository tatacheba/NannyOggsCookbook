<script>
	export let recipe;
	/**
	 * Truncate text to a specified length and add ellipsis if truncated.
	 * @param {string} text - The text to be truncated.
	 * @param {number} [maxLength=370] - The maximum length of the text.
	 * @return {string} The truncated text with ellipsis if it exceeds maxLength.
	 */
	function truncateText(text, maxLength = 370) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
</script>

<div class="left-page">
	<h2>{recipe.title}</h2>
	<p>(Servings: {recipe.servings})</p>
	<h3>Ingredients</h3>
	<ul>
		{#each recipe.ingredients as ingredient}
			<li>
				<b
					>{ingredient.quantity}
					{ingredient.unit ? ingredient.unit : ''}</b
				>
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
			<li>{truncateText(instruction)}</li>
		{/each}
	</ol>
	<h3>Notes</h3>
	<ul>
		{#each recipe.notes as note}
			<li>{truncateText(note)}</li>
		{/each}
	</ul>
</div>
