import { Component,ngInit,OnInit } from '@angular/core';
import { trigger, state,style, animate, transition,keyframes } from '@angular/animations';
import{AppRoutingModule} from './app-routing/app-routing.module';
import {LoggingService} from './logging.service';
import * as firebase from 'firebase';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[LoggingService],
  animations :[
    trigger('divstate',
    [
      state('', style({opacity:1, transform: 'translateX(0)' })),
        // transition('n=>*',[style({
        //   opacity:0,
        //   transform:'translateX(-100px)'
        // }),
        //   animate(500)])
        transition('void => h', [
      style({ transform: 'translateX(-100px)' }),
      animate(100)
    ]),
      
    ]
    )
  ]
})
export class AppComponent implements ngInit,OnInit  {
  message : string = '';
state='';
loadedfeature : string='recipe' ;
serverElements = [{type:'server',name : 'TestServer',content:'Just a test!'}];
  OnServerAdded(serverData :{serverName : string,serverContent : string}){
this.serverElements.push({
  type :'server',
  name : serverData.serverName,
  content : serverData.serverContent
});
this.message = 'New Server service added!!!!!!!!!!!!!!!';
this.serv.OnAddserver(this.message);

  }
  constructor(private serv : LoggingService){

  }
   Onchangefirst(){
   this.serverElements[0].name='changed!!!';
 }
 onNavigate(feature : string){
this.loadedfeature=feature;
}
  OnBlueprintServerAdded(blueprintData :{serverName : string,serverContent : string}){
    this.serverElements.push({
  type :'blueprint',
  name : blueprintData.serverName,
  content : blueprintData.serverContent
});
this.message = 'New Blueprint Server added';
  }
  ngOnInit(){
    this.state='h';
firebase.initializeApp({
apiKey: "AIzaSyDgv2WMJKVYy221teC75VDYBHqhx10YBfI",
  authDomain: "ng-recipe-book-2ef91.firebaseapp.com"
});

  }

//   nums : [] ;
//   name = 'Angul';
//   txt:string;
//   count : number=0;
//   isEven : boolean = false;
//   txt= 'Put mouse here';
//  ngOnInit(){
// this.nums = [1,2,3,4,5,6,7];
//    this.count=this.txt.length;
//  }
//  getcount(){
//   console.log("haifirst");
// this.count=this.txt.length;
// console.log("hai");
//   }
// showeven(){
// this.isEven=true;

// }
// onclicking(evnt:Event){
// console.log('event emitted');

// }
}
