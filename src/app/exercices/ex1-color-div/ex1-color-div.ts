import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1-color-div',
  templateUrl: './ex1-color-div.html',
  styleUrl: './ex1-color-div.css',
})
export class Ex1ColorDiv {
  color = ''; // vide = couleur par défaut du CSS

  reset(input: HTMLInputElement) {
    input.value = '';
    this.color = '';
  }
}