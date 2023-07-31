import React from 'react';
// import PropTypes from 'prop-types';

const RecipeCard = ({ title, ingredients, instructions, image }) => {
  return (
    <div className="recipe-card">
      {image && <img src={image} alt={title} className="recipe-image" />}
      <h2>{title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((step, index) => (
          <li key={index + 'step'}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

/*RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
};*/

export default RecipeCard;
