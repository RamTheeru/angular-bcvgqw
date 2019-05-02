import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipewasselected = new EventEmitter<Recipe>();
recipes:Recipe[] =[

]; 
recipe : Recipe={
name: 'A test recipe',
description:'This is a simple test.',
imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg' 
}
rcp : Recipe={
name: 'A test recipe',
description:'This is a simple test.',
imagePath :'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg' 
}

  constructor() {
    this.recipes.push(this.recipe);
     this.recipes.push(this.rcp);
   }
   onRecipeSelected(recipe : Recipe)
   {
    
  this.recipewasselected.emit(recipe);

   }

  ngOnInit() {
  }

}