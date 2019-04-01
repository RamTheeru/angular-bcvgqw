import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverid : number= 10;
serverStatus : string = '';
  constructor() { 

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getcolor(){

    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}