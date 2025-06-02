import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name:string='Ash Ketchum';
  age:number=10;
  location:string='Pallet Town';
  description:string='Aspiring Pokémon Master';
}
