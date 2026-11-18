import { Component, inject } from '@angular/core';
import { Cv } from '../../../models/cv';                   
import { EmbaucheService } from '../../../services/embauche.service';

@Component({
  selector: 'app-hired-list',
  imports: [],
  templateUrl: './hired-list.html',
  styleUrl: './hired-list.css'
})
export class HiredListComponent {
  private readonly embaucheService = inject(EmbaucheService);

  readonly hiredCvs = this.embaucheService.hiredCvs;
  readonly hiredCount = this.embaucheService.hiredCount;
  readonly toastMessage = this.embaucheService.toastMessage;

  supprimer(cv: Cv): void {
    this.embaucheService.debaucher(cv);
  }
}