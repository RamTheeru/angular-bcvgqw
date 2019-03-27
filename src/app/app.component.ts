import { Component,ngInit } from '@angular/core';
import{AppRoutingModule} from './app-routing/app-routing.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements ngInit  {
  nums : [] ;
  name = 'Angul';
  txt:string;
  count : number=0;
  isEven : boolean = false;
  txt= 'Put mouse here';
 ngOnInit(){
this.nums = [1,2,3,4,5,6,7];
   this.count=this.txt.length;
 }
 getcount(){
  console.log("haifirst");
this.count=this.txt.length;
console.log("hai");
  }
showeven(){
this.isEven=true;

}
onclicking(evnt:Event){
console.log('event emitted');

}
}
