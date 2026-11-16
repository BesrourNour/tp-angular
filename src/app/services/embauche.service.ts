import { Injectable, computed, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private readonly _hiredCvs = signal<Cv[]>([]);

  readonly hiredCvs = this._hiredCvs.asReadonly();

  readonly hiredCount = computed(() => this._hiredCvs().length);

  readonly toastMessage = signal<string | null>(null);

  private toastTimer?: ReturnType<typeof setTimeout>;

  //  NOUVEAU : savoir si un CV est déjà embauché (sert au bouton dans cv-detail)
  isHired(cv: Cv): boolean {
    return this._hiredCvs().some(hiredCv => hiredCv.id === cv.id);
  }

  //  MODIFIÉ : utilise isHired() et ne renvoie plus de boolean (plus besoin des alert)
  embaucher(cv: Cv): void {
    if (this.isHired(cv)) {
      return;
    }

    this._hiredCvs.update(cvs => [...cvs, cv]);

    if (this.hiredCount() > 3) {
      this.showBudgetToast();
    }
  }

  //  NOUVEAU : supprimer un CV de la liste des embauchés
  debaucher(cv: Cv): void {
    this._hiredCvs.update(cvs => cvs.filter(hiredCv => hiredCv.id !== cv.id));
  }

  private showBudgetToast(): void {
    this.toastMessage.set(
      `Budget dépassé ! ${this.hiredCount()} CV ont été embauchés.`
    );

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => {
      this.toastMessage.set(null);
      this.toastTimer = undefined;
    }, 4000);
  }
}