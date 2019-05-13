import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


recipes:Recipe[] ;
  constructor(private recipeService : RecipeService) {
    // this.recipes.push(this.recipe);
    //  this.recipes.push(this.rcp);
   }
//    onRecipeSelected(recipe : Recipe)
//    {
//     this.recipeService.recipeSelected.emit(recipe);
//  // this.recipewasselected.emit(recipe);

//    }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}