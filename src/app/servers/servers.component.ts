import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverName = 'test';
serverCreated = false;
servrcreationstatus : string = 'No New Server Created!';
servers = ['testserver','testserver2'];
  constructor() {

    setTimeout(()=> {

      this.allowNewServer = true;
    },3000);

    
   }
   getnewserver(){
this.serverCreated = true;
this.servers.push(this.serverName);
     this.servrcreationstatus = 'New Server Created!!!!' + 'Name is '+this.serverName;
   }
updateserver(event : Event){
console.log(event);
this.serverName = (<HTMLInputElement>event.target).value;
}
  ngOnInit() {
  }

}