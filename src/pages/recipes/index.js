import Head from 'next/head'
import styles from '../../syles/Home.module.css'
import Link from 'next/link'
import { Fragment } from "react";

// An array containing dessert recipe objects
export const recipesList = [
    // Recipe 1: Milktart
    {
        id: 'milktart-recipe',
        title: 'Milktart',
        image: 'https://i.pinimg.com/564x/6e/38/54/6e3854dc81b843ee5d7bf0141d5c10e2.jpg',
        description: 'A South African dessert consisting of a creamy custard filling flavored with cinnamon, poured into a pastry crust, and dusted with cinnamon on top.,',
        ingredients: [
            '1 cup milk',
            '1/2 cup cream',
            '1/4 cup condensed milk',
            '1/4 cup Amarula cream liqueur (optional)',
            '1/2 teaspoon vanilla extract',
            'Ground cinnamon, for garnish', 
        ],
        instructions: [
            'In a saucepan, heat the milk and cream over medium heat until it starts to simmer.',
            'Add the condensed milk and stir until well combined.',
            'Remove from the heat and let it cool to room temperature.',
            'Stir in the Amarula cream liqueur (if using) and vanilla extract.',
            'Pour the mixture into shot glasses and refrigerate until chilled.',
            'Before serving, garnish with ground cinnamon for an elegant touch.',      
        ]
    },
    {
        id: 'koeksisters-recipe',
        title: 'Koeksusters',
        image: 'https://i.pinimg.com/564x/a8/84/53/a884530c10a6ccf66ce315c7e44d5227.jpg',
        description: 'A traditional South African sweet treat made from fried dough, soaked in syrup, and braided into a twisted shape, offering a sticky and delightful indulgence.',
        ingredients: [
            '4 cups all-purpose flour',
            '1/2 cup milk',
            '1/2 cup water',
            '2 tablespoons butter',
            '2 tablespoons sugar',
            '1 packet (7g) instant yeast',
            'Pinch of salt',
            'Oil, for frying',
       
        ],
        instructions: [
            'Mix the crushed biscuits and melted butter in a bowl until well combined.',
            'Press the biscuit mixture into the base of a greased springform pan to form the crust.',
            'Chill in the refrigerator for about 15 minutes.',
            'In a separate bowl, beat the cream cheese and powdered sugar until smooth.',
            'Gradually add the Amarula cream liqueur to the cream cheese mixture, mixing well.',
            'Fold in the whipped cream until everything is evenly combined.',
            'Pour the filling over the chilled crust and smooth the top with a spatula.',
            'Refrigerate the cheesecake for at least 4 hours or until set.',
            'Serve chilled, and you can garnish with chocolate shavings or fresh fruit if desired.',      
        ]
    },
    {
        id: 'Peppermint-Crisp-recipe',
        title: 'Peppermint Crisp',
        image: 'https://i.pinimg.com/564x/a4/b2/71/a4b2718876dae62229bca36f608f7b7b.jpg',
        description: 'A classic South African dessert featuring layers of Tennis biscuits, whipped cream, and caramelized condensed milk, topped with peppermint chocolate for a refreshing and satisfying treat.',
        ingredients: [
            '1 1/2 cups crushed digestive biscuits or graham crackers',
            '1/4 cup melted butter',
            '2 cups cream cheese',
            '1 cup powdered sugar',
            '1 cup Amarula cream liqueur',
            '1 cup heavy cream, whipped to stiff peaks', 
        ],
        instructions: [
            'Mix the crushed biscuits and melted butter in a bowl until well combined.',
            'Press the biscuit mixture into the base of a greased springform pan to form the crust.',
            'Chill in the refrigerator for about 15 minutes.',
            'In a separate bowl, beat the cream cheese and powdered sugar until smooth.',
            'Gradually add the Amarula cream liqueur to the cream cheese mixture, mixing well.',
            'Fold in the whipped cream until everything is evenly combined.',
            'Pour the filling over the chilled crust and smooth the top with a spatula.',
            'Refrigerate the cheesecake for at least 4 hours or until set.',
            'Serve chilled, and you can garnish with chocolate shavings or fresh fruit if desired.',      
        ]
    },
    {
        id: 'malva-pudding-recipe',
        title: 'Malva Pudding',
        image: 'https://i.pinimg.com/564x/ab/70/69/ab7069454ecb91b4e90595babc94ce67.jpg',
        description: 'A rich and moist South African dessert made with apricot jam, served warm and drenched in a sticky toffee sauce, providing a comforting and decadent culinary experience.',
        ingredients: [
            '1 cup all-purpose flou',
            '1 cup granulated sugar',
            '1 tablespoon apricot jam',
            '1 teaspoon baking soda',
            '1 large egg',
            '1 tablespoon butter, melted',
            '1 cup milk',
            '1 tablespoon vinegar',
            'Pinch of salt',
            'For the Sauce:',

            '1 cup heavy cream',
            '1 cup granulated sugar',
            '1/2 cup butter',
            '1/2 cup hot water', 
        ],
        instructions: [
            'Preheat the oven to 350°F (175°C) and grease a baking dish.',
            'In a large mixing bowl, mix the flour, sugar, and salt.',
            'In a separate bowl, whisk the egg, melted butter, apricot jam, milk, and vinegar.',
            'Combine the wet and dry ingredients and mix well.',
            'Dissolve the baking soda in a little hot water and add it to the mixture.',
            'Pour batter into greased dish, bake 30-35 minutes until golden and cooked.',
            'Bake pudding, heat and combine sauce ingredients until sugar dissolves.',
            'Pour hot sauce over pudding immediately after baking, let it soak in.',
            'Pour hot sauce over pudding immediately after baking, let it soak in.',
            'Serve the warm Malva Pudding with custard or vanilla ice cream.,'
        ]
    },

]

// Component for displaying the recipe selection page
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
