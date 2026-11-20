import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex1-color-div',
  templateUrl: './ex1-color-div.html',
  styleUrl: './ex1-color-div.css',
})
export class Ex1ColorDiv {
  color = signal(''); // vide = couleur par défaut du CSS

  reset(input: HTMLInputElement) {
    input.value = '';
    this.color.set('');
  }
}
