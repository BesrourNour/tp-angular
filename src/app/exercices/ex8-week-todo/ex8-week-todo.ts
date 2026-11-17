import { Component } from '@angular/core';
import { Ex7Todo } from '../ex7-todo/ex7-todo';

@Component({
  selector: 'app-ex8-week-todo',
  imports: [Ex7Todo],
  templateUrl: './ex8-week-todo.html',
  styleUrl: './ex8-week-todo.css',
})
export class Ex8WeekTodo {
  // 5 jours = 5 composants Todo, chacun avec son propre TodoService.
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}
