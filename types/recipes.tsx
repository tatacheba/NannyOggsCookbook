// types/recipes.ts
export interface Ingredient {
    name: string;
    quantity: string;
    unit?: string;
}

export interface Recipe {
    id: number;
    title: string;
    servings: string;
    ingredients: Ingredient[];
    instructions: string;
    notes?: string | undefined;
}

export interface RecipeBookProps {
    recipes: Recipe[];
    selectRecipe: (recipe: Recipe) => void;
    currentRecipe: Recipe;
}

export interface RecipeCardProps {
    recipe: Recipe;
}
// export interface RootObject {
//     recipes: Recipes[];
// }

// export interface Recipes {
//     id: string;
//     title: string;
//     servings: string;
//     src: string;
//     ingredients: Ingredients[];
//     instructions: string;
//     notes: string;
// }

// export interface Ingredients {
//     name: string;
//     src: string;
//     quantity: string;
// }