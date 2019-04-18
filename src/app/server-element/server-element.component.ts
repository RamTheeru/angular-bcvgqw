import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges {
@Input('srvElement')  element : {type:string,name : string,content :string};
@Input() name:string;
  constructor() {
    console.log('construct  called !!');
   }

  ngOnInit() {
    console.log('ngoninit  called !!');
  }
  ngOnChanges(changes : SimpleChanges){
console.log('ngOnchanges  called !!');
console.log(changes);
  }
getcolor(){
 if(this.element.type=='server')
 {
   return 'red';
 }
 else{
   return 'blue';
 }

}
}