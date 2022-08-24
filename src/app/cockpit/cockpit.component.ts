import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // cha. 5
  newServerName: string = '';
  newServerContent: string = '';
  @Output() serverCreated: EventEmitter<Server> = new EventEmitter();
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  teste: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
