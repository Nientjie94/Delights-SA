import { useRouter } from 'next/router';
import RecipeCard from "../../components/RecipeCard.js";
import {useState} from "react";
import {recipesList} from "./index";

function RecipesPage(props) {
    /*const router = useRouter();
    const [recipeStupid, setRecipesId] = useState(
        recipesList.find(x => x.id === router.query.recipesId)
    )*/
    console.log('recipe', /*recipeStupid*/ props.recipe)

    // router.query.recipesId;

    return (
        <>
            <h1>{/* { router.query.recipesId} */}</h1>
            <RecipeCard image={props.recipe.image} ingredients={props.recipe.ingredients} instructions={props.recipe.instructions} title={props.recipe.title} />
        </>

    )
}

export async function getStaticPaths() {

    const paths = recipesList.map((x) => ({params: {recipesId: x.id}}))

    return {
        paths,
        // See the fallback section below
        fallback: false
    };
}

export async function getStaticProps(context) {
    console.log('context', context)
    return {props: {
            recipe: recipesList.find(x => x.id === context.params.recipesId)
        }}
}

export default RecipesPage;
