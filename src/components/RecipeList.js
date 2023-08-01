import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard.module.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default RecipeList;
