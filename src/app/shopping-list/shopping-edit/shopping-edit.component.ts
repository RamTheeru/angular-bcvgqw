import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef : ElementRef;
@ViewChild('amountInput') amountInputRef : ElementRef;
// @Output()  ingredientAddedd = new EventEmitter<Ingredient>();
  constructor(private shopService : ShoppingListService) { }

  ngOnInit() {
  }
OnAddItem(){
  const ingName = this.nameInputRef.nativeElement.value;
const ingAmount  =this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName,ingAmount);
//this.shopService.ingredientAddedd.next(newIngredient);
this.shopService.addIngredient(newIngredient);
}
}