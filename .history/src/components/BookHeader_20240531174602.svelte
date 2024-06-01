<script>
	// Если вы не используете `recipe` внутри компонента BookHeader.svelte, удалите его.
	// Если вы хотите экспортировать `recipe` для внешнего доступа, используйте `export const recipe` вместо `export let recipe`
	export const recipe;
</script>

<div class="book_header">
	<h1>Nanny Ogg's Cookbook</h1>
	{#each recipes as recipe}
		<h2>{recipe.title}</h2>
	{/each}
</div>
