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

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>