import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Recipe} from '../.././recipe';
import {RecipeService} from '../.././recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit { 
 @Input() recipe : Recipe;
id : number;
  constructor(private recipeService : RecipeService,
  private route : ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
     this.route.params.subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }

}