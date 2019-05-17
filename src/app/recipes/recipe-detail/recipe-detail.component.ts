import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe : Recipe ;
  constructor(private recipeServ : RecipeService) { }

  ngOnInit() {
  }
onAddToshop(){
this.recipeServ.addIngredientsToShopList(this.recipe.ingredients);
}
}