import { Component, Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><br/>
  <input type="button" value="Press" (ch)="onclicking($event)" >`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() ch : EventEmitter<any> = new EventEmitter<any>();
constructor(){

}
ngOnInit(){
console.log(this.ch);
  this.ch.emit('Its working');
}

}
