<!-- RecipeBook.svelte -->
<script>
	import RecipeCard from './RecipeCard.svelte';

	export let recipes;
	let currentIndex = 0;

	function nextRecipe() {
		currentIndex = (currentIndex + 1) % recipes.length;
	}

	function previousRecipe() {
		currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
	}
</script>

<div class="book">
	<button class="button button-left" on:click={previousRecipe}>&lt;</button>
	<RecipeCard recipe={recipes[currentIndex]} />
	<button class="button button-right" on:click={nextRecipe}>&gt;</button>
</div>

<style>
	body {
		background: url('fantasy-background.jpg') no-repeat center center fixed;
		background-size: cover;
		font-family: 'Papyrus', fantasy;
		color: #fff;
	}

	.book {
		width: 800px;
		margin: 50px auto;
		padding: 20px;
		background: rgba(255, 255, 255, 0.8);
		border: 2px solid #8b4513;
		border-radius: 15px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
		position: relative;
		display: flex;
	}

	.button-left,
	.button-right {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(139, 69, 19, 0.7);
		color: #fff;
		border: none;
		padding: 10px 20px;
		font-size: 18px;
		cursor: pointer;
		border-radius: 10px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
		transition:
			background 0.3s,
			transform 0.3s;
		z-index: 10;
	}

	.button-left {
		left: -70px;
	}

	.button-right {
		right: -70px;
	}

	.button-left:hover,
	.button-right:hover {
		background: rgba(139, 69, 19, 0.9);
		transform: translateY(-50%) scale(1.1);
	}
</style>
