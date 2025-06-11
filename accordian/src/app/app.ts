import { Component } from '@angular/core';
import { Faq } from './faq/faq';

@Component({
  selector: 'app-root',
  imports: [Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
