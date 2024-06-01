<!-- Recipe.svelte -->
<script>
	export let recipe;
</script>

<div>
	<h2>{recipe.title}</h2>
	<p>Servings: {recipe.servings}</p>
	<!-- Добавьте отображение ингредиентов и инструкций по желанию -->
</div>

<style>
	<div class="page left-page">
		<!-- Содержимое левой страницы -->
		<h2>Deep-Sea Blowfish (The Easy Version – not requiring years of training)</h2>
		<p>Servings: 2 as a starter</p>
		<!-- Дополнительное содержимое -->
	</div>
	<div class="page right-page">
		<!-- Содержимое правой страницы -->
	</div>
</style>
