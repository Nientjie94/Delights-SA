import { useRouter } from 'next/router';

function RecipesPage() {
    const router = useRouter();

    router.query.recipesId;

    return <h1> Recipes list { router.query.recipesId} </h1>
}

export default RecipesPage;
