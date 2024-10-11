// components/RecipeCard.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import { RecipeCardProps } from "../types/recipes";

const mockRecipe = {
  id: 1,
  title: "Test Recipe",
  servings: "4",
  ingredients: [
    {
      name: "Ingredient 1",
      quantity: "2",
      unit: "cups",
    },
    {
      name: "Ingredient 2",
      quantity: "1",
      unit: "tablespoon",
    },
  ],
  instructions: "Mix all ingredients together.",
  notes: "This is a test note.",
};

describe("RecipeCard Component", () => {
  it("renders recipe title and servings", () => {
    render(<RecipeCard recipe={mockRecipe} />);

    expect(screen.getByText(/Test Recipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Servings: 4/i)).toBeInTheDocument();
  });

  it("renders ingredients list", () => {
    render(<RecipeCard recipe={mockRecipe} />);

    expect(screen.getByText(/Ingredient 1/i)).toBeInTheDocument();
    expect(screen.getByText(/2 cups/i)).toBeInTheDocument();
    expect(screen.getByText(/Ingredient 2/i)).toBeInTheDocument();
    expect(screen.getByText(/1 tablespoon/i)).toBeInTheDocument();
  });

  it("renders instructions", () => {
    render(<RecipeCard recipe={mockRecipe} />);

    expect(
      screen.getByText(/Mix all ingredients together/i),
    ).toBeInTheDocument();
  });

  it("renders notes if present", () => {
    render(<RecipeCard recipe={mockRecipe} />);

    expect(screen.getByText(/This is a test note/i)).toBeInTheDocument();
  });

  it("does not render notes if not present", () => {
    const { rerender } = render(
      <RecipeCard recipe={{ ...mockRecipe, notes: undefined }} />,
    );
    expect(screen.queryByText(/Notes/i)).not.toBeInTheDocument();
  });
});
