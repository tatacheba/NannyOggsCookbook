<script>
  import { onMount } from 'svelte';

  let recipes = [];

  onMount(async () => {
    const response = await fetch('/api/recipes');
    recipes = await response.json();
  });
</script>

<ul>
  {#each recipes as recipe}
    <li>{recipe.name}</li>
  {/each}
</ul>
