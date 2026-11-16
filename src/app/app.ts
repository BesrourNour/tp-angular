import { Component, signal } from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { HiredListComponent } from './hired-list/hired-list';

@Component({
  imports: [CvComponent, HiredListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cvtech');
}

