import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChnaged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2.jpg',
      [new Ingredient('banan', 2), new Ingredient('milk', 2)]
    ),
    new Recipe(
      'A test recipe',
      'This isfdfsfds just a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2.jpg',
      [new Ingredient('banan', 2), new Ingredient('milk', 2)]
    ),
    new Recipe(
      'A test fdsfsfrecipe',
      'This issdfdsß just a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2.jpg',
      [new Ingredient('banan', 2), new Ingredient('milk', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChnaged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChnaged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChnaged.next(this.recipes.slice());
  }
}
