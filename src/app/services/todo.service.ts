import { Injectable, effect, signal } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  private readonly todos = signal<Todo[]>([]);

  // Logger les todos : l'effect se relance à chaque changement du signal todos
  private readonly logEffect = effect(() => this.logTodos());

  getTodos() {
    return this.todos.asReadonly();
  }

  addTodo(todo: Todo): void {
    this.todos.update((list) => [...list, todo]);
  }

  deleteTodo(todo: Todo): void {
    this.todos.update((list) => list.filter((t) => t !== todo));
  }

  logTodos(): void {
    console.log('Liste des todos :', this.todos());
  }
}