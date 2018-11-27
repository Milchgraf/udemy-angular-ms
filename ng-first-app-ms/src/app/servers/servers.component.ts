import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  username: String = '';
  serverCreated = false;
  toggle = false;
  clickLogger = [];

  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onSubmitUsername(event) {
    this.username = '';
  }

  onToggleParagraph() {
    this.toggle = !this.toggle;
    this.clickLogger.push(new Date);
  }

}
