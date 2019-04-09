import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
 // newServerContent = '';
@ViewChild('serverContent') serverContent : ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName : string,serverContent : string}>();
   @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName : string,serverContent : string}>();;

  constructor() { }

  ngOnInit() {
  }
  OnAddServer(sname : HTMLInputElement){
this.serverCreated.emit({
  serverName : sname.value,
  serverContent:this.serverContent.nativeElement.value
  });
  }
OnAddBlueprintServer(sname : HTMLInputElement){
this.blueprintCreated.emit({
  serverName : sname.value,
  serverContent:this.serverContent.nativeElement.value
  });
}

}