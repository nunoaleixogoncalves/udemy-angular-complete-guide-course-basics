import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3{
  //     color: red;
  //   }
  // `]
})
export class AppComponent {
  name = 'Nuno';

  numbers: number[] = [];

  numbers2 = [1, 2, 3, 4, 5];
  onlyOdd = false;
  constructor() { }

  startGameOutput(number: number) {
    this.numbers.push(number);
  }
}
