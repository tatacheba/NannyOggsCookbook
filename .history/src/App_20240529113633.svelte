<script>
  import { onMount } from 'svelte';

  let recipes = [];

  onMount(async () => {
    const response = await fetch('/api/recipes');
    recipes = await response.json();
  });
</script>

<main>
  <h1>Recipe List</h1>
  <ul>
    {#each recipes as recipe}
      <li>{recipe.name}</li>
    {/each}
  </ul>
</main>

<style>
 h1 {color: brown;}
</style>
