import { render, screen } from "@testing-library/react";
import RecipeGallery from "../components/RecipeGallery";
import recipes from "../data/recipes";

describe("RecipeGallery component", () => {
  test("renders the main heading", () => {
    render(<RecipeGallery />);
    expect(screen.getByText("Recipe Gallery")).toBeInTheDocument();
  });

  test("renders all recipe titles", () => {
    render(<RecipeGallery />);
    recipes.forEach((recipe) => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });

  test("renders the correct number of recipe cards", () => {
    render(<RecipeGallery />);
    const cards = screen.getAllByTestId("recipe-card");
    expect(cards).toHaveLength(recipes.length);
  });

  test("each recipe image has alt text", () => {
    render(<RecipeGallery />);
    recipes.forEach((recipe) => {
      const image = screen.getByAltText(recipe.title);
      expect(image).toBeInTheDocument();
    });
  });

  test("renders ingredient items from recipes", () => {
    render(<RecipeGallery />);
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Chicken")).toBeInTheDocument();
    expect(screen.getByText("Feta Cheese")).toBeInTheDocument();
  });

  test("does not render unrelated text", () => {
    render(<RecipeGallery />);
    expect(screen.queryByText("Chocolate Pizza")).not.toBeInTheDocument();
  });
});