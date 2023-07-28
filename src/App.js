import React from 'react';
import RecipeList from './components/RecipeList';

const recipes = [
  {
    title: 'Koeksisters',
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
      'Press the biscuit mixture into the base of a greased springform pan to form the crust. Chill in the refrigerator for about 15 minutes.',
      'In a separate bowl, beat the cream cheese and powdered sugar until smooth.',
      'Gradually add the Amarula cream liqueur to the cream cheese mixture, mixing well.',
      'Fold in the whipped cream until everything is evenly combined.',
      'Pour the filling over the chilled crust and smooth the top with a spatula.',
      'Refrigerate the cheesecake for at least 4 hours or until set.',
      'Serve chilled, and you can garnish with chocolate shavings or fresh fruit if desired.',
    ],
    // Add the image file name or URL if available.
  },
  {
    title: 'Melktart Shooters',
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
    ],
    // Add the image file name or URL if available.
  },
  {
    title: 'Milk Tart',
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '1/2 cup butter, softened',
      '1/4 cup granulated sugar',
      '1 large egg',
      '4 cups milk',
      '1/2 cup granulated sugar',
      '2 tablespoons butter',
      '3 large eggs',
      '2 tablespoons all-purpose flour',
      '2 tablespoons cornstarch',
      '1 teaspoon vanilla extract',
      'Ground cinnamon',
    ],
    instructions: [
      'Preheat the oven to 375°F (190°C) and grease a tart or pie dish.',
      'To make the pastry crust, mix the flour, butter, sugar, and egg until you have a smooth dough.',
      'Press the dough into the greased dish, covering the bottom and sides.',
      'For the filling, heat the milk, sugar, and butter in a saucepan until it almost boils.',
      'In a separate bowl, whisk together the eggs, flour, cornstarch, and vanilla extract.',
      'Slowly pour the egg mixture into the hot milk mixture, stirring constantly to avoid curdling.',
      'Return the mixture to the heat and cook until it thickens, stirring continuously.',
      'Pour the custard into the prepared crust.',
      'Sprinkle the top of the tart with ground cinnamon.',
      'Bake in the preheated oven for about 25-30 minutes or until the tart is set and the crust is golden.',
      'Allow the milk tart to cool before serving. Serve at room temperature or chilled.',
    ],
    // Add the image file name or URL if available.
  },
  {
    title: 'Amarula Cheesecake',
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
      'Press the biscuit mixture into the base of a greased springform pan to form the crust. Chill in the refrigerator for about 15 minutes.',
      'In a separate bowl, beat the cream cheese and powdered sugar until smooth.',
      'Gradually add the Amarula cream liqueur to the cream cheese mixture, mixing well.',
      'Fold in the whipped cream until everything is evenly combined.',
      'Pour the filling over the chilled crust and smooth the top with a spatula.',
      'Refrigerate the cheesecake for at least 4 hours or until set.',
      'Serve chilled, and you can garnish with chocolate shavings or fresh fruit if desired.',
    ],
    // Add the image file name or URL if available.
  },
  // Add more recipes here...
];

const App = () => {
  return (
    <div>
      <h1>Delicious Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
