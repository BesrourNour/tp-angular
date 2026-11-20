import { Component, inject, signal } from '@angular/core'; 
import { CvListComponent } from '../cv-list/cv-list.component';
import { CvDetailComponent } from '../cv-detail/cv-detail.component';
import { Cv } from '../../../models/cv';
import { CvService } from '../../../services/cv.service';

@Component({
  selector: 'app-cv',
  imports: [CvListComponent, CvDetailComponent], 
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  private readonly cvService = inject(CvService);

  readonly cvs = this.cvService.cvs;

  readonly selectedCv = signal<Cv | null>(null); 

  onSelectCv(cv: Cv): void {
    this.selectedCv.set(cv); //
  }
}