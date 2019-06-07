import { Component, OnInit,EventEmitter,Output,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router,ActivatedRoute} from '@angular/router';
import {Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
subsc : Subscription;

recipes:Recipe[] ;
  constructor(private recipeService : RecipeService,private router : Router,private route : ActivatedRoute) {
    // this.recipes.push(this.recipe);
    //  this.recipes.push(this.rcp);
   }
//    onRecipeSelected(recipe : Recipe)
//    {
//     this.recipeService.recipeSelected.emit(recipe);
//  // this.recipewasselected.emit(recipe);

//    }
OnNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route});
}
  ngOnInit() {
this.subsc= this.recipeService.recipeChanges.subscribe(
   (recipes:Recipe[])=>{
    this.recipes=recipes;
   }
 );
    this.recipes = this.recipeService.getRecipes();
       console.log(this.recipes);
  }
  ngOnDestroy(){
    this.subsc.unsubscribe();
  }

}