// types/recipes.ts
export interface Ingredient {
    name: string;
    quantity: string | number;
    unit?: string | null | undefined;
}

export interface Recipe {
    id: number;
    title: string;
    servings: number | string;
    ingredients: Ingredient[];
    instructions: string;
    notes: string | string[];
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
