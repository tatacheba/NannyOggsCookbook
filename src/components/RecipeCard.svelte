<script>
	export let recipe;

	/**
	 * Truncate text to a specified length and add ellipsis if truncated.
	 * @param {string} text - The text to be truncated.
	 * @param {number} [maxLength=370] - The maximum length of the text.
	 * @return {string} The truncated text with ellipsis if it exceeds maxLength.
	 */
	// function truncateText(text, maxLength = 370) {
	// 	if (text.length > maxLength) {
	// 		return text.substring(0, maxLength) + '...';
	// 	}
	// 	return text;
	// }
</script>

<div class="book">
	<div class="left-page">
		<h2>{recipe.title}</h2>
		<p>(Servings: {recipe.servings})</p>
		<h3>Ingredients</h3>
		<ul>
			{#each recipe.ingredients as ingredient}
				<li>
					<b>{ingredient.quantity} {ingredient.unit ? ingredient.unit : ''}</b>
					{ingredient.optional ? '(optional)' : ''}
				</li>
			{/each}
		</ul>
	</div>

	<div class="right-page">
		<h2>Instructions</h2>
		<ol>
			{#each recipe.instructions as instruction}
				<!-- <li>{truncateText(instruction)}</li> -->
			{/each}
		</ol>
		<h3>Notes</h3>
		<ul>
			{#each recipe.notes as note}
				<!-- <li>{truncateText(note)}</li> -->
			{/each}
		</ul>
	</div>
</div>

<style>
	.book {
		background: url('../book.png') no-repeat center center;
		background-size: contain; /* Сохраняет пропорции изображения */
		width: 80vw; /* Задать фиксированную ширину */
		height: 70vh; /* Задать фиксированную высоту */
		padding: 20px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
		box-sizing: border-box;
	}

	.left-page,
	.right-page {
		padding: 20px;
		box-sizing: border-box;
		overflow-y: auto; /* Добавляет прокрутку если контент превышает размер страницы */
	}

	.left-page h2,
	.right-page h2 {
		margin-top: 0;
	}

	/* Текстовые стили */
	ul,
	ol {
		margin: 0;
		padding-left: 20px;
		overflow: hidden; /* Скрывает переполнение */
		text-overflow: ellipsis; /* Добавляет троеточие */
		white-space: nowrap; /* Не переносит текст */
	}

	ul {
		list-style-type: disc;
	}

	ol {
		list-style-type: decimal;
	}

	/* Для li элементов */
	li {
		overflow: hidden; /* Скрывает переполнение */
		text-overflow: ellipsis; /* Добавляет троеточие */
		white-space: nowrap; /* Не переносит текст */
	}
</style>
