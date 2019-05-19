import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe : Recipe ;
 @Input() recipeid : number;
  constructor(private recipeServ : RecipeService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
       //const id = this.route.snapshot.params['id'];
     this.route.params.subscribe(
      (params : Params)=>{
        this.recipeid = +params['id'];
        this.recipe = this.recipeServ.getRecipeById(this.recipeid);
        console.log(this.recipe);
      }
    )
  }
onAddToshop(){
this.recipeServ.addIngredientsToShopList(this.recipe.ingredients);
}
onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
}
}