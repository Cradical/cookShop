import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'A different Recipe',
      'Another description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsweetandsavorymeals.com%2Fwp-content%2Fuploads%2F2019%2F01%2FBest-Meatloaf-Recipe-4.jpg&f=1&nofb=1',
      [new Ingredient('meat', 1), new Ingredient('cheese', 2)]
    ),
    new Recipe(
      'A New Recipe',
      'A simple description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsweetandsavorymeals.com%2Fwp-content%2Fuploads%2F2019%2F01%2FBest-Meatloaf-Recipe-4.jpg&f=1&nofb=1',
      [new Ingredient('sauce', 2), new Ingredient('lettuce', 3)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
