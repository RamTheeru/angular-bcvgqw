import { Injectable,EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
// @Injectable()
export class ShoppingListService {
  ingredientAddedd = new EventEmitter<Ingredient[]>();
private ingredients:Ingredient[]=[
  new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
];
  constructor() { }
getIngredients(){
return this.ingredients.slice();
}
addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientAddedd.emit(this.ingredients.slice());
}
addIngredients(ingredients : Ingredient[]){
// for(let ing of ingredients){
// this.addIngredient(ing);
// }
this.ingredients.push(...ingredients);
this.ingredientAddedd.emit(this.ingredients.slice());
}
}