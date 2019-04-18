import { Component, OnInit,Input,OnChanges,SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {
@Input('srvElement')  element : {type:string,name : string,content :string};
@Input() name:string;
@ViewChild('header') header : ElementRef;
  constructor() {
    console.log('construct  called !!');
   }

  ngOnInit() {
    console.log('ngoninit  called !!');
    //console.log('Text Content '+this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
console.log('ngAfterViewChecked  called !!');
  }
  ngAfterViewInit(){
console.log('ngAfterViewInit  called !!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit  called !!');
  }
  ngDoCheck(){
console.log('ngDoCheck  called !!');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked  called !!');
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