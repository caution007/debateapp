import { Component, OnInit, OnDestroy } from '@angular/core';

import { ClientService } from './../client/client.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  private msg = '';
  private chat = [];

  private user = '';
  private userList = [];

  private msgConnection;
  private userConnection;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.msgConnection = this.clientService.observableMethod('msg').subscribe(msg => {
      console.log(msg);
      this.chat.push(msg);
    })

    this.userConnection = this.clientService.observableMethod('client-list').subscribe(msg => {
      
    })
  }

  ngOnDestroy() {
    this.msgConnection.unsubscribe();
  } 

  sendMsg() {
    this.clientService.sendMsg(this.msg);
  }


}
