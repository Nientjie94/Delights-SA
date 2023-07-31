import Head from 'next/head'
import styles from '../../syles/Home.module.css'
import Link from 'next/link'
import { Fragment } from "react";

export const recipesList = [
    {
        id: 'milktart-recipe',
        title: 'Milktart',
        image: 'https://i.pinimg.com/564x/6e/38/54/6e3854dc81b843ee5d7bf0141d5c10e2.jpg',
        description: 'A South African dessert consisting of a creamy custard filling flavored with cinnamon, poured into a pastry crust, and dusted with cinnamon on top.,',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        instructions: ['step one','step two']
    },
    {
        id: 'koeksisters-recipe',
        title: 'Koeksusters',
        image: 'https://i.pinimg.com/564x/a8/84/53/a884530c10a6ccf66ce315c7e44d5227.jpg',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        description: 'A traditional South African sweet treat made from fried dough, soaked in syrup, and braided into a twisted shape, offering a sticky and delightful indulgence.',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        instructions: ['step one','step two']
    },
    {
        id: 'Peppermint-Crisp-recipe',
        title: 'Peppermint Crisp',
        image: 'https://i.pinimg.com/564x/a4/b2/71/a4b2718876dae62229bca36f608f7b7b.jpg',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        description: 'A classic South African dessert featuring layers of Tennis biscuits, whipped cream, and caramelized condensed milk, topped with peppermint chocolate for a refreshing and satisfying treat.',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        instructions: ['step one','step two']
    },
    {
        id: 'malva-pudding-recipe',
        title: 'Malva Pudding',
        image: 'https://i.pinimg.com/564x/ab/70/69/ab7069454ecb91b4e90595babc94ce67.jpg',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        description: 'A rich and moist South African dessert made with apricot jam, served warm and drenched in a sticky toffee sauce, providing a comforting and decadent culinary experience.',
        ingredients:['ingred1', 'ingred2', 'ingred3', 'ingred4', 'ingred5', ],
        instructions: ['step one','step two']
    },

]

export default function RecipesSelection() {
    return (
        <Fragment>
        <div className={styles.container}>
            <Head>
                <title>Delights SA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Delights SA -
                </h1>

                <p className={styles.description}>
                    Please select your desired dessert recipe.
                </p>

                <div className={styles.grid}>
                    {
                        recipesList.map(
                            (x, i) =>
                                <Link id={'re' + i}  href={'/recipes/' + x.id} className={styles.card}>
                                    <h3>{x.title} </h3>
                                    <p>{x.description}</p>
                                </Link>
                        )
                    }
                </div>
            </main>

            <footer className={styles.footer}>
                <a>
                    Developed by Kenneth || Janine
                </a>
            </footer>
        </div>
        </Fragment>
    )
}
