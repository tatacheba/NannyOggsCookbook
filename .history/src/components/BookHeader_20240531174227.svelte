<script>
	export const recipe;
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

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2>{recipe.title}</h2>
	{/each}
</div>
