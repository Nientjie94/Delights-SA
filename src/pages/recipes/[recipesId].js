// Import necessary modules and components
import { useRouter } from 'next/router';
import RecipeCard from "../../components/RecipeCard.js";
import { useState } from "react";
import { recipesList } from "./index";

function RecipesPage(props) {
    // Uncomment these lines if you want to use router from Next.js
    // const router = useRouter();
    // const [recipeStupid, setRecipesId] = useState(
    //     recipesList.find(x => x.id === router.query.recipesId)
    // )

    // Log the recipe object for debugging purposes
    console.log('recipe', /*recipeStupid*/ props.recipe)

    return (
        <>
            <div className="container">
                <div className="header">
                    {/* Render the recipe title */}
                    <h1>{/* { router.query.recipesId} */}</h1>
                </div>
                <div className="recipe-card">
                    <div className="recipe-title">{props.recipe.title}</div>
                    <div className="recipe-content">
                        <img src={props.recipe.image} alt={props.recipe.title} className="recipe-image" />
                        <div className="recipe-ingredients">
                            <h2>Ingredients:</h2>
                            <ul>
                                {props.recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="recipe-instructions">
                        <h2>Instructions:</h2>
                        <p>{props.recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// This function defines the paths for the static generation.
export async function getStaticPaths() {
    // Generate the paths for each recipe ID from the recipesList
    const paths = recipesList.map((x) => ({ params: { recipesId: x.id } }))

    return {
        // Set the generated paths
        paths,
        // Set fallback to false, which means that any path not returned by getStaticPaths will result in a 404 page.
        fallback: false
    };
}

// This function fetches the recipe data for each recipe page.
export async function getStaticProps(context) {
    console.log('context', context)
    return {
        props: {
            // Find the corresponding recipe data from recipesList using the recipe ID from the context.
            recipe: recipesList.find(x => x.id === context.params.recipesId)
        }
    }
}

export default RecipesPage;