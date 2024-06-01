<!-- Recipes.svelte -->

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const recipes = writable([]);

  onMount(async () => {
    try {
      const response = await fetch('/api/recipes');
      if (!response.ok) {
        throw new Error('Failed to load recipes');
      }
      const data = await response.json();
      recipes.set(data);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<h1>Recipes</h1>

{#each $recipes as recipe}
  <div>{recipe.name}</div>
{/each}
