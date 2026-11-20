import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex1-color-div',
  templateUrl: './ex1-color-div.html',
  styleUrl: './ex1-color-div.css',
})
export class Ex1ColorDiv {
  // Angular 22 : OnPush par défaut -> l'état de la vue vit dans des signals.
  color = signal(''); // vide = couleur par défaut du CSS

  reset(input: HTMLInputElement) {
    input.value = '';
    this.color.set('');
  }
}
