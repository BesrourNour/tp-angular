import { Service } from '@angular/core';
import { Cv } from '../models/cv';

@Service()
export class CvService {

  readonly cvs: readonly Cv[] = [
    { id: 1, name: 'Smadhi',     firstname: 'Nour',  age: 23, cin: '01234567', job: 'Chef',         path: 'avatars/a1.png' },
    { id: 2, name: 'Besrour',    firstname: 'Nour',  age: 22, cin: '07654321', job: 'Étudiante',    path: 'avatars/a2.png' },
    { id: 3, name: 'Torjmane',   firstname: 'Amal',  age: 22, cin: '09876543', job: 'Développeuse', path: 'avatars/a3.png' },
    { id: 4, name: 'Abdelkader', firstname: 'Louay', age: 23, cin: '12345678', job: 'Designer',     path: 'avatars/a4.png' },
    { id: 5, name: 'Bouzouita',  firstname: 'Baya',  age: 30, cin: '02340145', job: 'Enseignante',  path: 'avatars/a5.png' }
  ];

  getCvById(id: number): Cv | undefined {
    return this.cvs.find(cv => cv.id === id);
  }
}