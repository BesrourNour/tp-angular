import { Component } from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { HiredListComponent } from './hired-list/hired-list';

@Component({
  selector: 'app-cvtech',
  imports: [CvComponent, HiredListComponent],
  template: `
    <h2>CvTech</h2>
    <app-cv />
    <app-hired-list />
  `,
})
export class CvTech {}
