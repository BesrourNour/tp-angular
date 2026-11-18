// mini-word.ts
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  imports: [NgStyle, FormsModule],   // NgStyle pour [ngStyle], FormsModule pour [(ngModel)]
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css',
})
export class MiniWord {
  color = '#000000';   // couleur du texte
  size = 16;           // taille en px
  font = 'Arial';      // police
  fonts = ['Arial', 'Garamond', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS'];
}