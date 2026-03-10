import recipes from "../data/recipes";

export default function RecipeGallery() {
  return (
    <section className="gallery-section">
      <h1>Recipe Gallery</h1>
      <p className="subtitle">A curated list of delicious recipes rendered with React.</p>

      <div className="gallery-grid">
        {recipes.map((recipe) => (
          <article className="recipe-card" key={recipe.id} data-testid="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />

            <div className="recipe-content">
              <h2>{recipe.title}</h2>
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={`${recipe.id}-${index}`}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}