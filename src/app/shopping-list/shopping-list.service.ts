import { Injectable,EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs/Subject';
// @Injectable()
export class ShoppingListService {
  //ingredientAddedd = new EventEmitter<Ingredient[]>();
  ingredientAddedd = new Subject<Ingredient[]>();
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
  this.ingredientAddedd.next(this.ingredients.slice());
}
addIngredients(ingredients : Ingredient[]){
// for(let ing of ingredients){
// this.addIngredient(ing);
// }
this.ingredients.push(...ingredients);
this.ingredientAddedd.next(this.ingredients.slice());
}
}