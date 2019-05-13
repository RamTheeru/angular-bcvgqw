import { Injectable,Output,EventEmitter} from '@angular/core';
import {Recipe } from './recipe';
// @Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
private recipes:Recipe[] =[

]; 
recipe : Recipe={
name: 'A test recipe',
description:'This is a simple test.',
imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg' 
}
rcp : Recipe={
name: 'Another test recipe',
description:'This is a simple test.',
imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg' 
}
  constructor() { 
       this.recipes.push(this.recipe);
     this.recipes.push(this.rcp);
  }
getRecipes(){
 return this.recipes.slice();
}
}