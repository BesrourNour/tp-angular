import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2-ttc',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './ex2-ttc.html',
  styleUrl: './ex2-ttc.css',
})
export class Ex2Ttc {
  quantite = 1;
  prix = 0;
  tva = 18;

  // Remise : > 15 pièces → 30 % ; de 10 à 15 → 20 % ; sinon 0
  get remise(): number {
    if (this.quantite > 15) return 0.3;
    if (this.quantite >= 10) return 0.2;
    return 0;
  }

  get totalHT(): number {
    return this.quantite * this.prix;
  }

  get totalApresRemise(): number {
    return this.totalHT * (1 - this.remise);
  }

  get totalTTC(): number {
    return this.totalApresRemise * (1 + this.tva / 100);
  }
}