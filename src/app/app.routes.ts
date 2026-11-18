import { Routes } from '@angular/router';
import { Ex1ColorDiv } from './exercices/ex1-color-div/ex1-color-div';
import { Ex2Ttc } from './exercices/ex2-ttc/ex2-ttc';
import { MiniWord } from './exercices/mini-word/mini-word';
import { RainbowDemo } from './exercices/rainbow/rainbow-demo/rainbow-demo';
import { Ex7Todo } from './exercices/ex7-todo/ex7-todo';
import { CvTech } from './exercices/cvtech/cvtech';
import { Ex8WeekTodo } from './exercices/ex8-week-todo/ex8-week-todo';

export const routes: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1ColorDiv },
  { path: 'ex2', component: Ex2Ttc },
  { path: 'cv', component: CvTech },
  { path: 'mini-word', component: MiniWord },       
  { path: 'rainbow', component: RainbowDemo },     
  { path: 'todo', component: Ex7Todo },             
  { path: 'week-todo', component: Ex8WeekTodo },     
  { path: '**', redirectTo: 'ex1' },

];