import { Routes } from '@angular/router';
import { Ex1ColorDiv } from './exercices/ex1-color-div/ex1-color-div';
import { Ex2Ttc } from './exercices/ex2-ttc/ex2-ttc';


export const routes: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' }, // redirige vers ex1 automatiquement
  { path: 'ex1', component: Ex1ColorDiv },
  { path: 'ex2', component: Ex2Ttc },
  // { path: 'cv', component: CvList },              // P1 : Ex 3 + Ex 5
  // { path: 'embauche', component: ... },           // P2 : Ex 9
  // { path: 'mini-word', component: MiniWord },     // P3 : Ex 4
  // { path: 'rainbow', component: Rainbow },        // P3 : Ex 6
  // { path: 'todo', component: Todo },              // P4 : Ex 7
  // { path: 'week-todo', component: WeekTodo },     // P4 : Ex 8
  { path: '**', redirectTo: 'ex1' },
];