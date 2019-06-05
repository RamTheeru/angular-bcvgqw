import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 id : number;
 editMode = false;
 recipeForm : FormGroup;
  constructor(private route : ActivatedRoute,private recpServ : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
            this.id=+params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
      }
    )
  }
  private initForm(){
   
    let recipeName='';
    let recipeImgPath = '';
   let recpDesc = '';
    if(this.editMode)
    {
       const recp = this.recpServ.getRecipeById(this.id);
      recipeName = recp.name;
      recipeImgPath=recp.imagePath;
      recpDesc=recp.description;
    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(recipeImgPath),
      'description':new FormControl(recpDesc)
    })

  }

}