import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output,OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
// @ViewChild('nameInput') nameInputRef : ElementRef;
// @ViewChild('amountInput') amountInputRef : ElementRef;
// @Output()  ingredientAddedd = new EventEmitter<Ingredient>();
 @ViewChild('f') slform : NgForm;
 subscrp : Subscription ;
 editMode = false;
 editedItemindex : number;
 editedItem : Ingredient;
  constructor(private shopService : ShoppingListService) { }

  ngOnInit() {
this.subscrp = this.shopService.startedEditing.subscribe(
(index : number)=>{
  this.editMode = true;
  this.editedItemindex=index;
  this.editedItem = this.shopService.getIndredient(this.editedItemindex);
  this.slform.setValue({
    name : this.editedItem.name,
    amount : this.editedItem.amount
  })
}
);
  }
OnAddItem(form : NgForm){
  console.log(form);
  const value = form.value;
//   const ingName = this.nameInputRef.nativeElement.value;
// const ingAmount  =this.amountInputRef.nativeElement.value;
 const newIngredient = new Ingredient(value.name,value.amount);
//this.shopService.ingredientAddedd.next(newIngredient);
if(this.editMode)
{
  this.shopService.updateIngredient(this.editedItemindex,newIngredient);
}
else{
this.shopService.addIngredient(newIngredient);
}
this.editMode = false
form.reset();
}
ngOnDestroy(){
this.subscrp.unsubscribe();
}
}