import { Component, OnInit,OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
// providers :[ShoppingListService]
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private subsc : Subscription;
ingredients :Ingredient[];
  constructor(private shopService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.subsc=this.shopService.ingredientAddedd.subscribe(
      (ingredients : Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  OnIngadd(ingr:Ingredient){
//this.ingredients.push(ingr);

  }
  ngOnDestroy(){
    this.subsc.unsubscribe();
  }
onEditItem(index:number){
  this.shopService.startedEditing.next(index);
}
}