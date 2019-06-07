import { Injectable,Output,EventEmitter} from '@angular/core';
import {Recipe } from './recipe';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs/Subject';
 import {ShoppingListService} from '../shopping-list/shopping-list.service';
 @Injectable()
export class RecipeService {
//  recipeSelected = new EventEmitter<Recipe>();
recipeChanges = new Subject<Recipe[]>();
private recipes:Recipe[] =[ 
  new Recipe ( 
    'Tasty Schnitzel',
    'A super tasty Schnitzel - just awesome !!!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Meat',1),
      new Ingredient('Frence Fries',20)
    ]),
    new Recipe ( 
    'Big Fat burger',
    'what else you need to say???',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ])


]; 
addIngredientsToShopList(ingredients : Ingredient[]){
  this.shopServ.addIngredients(ingredients);

}
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
  constructor(private shopServ : ShoppingListService) { 
   
    //    this.recipes.push(this.recipe);
    //  this.recipes.push(this.rcp);
  }
getRecipes(){
  console.log(this.recipes)
 return this.recipes.slice();
}
getRecipeById(id : number){
 return this.recipes[id];
}
addRecipe(recp : Recipe){
this.recipes.push(recp);
this.recipeChanges.next(this.recipes.slice());
}
updateRecipe(index:number,recp:Recipe){
this.recipes[index]=recp;
this.recipeChanges.next(this.recipes.slice());
}
DeleteRecipe(index : number){
  this.recipes.splice(index,1);
  this.recipeChanges.next(this.recipes.slice());
}
}