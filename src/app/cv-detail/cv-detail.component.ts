import { Component, computed, input, inject } from '@angular/core'; 
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  imports: [],
  templateUrl: './cv-detail.component.html',
  styleUrl: './cv-detail.component.css',
})
export class CvDetailComponent {

  cv = input<Cv | null>(null);

  private readonly embaucheService = inject(EmbaucheService);

  //  NOUVEAU : true si le CV affiché est déjà dans la liste des embauchés
  readonly dejaEmbauche = computed(() => {
    const c = this.cv();
    return !!c && this.embaucheService.isHired(c);
  });

  // MODIFIÉ : plus d'alert, le bouton désactivé suffit
  embaucher(): void {
    const selectedCv = this.cv();
    if (selectedCv) {
      this.embaucheService.embaucher(selectedCv);
    }
  }
}