import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2-ttc',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './ex2-ttc.html',
  styleUrl: './ex2-ttc.css',
})
export class Ex2Ttc {
  // Valeurs par défaut de l'énoncé : quantité 1, prix 0, TVA 18 %
  quantite = signal(1);
  prix = signal(0);
  tva = signal(18);

  // Remise : > 15 pièces → 30 % ; de 10 à 15 → 20 % ; sinon 0
  remise = computed(() => {
    const q = this.quantite();
    if (q > 15) return 0.3;
    if (q >= 10) return 0.2;
    return 0;
  });

  totalHT = computed(() => (this.quantite() ?? 0) * (this.prix() ?? 0));
  totalApresRemise = computed(() => this.totalHT() * (1 - this.remise()));
  totalTTC = computed(() => this.totalApresRemise() * (1 + (this.tva() ?? 0) / 100));
}
