import { Component,ngInit } from '@angular/core';
import{AppRoutingModule} from './app-routing/app-routing.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements ngInit  {
loadedfeature : string='recipe' ;
serverElements = [{type:'server',name : 'TestServer',content:'Just a test!'}];
  OnServerAdded(serverData :{serverName : string,serverContent : string}){
this.serverElements.push({
  type :'server',
  name : serverData.serverName,
  content : serverData.serverContent
});
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
