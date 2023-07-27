import React from 'react';
import './App.css';

// Sample recipe data (you can replace this with your own recipes)
const recipes = [
  {
    title: 'Koeksisisters',
    ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan cheese', 'Black pepper'],
    instructions: 'Boil spaghetti; Mix eggs, parmesan cheese, and black pepper; Fry bacon and add it to the mixture; Mix everything with spaghetti.'
  },
  {
    title: 'Caesar Salad',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
    instructions: 'Tear lettuce into bite-size pieces; Add croutons and parmesan cheese; Toss with Caesar dressing.'
  }
];

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Delicious Recipes</h1>
      </header>
      <main>
        <div className="recipe-container">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
