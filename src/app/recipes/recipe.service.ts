import { Injectable,Output,EventEmitter} from '@angular/core';
import {Recipe } from './recipe';
import {Ingredient} from '../shared/ingredient';
// import {ShoppingListService} from '../shopping-list/shopping-list.service';
// @Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
private recipes:Recipe[] =[ 
  new Recipe ( 
    'Tasty Scnitzel',
    'A super tasty Schnitzel - just awesome !!!',
    'https://upload.wikimedia.org/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Meat',1),
      new Ingredient('Frence Fries',20)
    ]),
    new Recipe ( 
    'big Fat burger',
    'what else you need to say???',
    'https://upload.wikimedia.org/commons/b/be/Burger_King_Angus_bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ])


]; 
ingredients : Ingredient[];
// recipe : Recipe={
// name: 'A test recipe',
// description:'This is a simple test.',
// imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg' ,
// ingredients : this.ingredients
// }
// rcp : Recipe={
// name: 'Another test recipe',
// description:'This is a simple test.',
// imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg',[] 
// }
  constructor(private shopService : ShoppingListService) { 
    this.ingredients = this.shopService.getIngredients();
       this.recipes.push(this.recipe);
     this.recipes.push(this.rcp);
  }
getRecipes(){
 return this.recipes.slice();
}
}