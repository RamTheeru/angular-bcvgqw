import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipe : Recipe;
  constructor( private recipeService : RecipeService) { }
// recipeselected(recp){
// console.log(recp);
// this.selectedRecipe=recp;
// }
  ngOnInit() {
//     this.recipeService.recipeSelected.subscribe(
// (recipe : Recipe )=>{this.selectedRecipe=recipe;}
//     );
  }


}