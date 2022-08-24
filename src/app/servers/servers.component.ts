import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';

@Component({
  // selector: '[app-servers]'    // as atribute
  // selector: '.app-servers.'    // as class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-servers></app-servers>`
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  showSecret = false;
  servers = ['test server', 'test server 2'];
  clicks: any[] = [];

  // chapter. 5
  serverElements: Server[] = [new Server('teste 1', 'server', 'teste1')];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onShowSecret() {
    this.showSecret = !this.showSecret;
    this.clicks.push(this.showSecret ? 'show' : 'hide');
  }



}
