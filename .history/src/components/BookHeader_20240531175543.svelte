<!-- BookHeader.svelte -->
<script>
    export let recipes;
    // Создаем переменную, чтобы отслеживать текущий выбранный рецепт
    let selectedRecipe;
</script>

<div class="book_header">
    <h1>Nanny Ogg's Cookbook</h1>
    {#each recipes as recipe}
        <!-- Добавляем обработчик событий для клика на название рецепта -->
        <h2 on:click={() => selectedRecipe = recipe}>{recipe.title}</h2>
    {/each}
</div>

<!-- Передаем выбранный рецепт в компонент Book -->
<Book {recipe: selectedRecipe} />
