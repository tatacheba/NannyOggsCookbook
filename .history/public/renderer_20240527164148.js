// public/renderer.js

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/api/recipes");
    const recipes = await response.json();

    const contentDiv = document.getElementById("content");
    recipes.forEach((recipe) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.innerHTML = `<h2>${recipe.title}</h2><p>${recipe.servings}</p>`;
        contentDiv.appendChild(recipeDiv);
    });
});
