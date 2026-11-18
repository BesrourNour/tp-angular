// src/app/exercices/rainbow/rainbow.ts
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
})
export class Rainbow {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';

  @HostListener('keyup')
  onKeyUp() {
    const newColor = this.getRandomColor();
    this.color = newColor;
    this.borderColor = newColor;
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}