import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  imports: [NgStyle, FormsModule],
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css',
})
export class MiniWord {
  color = signal('#000000');
  size = signal(16);
  font = signal('Arial');
  readonly fonts = ['Arial', 'Garamond', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS'];
}