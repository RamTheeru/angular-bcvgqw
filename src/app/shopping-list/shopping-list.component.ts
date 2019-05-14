import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
// providers :[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
ingredients :Ingredient[];
  constructor(private shopService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.shopService.ingredientAddedd.subscribe(
      (ingredients : Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  OnIngadd(ingr:Ingredient){
//this.ingredients.push(ingr);

  }

}