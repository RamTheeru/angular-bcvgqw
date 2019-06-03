import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @ViewChild('nameInput') nameInputRef : ElementRef;
// @ViewChild('amountInput') amountInputRef : ElementRef;
// @Output()  ingredientAddedd = new EventEmitter<Ingredient>();
 //@ViewChild('f') form : NgForm;
  constructor(private shopService : ShoppingListService) { }

  ngOnInit() {
  }
OnAddItem(form : NgForm){
  console.log(form);
  const value = form.value;
//   const ingName = this.nameInputRef.nativeElement.value;
// const ingAmount  =this.amountInputRef.nativeElement.value;
 const newIngredient = new Ingredient(value.name,value.amount);
//this.shopService.ingredientAddedd.next(newIngredient);
this.shopService.addIngredient(newIngredient);
}
}