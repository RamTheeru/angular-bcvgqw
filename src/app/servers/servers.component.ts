import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
servrcreationstatus : string = 'No New Server Created!';
  constructor() {

    setTimeout(()=> {

      this.allowNewServer = true;
    },3000);

    
   }
   getnewserver(){

     this.servrcreationstatus = 'New Server Created!!!!';
   }

  ngOnInit() {
  }

}