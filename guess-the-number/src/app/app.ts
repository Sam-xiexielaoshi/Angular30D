import { Component } from '@angular/core';
import { GuessTheNumber } from './guess-the-number/guess-the-number';

@Component({
  selector: 'app-root',
  imports: [GuessTheNumber],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'guess-the-number';
}
