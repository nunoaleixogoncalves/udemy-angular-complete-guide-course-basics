import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGameOutput: EventEmitter<number> = new EventEmitter();
  number = 0;
  interval: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.number = 1;
    this.startGameOutput.emit(this.number)
    this.interval = setInterval(() => {
      this.number++;
      this.startGameOutput.emit(this.number)
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
