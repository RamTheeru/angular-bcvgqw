import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {DataStorageService} from '../shared/datastorage.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureselected = new EventEmitter<string>();
  constructor(private dataServ : DataStorageService,private auth :AuthService) { }

  ngOnInit() {
  }
Onselect(feature : string){
this.featureselected.emit(feature);

}
storeRecipes(){
this.dataServ.storeRecipes()
.subscribe(
  (response : Response)=>{
console.log(response);
  }
);
}
getStoredRecipes(){
  this.dataServ.getStoredRecipes();
}
onlogout(){
  this.auth.logout();
}
}