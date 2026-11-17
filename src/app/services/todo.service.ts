import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';

// Ex 7 : service Todo.
//
// Volontairement @Injectable() et NON @Service() / providedIn: 'root' :
// ce service n'est pas un singleton global. Chaque composant <app-ex7-todo>
// le déclare dans ses `providers` et obtient donc SA PROPRE instance
// (donc sa propre liste). C'est ce qui rend l'Ex 8 (WeekTodo) possible :
// 5 composants = 5 services = 5 listes indépendantes.
@Injectable()
export class TodoService {
  // Liste privée : seul le service peut la modifier.
  private readonly todos = signal<Todo[]>([]);

  /** Récupérer la liste des Todos (lecture seule pour le composant). */
  getTodos() {
    return this.todos.asReadonly();
  }

  /** Ajouter un Todo. */
  addTodo(todo: Todo): void {
    this.todos.update((list) => [...list, todo]);
    this.logTodos();
  }

  /** Supprimer un Todo. */
  deleteTodo(todo: Todo): void {
    this.todos.update((list) => list.filter((t) => t !== todo));
    this.logTodos();
  }

  /** Logger les todos dans la console. */
  logTodos(): void {
    console.log('Liste des todos :', this.todos());
  }
}
