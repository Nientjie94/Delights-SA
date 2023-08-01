import React from 'react';
// import PropTypes from 'prop-types';

// RecipeCard component: Displays the details of a recipe
const RecipeCard = ({ title, ingredients, instructions, image }) => {
  return (
    <div className="recipe-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      {/* Display the recipe image if available */}
      {image && <img src={image} alt={title} className="recipe-image" />}
      {/* Display the recipe title */}
      <h2>{title}</h2>
      {/* Display the ingredients */}
      <h3>Ingredients:</h3>
      <ul>
        {/* Loop through ingredients and display each one as a list item */}
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* Display the instructions */}
      <h3>Instructions:</h3>
      <ol>
        {/* Loop through instructions and display each one as a numbered list item */}
        {instructions.map((step, index) => (
          <li key={index + 'step'}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

// Prop types validation (commented out for this example)
/*RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
};*/

export default RecipeCard;
