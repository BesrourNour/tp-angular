
import { Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private readonly _cvs = signal<Cv[]>([
    new Cv(1, 'Nour', 'Smadhi', 23, '01234567', 'Chef', 'avatars/a1.png'),
    new Cv(2, 'Nour', 'Besrour', 22, '07654321', 'Étudiante', 'avatars/a2.png'),
    new Cv(3, 'Amal', 'Torjmane', 22, '09876543', 'Développeuse', 'avatars/a3.png'),
    new Cv(4, 'Louay', 'Abdelkader', 23, '12345678', 'Designer', 'avatars/a4.png'),
    new Cv(5, 'Baya', 'Bouzouita', 30, '02340145', 'Enseignante', 'avatars/a5.png')
  ]);

  readonly cvs = this._cvs.asReadonly();

  getCvById(id: number): Cv | undefined {
    return this._cvs().find(cv => cv.id === id);
  }
}
