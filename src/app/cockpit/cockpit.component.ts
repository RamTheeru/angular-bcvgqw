import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName : string,serverContent : string}>();
   @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName : string,serverContent : string}>();;

  constructor() { }

  ngOnInit() {
  }
  OnAddServer(){
this.serverCreated.emit({
  serverName : this.newServerName,
  serverContent:this.newServerContent
  });
  }
OnAddBlueprintServer(){
this.blueprintCreated.emit({
  serverName : this.newServerName,
  serverContent:this.newServerContent
  });
}

}