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
