<script>
	export let recipe;
	// Функция для обрезки текста до 370 символов
	function truncateText(text, maxLength = 370) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
</script>

<div class="book">
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
</div>
