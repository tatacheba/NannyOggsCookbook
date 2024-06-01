<script>
	// Экспортируем переменную recipes из главного файла
	export let recipes;
</script>

// BookHeader.svelte

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2>{recipe.title}</h2>
	{/each}
</div>
