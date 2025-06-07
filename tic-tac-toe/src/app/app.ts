import { Component } from '@angular/core';
import { TicTacToe } from './tic-tac-toe/tic-tac-toe';

@Component({
  selector: 'app-root',
  imports: [TicTacToe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'tic-tac-toe';
}
